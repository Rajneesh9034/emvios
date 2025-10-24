<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Investment;
use App\Models\Income;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Log;
use Redirect;
use Hash;
use Helper;

class Invest extends Controller
{

  private $downline = "";

  public function index(Request $request)
  {
    $user = Auth::user();
    $invest_check = Investment::where('user_id', $user->id)->where('status', '!=', 'Decline')->orderBy('id', 'desc')->limit(1)->first();

    $userInfo = auth()->user();
    $refId = $userInfo->username;

    $network = 'BSC'; // default BSC
    $networkMap = [
      'BSC'  => 'bep20',
      'Tron' => 'trc20',
    ];
    $chain = $networkMap[$network] ?? 'bep20';

    $url = "https://api.cryptapi.io/{$chain}/usdt/create/";

    $queryParams = [
      'callback'      => 'https://www.sabiocryptotrade.com/dynamicupicallback?refid=' . $refId,
      'address'       => $chain == 'bep20' ? '0xE16FbAC91747cA74f125666aEF34B11D14d12a47' : 'TD4KhBToV1nKRumY4L7jJzR4cWLK9xzmyb', // real Tron address
      'pending'       => 0,
      'confirmations' => 1,
      'email'         => 'string',
      'post'          => 0,
      'priority'      => 'default',
      'multi_token'   => 0,
      'multi_chain'   => 0,
      'convert'       => 0,
    ];

    $response = Http::get($url, $queryParams);
    $data = $response->json();
    unset($data['callback_url']);

    // ✅ अगर AJAX call है → JSON return करो
    if ($request->ajax()) {
      return response()->json([
        'success' => true,
        'data' => [
          'address' => $data['address_in'] ?? '',
          'qr_code' => "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" . urlencode($data['address_in'] ?? ''),
        ]
      ]);
    }

    $balance = round(Auth::user()->FundBalance(), 2);
    $address = $data['address_in'] ?? '';
 $qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" . urlencode($address);

    // ✅ Normal page load (HTML view)
    $this->data['data'] = $data;
    $this->data['selectedNetwork'] = $network;
    $this->data['balance'] = $balance;
    $this->data['qr_code'] = $qrCodeUrl;

    $this->data['last_package'] = ($invest_check) ? $invest_check->amount : 0;
    $this->data['page'] = 'user.invest.Deposit';
    return $this->dashboard_layout();
  }

  // public function affialiate()
  // {

  //   $this->data['page'] = 'user.affialiate';
  //   return $this->dashboard_layout();
  // }

public function affialiate()
{
    $user = Auth::user(); // Logged-in user

    $referralUsername = $user->username; // Assuming you have a 'username' column
    $referralLink = route('register', ['ref' => $referralUsername]);

    $this->data['referralLink'] = $referralLink;
    $this->data['page'] = 'user.affialiate';

    return $this->dashboard_layout();
}


  public function deposit()
  {
    $user = Auth::user();
    $invest_check = Investment::where('user_id', $user->id)->where('status', '!=', 'Decline')->orderBy('id', 'desc')->limit(1)->first();

    $this->data['last_package'] = ($invest_check) ? $invest_check->amount : 0;
    $this->data['page'] = 'user.invest.Deposit2';
    return $this->dashboard_layout();
  }



