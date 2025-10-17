<?php

namespace App\Http\Controllers\UserPanel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\BuyFund;
use App\Models\User;    
use App\Models\Fundtransfer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Hexters\CoinPayment\CoinPayment;
use App\Models\CoinpaymentTransaction;
use Illuminate\Support\Facades\Http;
use Log;
use Redirect;
class AddFund extends Controller
{

// public function index(Request $request)
// {

// $user=Auth::user();
// $this->data['page'] = 'user.fund.addFund';
// return $this->dashboard_layout();

// }



public function transfer_fund(Request $request)
{

$user=Auth::user();
$this->data['page'] = 'user.fund.transfer-fund';
return $this->dashboard_layout();

}

public function cancel_payment($id)
{
    
    BuyFund::where('orderId',$id)->update(['status' => 'Failed']);
        $notify[] = ['success','Add Fund canceled successfully'];
        return redirect()->route('user.AddFund')->withNotify($notify);
    
}



public function submitfundtransfer(Request $request)
{

try{
$validation =  Validator::make($request->all(), [
   
    'amount' => 'required|numeric|min:1',
    'user_id' => [
        'required',
        'exists:users,username',
        Rule::notIn([Auth::user()->username]),
    ],

]);


if($validation->fails()) {
    Log::info($validation->getMessageBag()->first());

    return Redirect::back()->withErrors($validation->getMessageBag()->first())->withInput();
}
   $user=Auth::user();

   $password= $request->transaction_password;

   

   $balance=Auth::user()->FundBalance();

      $user_detail=User::where('username',$request->user_id)->orderBy('id','desc')->limit(1)->first();
       
        if ($balance>=$request->amount)
         {

            $data = [
                'transfer_id'=>$user->id,   
                'transfered_id'=>$user_detail->id,   
                'user_id_from'=>$user->username,   
                'user_id_to'=>$user_detail->username,   
                'amount' => $request->amount,
                'transfer_date' => Date("Y-m-d"),
                ];
                $payment =  Fundtransfer::create($data);

            $notify[] = ['success', $user_detail->username.' Fund Transferred successfully'];
            return redirect()->back()->withNotify($notify);

        }
        else
        {
            return Redirect::back()->withErrors(array('insufficient balance in Wallet'));
        }
        


    }
    catch(\Exception $e){
    Log::info('error here');
    Log::info($e->getMessage());
    print_r($e->getMessage());
    die("hi");
    return  redirect()->route('user.invest')->withErrors('error', $e->getMessage())->withInput();
    }



    }




public function fundHistory(Request $request)
{

   
    $user=Auth::user();
    $limit = $request->limit ? $request->limit : paginationLimit();
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;
    $notes = BuyFund::where('user_id',$user->id);
    if($search <> null && $request->reset!="Reset"){
    $notes = $notes->where(function($q) use($search){
        $q->Where('user_id_fk', 'LIKE', '%' . $search . '%')
        ->orWhere('txn_no', 'LIKE', '%' . $search . '%')
        ->orWhere('orderId', 'LIKE', '%' . $search . '%')
        ->orWhere('status', 'LIKE', '%' . $search . '%')
        ->orWhere('type', 'LIKE', '%' . $search . '%')
        ->orWhere('amount', 'LIKE', '%' . $search . '%');
    });

    }

    $notes = $notes->paginate($limit)
        ->appends([
            'limit' => $limit
        ]);

    $this->data['search'] =$search;
    $this->data['level_income'] =$notes;
    $this->data['page'] = 'user.fund.fundHistory';
    return $this->dashboard_layout();

}




public function index(Request $request)
{
    $userInfo = auth()->user();
    $refId = $userInfo->username;

    $network = $request->network ?? 'BSC'; // default BSC
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

    // ✅ Normal page load (HTML view)
    $this->data['data'] = $data;
    $this->data['selectedNetwork'] = $network;
    $this->data['page'] = 'user.fund.addfund';
    return $this->dashboard_layout();
}




// public function SubmitBuyFund(Request $request)
// {

//   try{
//         $validation =  Validator::make($request->all(), [
//             'amount' => 'required|numeric|min:0',
//             'currency' => 'required'
//         ]);

//         if($validation->fails()) {
//             Log::info($validation->getMessageBag()->first());

//             return redirect()->route('user.AddFund')->withErrors($validation->getMessageBag()->first())->withInput();
//         }

//            $user=Auth::user();
                   
//            $amountTotal = $request->amount;
//            $paymentMode = $request->currency;
//            $invoice = substr(str_shuffle("0123456789"), 0, 7);
//            $apiURL = 'https://plisio.net/api/v1/invoices/new';
//             $postInput = [
//             'source_currency' => 'USD',
//             'source_amount' => $amountTotal,
//             'order_number' => $invoice,
//             'currency' => $paymentMode,
//             'email' => $user->email,
//             'order_name' =>$user->username,
//             'callback_url' => 'https://sparkglobal.live/releasefund?json=true',
//             'api_key' => '_sCJaOONwTnmkMPZJXyubjqoOwsx7d6I2_7JMCHelakspOSzDZJW4OaAXO5yLOIO',
//             ];
      
//             $headers = [
//                 'Content-Type' => 'application/json'
//             ];
      
//             $response = Http::withHeaders($headers)->get($apiURL, $postInput);
      
//             $statusCode = $response->status();
//             $resultAarray = json_decode($response->getBody(), true);


//         if($resultAarray['status']=="success")
//         {

//             // dd($resultAarray);
//             $data = [
//                     'orderId' => $invoice,
//                     'txn_no' =>$resultAarray['data']['txn_id'],
//                     'user_id' => $user->id,
//                     'user_id_fk' => $user->username,
//                     'amount' => $amountTotal,
//                     'type' =>$paymentMode,
//                     'status' => 'Pending',
//                     'bdate' => Date("Y-m-d"),
//                 ];
//                 $payment =  BuyFund::create($data);
                        
                    
            
//             $this->data['walletAddress'] =$resultAarray['data']['wallet_hash'];
//             $this->data['paymentMode'] =$paymentMode;
//             $this->data['transaction_id'] =$resultAarray['data']['txn_id'];
//             $this->data['qr_code'] =$resultAarray['data']['qr_code'];
//             $this->data['orderId'] =$invoice;
//             $this->data['amount'] =$amountTotal;
//             $this->data['invoice_total_sum'] =$resultAarray['data']['invoice_total_sum'];
//             $this->data['page'] = 'user.fund.confirm';
//             return $this->dashboard_layout();

//             }
//             else
//             {
//                 return Redirect::back()->withErrors(array('try again'));
//             }



//       }
//        catch(\Exception $e){
//         Log::info('error here');
//         Log::info($e->getMessage());
//         print_r($e->getMessage());
//         die("hi");
//         return  redirect()->route('user.AddFund')->withErrors('error', $e->getMessage())->withInput();
//     }

// }



public function transfer_report(Request $request)
{ 
  $user=Auth::user();
  $limit = $request->limit ? $request->limit : paginationLimit();
    $status = $request->status ? $request->status : null;
    $search = $request->search ? $request->search : null;
    $notes = Fundtransfer::with('userFrom')
    ->where('transfer_id', $user->id)
    ->orWhere('transfered_id', $user->id);          
    if($search <> null && $request->reset!="Reset"){
    $notes = $notes->where(function($q) use($search){
      $q->Where('amount', 'LIKE', '%' . $search . '%')
      ->orWhere('user_id_from', 'LIKE', '%' . $search . '%')
      ->orWhere('user_id_to', 'LIKE', '%' . $search . '%');
    });

  }

    $notes = $notes->paginate($limit)->appends(['limit' => $limit ]);

  $this->data['search'] =$search;
  $this->data['level_income'] =$notes;
  $this->data['page'] = 'user.fund.transfer-reports';
  return $this->dashboard_layout();

}




}