  public function deposit2(Request $request)
  {

    // dd("hiii");
    try {
      $validation =  Validator::make($request->all(), [
        'amount' => 'required|numeric|min:100',
        // 'paymentMode' => 'required',
        'username' => 'required|exists:users,username'
      
      ]);

      if ($validation->fails()) {
        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
      }

      $user = Auth::user();

      $password = $request->transaction_password;


      // date_default_timezone_set("Asia/Kolkata");   //India time (GMT+5:30)
      // $plan = "1";

      $user_detail = User::where('username', $request->username)->orderBy('id', 'desc')->limit(1)->first();
     
      // $invest_check = Investment::where('user_id', $user_detail->id)->where('status', '!=', 'Decline')->orderBy('id', 'desc')->limit(1)->first();
      // $invoice = substr(str_shuffle("0123456789"), 0, 7);
      $joining_amt = $request->amount;


       $balance = round(Auth::user()->FundBalance(), 2);

      // $last_package = ($invest_check) ? $invest_check->amount : 0;

      // if ($last_package > 0 && $request->amount < 100) {
      //   return Redirect::back()->withErrors(['Minimum Topup is 100 USDT.']);
      // }




      $invoice = substr(str_shuffle("0123456789"), 0, 7);



      

        if ($balance >= $request->amount) {
          // $nextCycle =Carbon::parse(Date("Y-m-d H:i:s"))->addDays(10)->format('Y-m-d H:i:s');
                      $data = [
            'orderId' => $invoice,
            'plan' => 1,
            'transaction_id' => md5(time() . rand()),
            'user_id' => $user_detail->id,
            'user_id_fk' => $user_detail->username,
            'amount' => $request->amount,
            'payment_mode' => 'USDT',
            'status' => 'Active',
            'sdate' => Date("Y-m-d"),
           //  'next_date' =>$nextCycle,
            'active_from' => $user->username,
            'walletType' => 1,
          ];
          $payment =  Investment::insert($data);
            $notify[] = ['success', 'user activation submitted successfully'];
          return redirect()->route('user.invest')->withNotify($notify);
         



          if ($user_detail->active_status == "Pending") {
            $user_update = array('active_status' => 'Active', 'adate' => Date("Y-m-d H:i:s"), 'package' => $request->amount, 'rank' => 1);
            User::where('id', $user_detail->id)->update($user_update);
          } else {
            $total = $user_detail->package + $request->amount;
            $user_update = array('active_status' => 'Active', 'package' => $total);
            User::where('id', $user_detail->id)->update($user_update);
          }

          add_direct_income($user_detail->id, $request->amount);
        
        } else {
          return Redirect::back()->withErrors(['Insufficient balance in your account.']);
        }
     
    } catch (\Exception $e) {
      Log::info('error here');
      Log::info($e->getMessage());
      print_r($e->getMessage());
      die("hi");
      return  redirect()->route('user.dashboard')->withErrors('error', $e->getMessage())->withInput();
    }
  }

  public function cancel_payment($id)

  {

    Investment::where('orderId', $id)->update(['status' => 'Decline']);

    $notify[] = ['success', 'Deposit canceled successfully'];
    return redirect()->route('user.invest')->withNotify($notify);
  }

  public function confirmDeposit(Request $request)
  {
    try {
      $validation =  Validator::make($request->all(), [
        'amount' => 'required|numeric|min:10',
        'username' => 'required|exists:users,username'
      ]);


      //  dd($request->all());
      if ($validation->fails()) {
        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
      }




      $user = Auth::user();


      $userDetail = User::where('username', $request->username)->first();

      $invest_check = Investment::where('user_id', $userDetail->id)->where('status', 'Pending')->first();

      // if ($invest_check) 
      // {
      //   return redirect()->route('user.DepositHistory')->withErrors(array('your deposit already pending please cancel it if you dont want to pay this transaction'));
      // }



      $plan = 'BEGINNER';

      $invest_check = Investment::where('user_id', $userDetail->id)->where('status', '!=', 'Decline')->orderBy('id', 'desc')->limit(1)->first();
      $last_package = ($invest_check) ? $invest_check->amount : 0;
      if ($request->amount <= $last_package) {

        return Redirect::back()->withErrors(array('you have already chosen this plan choose another plan'));
      }




        $amountTotal = $request->amount;
        $amount = $request->amount;

        
        $invoice = substr(str_shuffle("0123456789"), 0, 7);



        // $this->data['paymentMode'] = $paymentMode;
        $this->data['orderId'] = $invoice;
        $this->data['amount'] = $amount;
       
        $this->data['username'] = $request->username;
        $this->data['page'] = 'user.invest.confirm-deposit';
        return $this->dashboard_layout();
     
    } catch (\Exception $e) {
      Log::info('error here');
      Log::info($e->getMessage());
      print_r($e->getMessage());
      die("hi");
      return  redirect()->route('user.invest')->withErrors('error', $e->getMessage())->withInput();
    }
  }



  public function confirmDeposit_new(Request $request)
  {
    try {
      $validation =  Validator::make($request->all(), [
        'Sum' => 'required|numeric|min:2',
        'PSys' => 'required',
      ]);

      //  dd($request->all());
      if ($validation->fails()) {
        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
      }




      $user = Auth::user();
      $invest_check = Investment::where('user_id', $user->id)->where('status', 'Pending')->first();

      if ($invest_check) {
        return Redirect::back()->withErrors(array('your deposit already pending'));
      }


      $min_amount = $request->minimum_deposit;
      $max_amount = $request->maximum_deposit;
      $plan = $request->Plan;
      $paymentMode = $request->PSys;
      $amount = $request->Sum;



      if ($amount < $min_amount || $amount > $max_amount) {
        return Redirect::back()->withErrors(array('minimum deposit is $ ' . $min_amount . ' and maximum is $ ' . $max_amount));
      }


      $plan = 'BEGINNER';
      if ($amount >= 50 && $amount <= 200) {
        $plan = 'BEGINNER';
      } elseif ($amount >= 400 && $amount <= 800) {
        $plan = 'STANDARD';
      } elseif ($amount >= 1000 && $amount <= 2000) {
        $plan = 'EXCLUSIVE';
      } elseif ($amount >= 2500 && $amount <= 5000) {
        $plan = 'ULTIMATE';
      } elseif ($amount >= 5000 && $amount <= 10000) {
        $plan = 'PREMIUM';
      } elseif ($amount >= 5000) {
        $plan = 'PREMIUM';
      }

      $invest_check = Investment::where('user_id', $user->id)->where('plan', $plan)->where('status', '!=', 'Decline')->orderBy('id', 'desc')->limit(1)->first();

      if ($invest_check) {
        return Redirect::back()->withErrors(array('you have already chosen this plan choose another plan'));
      }

      $amountTotal = $request->Sum;


      if ($paymentMode == "USDT.BEP20") {
        $paymentMode = "USDT_BSC";
      } else {
        $paymentMode = "USDT_TRX";
      }

      $invoice = substr(str_shuffle("0123456789"), 0, 7);
      $apiURL = 'https://plisio.net/api/v1/invoices/new';
      $postInput = [
        'source_currency' => 'USD',
        'source_amount' => $amountTotal,
        'order_number' => $invoice,
        'currency' => $paymentMode,
        'email' => $user->email,
        'order_name' => $user->username,
        'callback_url' => 'https://sparkglobal.ai/dynamicupicallback?json=true',
        'api_key' => '_sCJaOONwTnmkMPZJXyubjqoOwsx7d6I2_7JMCHelakspOSzDZJW4OaAXO5yLOIO',
      ];

      $headers = [
        'Content-Type' => 'application/json'
      ];

      $response = Http::withHeaders($headers)->get($apiURL, $postInput);

      $statusCode = $response->status();
      $resultAarray = json_decode($response->getBody(), true);


      if ($resultAarray['status'] == "success") {

        $data = [
          'plan' => $plan,
          'orderId' => $invoice,
          'transaction_id' => $resultAarray['data']['txn_id'],
          'user_id' => $user->id,
          'user_id_fk' => $user->username,
          'amount' => $amountTotal,
          'token' => $request->amount / tokenPrice(),
          'payment_mode' => $paymentMode,
          'status' => 'Pending',
          'sdate' => Date("Y-m-d"),
          'walletType' => 1,
          'active_from' => $user->username,
        ];
        $payment =  Investment::insert($data);



        $this->data['walletAddress'] = $resultAarray['data']['wallet_hash'];
        $this->data['paymentMode'] = $paymentMode;
        $this->data['transaction_id'] = $resultAarray['data']['txn_id'];
        $this->data['qr_code'] = $resultAarray['data']['qr_code'];
        $this->data['orderId'] = $invoice;
        $this->data['amount'] = $amount;
        $this->data['invoice_total_sum'] = $resultAarray['data']['invoice_total_sum'];
        $this->data['page'] = 'user.invest.confirmDeposit';
        return $this->dashboard_layout();
      } else {
        return Redirect::back()->withErrors(array('try again'));
      }
    } catch (\Exception $e) {
      Log::info('error here');
      Log::info($e->getMessage());
      print_r($e->getMessage());
      die("hi");
      return  redirect()->route('user.invest')->withErrors('error', $e->getMessage())->withInput();
    }
  }





  public function fundActivation(Request $request)
  {

    try {
      $validation =  Validator::make($request->all(), [
        'amount' => 'required',
        
        'orderId' => 'required',
        
        'username' => 'required|exists:users,username'
      ]);
      // 

      if ($validation->fails()) {


        // dd($request->all());

        Log::info($validation->getMessageBag()->first());

        return redirect()->route('user.invest')->withErrors($validation->getMessageBag()->first())->withInput();
      }



      $user = Auth::user();

      $plan = "1";

      $working_amt = $request->working_wallet;
      $cash_amt = $request->cash_wallet;

      $total = $working_amt + $cash_amt;

      if ($request->amount != $total) {
        return redirect()->route('user.invest')->withErrors(array('invalid packages'));
      }



      $user_detail = User::where('username', $request->username)->orderBy('id', 'desc')->limit(1)->first();
      $invest_check = Investment::where('user_id', $user_detail->id)->where('status', '!=', 'Decline')->orderBy('id', 'desc')->limit(1)->first();
      $invoice = substr(str_shuffle("0123456789"), 0, 7);
      $joining_amt = $request->amount * 50 / 100;
      $plan = 'BEGINNER';

      $workingBalance = round(Auth::user()->workingBalance(), 2);
      $spotBalance = round(Auth::user()->FundBalance(), 2);


      if ($workingBalance >= $working_amt && $spotBalance >= $cash_amt) {
        $last_package = ($invest_check) ? $invest_check->amount : 0;

        $data = [
          'plan' => $plan,
          'orderId' => $request->orderId,
          'transaction_id' => md5(uniqid(rand(), true)),
          'user_id' => $user_detail->id,
          'user_id_fk' => $user_detail->username,
          'amount' => $request->amount,
          'working_amt' => $working_amt,
          'cash_amt' => $cash_amt,
          'token' => $request->amount / tokenPrice(),
          'payment_mode' => 'USDT',
          'status' => 'Active',
          'sdate' => Date("Y-m-d"),
          'active_from' => $user->username,
          'walletType' => 2,
        ];
        $payment =  Investment::insert($data);

        if ($user_detail->active_status == "Pending") {
          $user_update = array('active_status' => 'Active', 'adate' => Date("Y-m-d H:i:s"), 'package' => $request->amount);
          User::where('id', $user_detail->id)->update($user_update);
        } else {
          $total = $user_detail->package + $request->amount;
          $user_update = array('active_status' => 'Active', 'package' => $total);
          User::where('id', $user_detail->id)->update($user_update);
        }

        $notify[] = ['success', 'user activation successfully'];
        return redirect()->route('user.invest')->withNotify($notify);


        # code...
      } else {
        return redirect()->route('user.invest')->withErrors(array('insufficient balance in Wallet'));
      }
    } catch (\Exception $e) {
      Log::info('error here');
      Log::info($e->getMessage());
      print_r($e->getMessage());
      die("hi");
      return  redirect()->route('user.invest')->withErrors('error', $e->getMessage())->withInput();
    }
  }



  public function invest_list(Request $request)
  {

    $user = Auth::user();
    $limit = $request->limit ? $request->limit : paginationLimit();
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;
    $notes = Investment::where('user_id', $user->id);
    if ($search <> null && $request->reset != "Reset") {
      $notes = $notes->where(function ($q) use ($search) {
        $q->Where('sdate', 'LIKE', '%' . $search . '%')
          ->orWhere('transaction_id', 'LIKE', '%' . $search . '%')
          ->orWhere('status', 'LIKE', '%' . $search . '%')
          ->orWhere('orderId', 'LIKE', '%' . $search . '%')
          ->orWhere('amount', 'LIKE', '%' . $search . '%'); 
      });
    }

    $notes = $notes->paginate($limit)->appends(['limit' => $limit]);

    $this->data['search'] = $search;
    $this->data['deposit_list'] = $notes;
    $this->data['page'] = 'user.invest.DepositHistory';
    return $this->dashboard_layout();
  }
  public function investment()
  {
    $this->data['page'] = 'user.invest.new_investment';
    return $this->dashboard_layout();
  }
}
