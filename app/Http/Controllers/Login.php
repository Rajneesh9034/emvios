<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Redirect;
use App\Models\PasswordReset;
use App\Models\User;
use App\Models\UserLogin;

use DB;
class Login extends Controller
{


   public function login(Request $request)
{
    // ✅ Step 1: Validate input
    $validation = Validator::make($request->all(), [
        'username' => 'required|string',
        'password' => 'required|string',
    ]);

    if ($validation->fails()) {
        return back()->withErrors($validation)->withInput();
    }

    // ✅ Step 2: Attempt login
    $credentials = $request->only('username', 'password');

    if (Auth::attempt($credentials)) {
        $user = Auth::user();

        // ✅ Step 3: Check if user is blocked
        if ($user->active_status == "Block") {
            Auth::logout();
            return back()->withErrors(['login_error' => 'You are Blocked by admin'])->withInput();
        }

        // ✅ Step 4: Redirect on success
        return redirect()->route('user.dashboard');
    }

    // ✅ Step 5: Invalid credentials
    return back()->withErrors(['login_error' => 'Invalid Username & Password!'])->withInput();
}


    public function forgot_password()
    {

    return view('auth.passwords.forgot-password');

    }



    public function logout()
    {
        Auth::logout();

        request()->session()->invalidate();

        $notify[] = ['success', 'You have been logged out.'];
        return redirect()->route('login')->withNotify($notify);
    }




    public function forgot_password_submit(Request $request)
    {
         $validation =  Validator::make($request->all(), [
                'username' => 'required|unique:users',
                'email' => 'required',

            ]);


         if (isset($request->captcha)) {
                if (!captchaVerify($request->captcha, $request->captcha_secret)) {
                    $notify[] = ['error', "Invalid Captcha"];
                    return back()->withNotify($notify)->withInput();
                }
            }
            
        $credentials = User::where('username',$request->username)->where('email',$request->email)->first();

        if ($credentials)
        {

           $userIpInfo = getIpInfo();
           $userBrowserInfo =osBrowser();
           $code = verificationCode(6);

            PasswordReset::where('email', $credentials->email)->delete();

            $password = new PasswordReset();
            $password->email = $credentials->email;
            $password->token = $code;
            $password->created_at = \Carbon\Carbon::now();
            $password->save();

               sendEmail($credentials->email, 'Recovery Password', [
                'name' => $credentials->name,
                 'browser' => @$userBrowserInfo['browser'],
                 'ip' => @$userIpInfo['ip'],
                 'time' => @$userIpInfo['time'],
                'operating_system' => @$userBrowserInfo['os_platform'],
                'code' => $code,
                'viewpage' => 'forgot_sucess',

             ]);

              $page_title = 'Account Recovery';
             $userID = $credentials->id;
            session()->put('pass_res_mail',$userID);
            $notify[] = ['success', 'Password reset email sent successfully'];
            return redirect()->route('codeVerify')->withNotify($notify);
        }
        else{
            $notify[] = ['error', 'Invalid Username '];
            return redirect()->route('forgot-password')->withNotify($notify);
        }



    }

    public function codeVerify(){
        $page_title = 'Account Recovery';
        $userID = session()->get('pass_res_mail');

        $user_name = session()->get('username');

        if (!$userID) {
            $notify[] = ['error','Opps! session expired'];
            return redirect()->route('forgot-password')->withNotify($notify);
        }

        return view('auth.passwords.confirm',compact('page_title','userID','user_name'));
    }


    public function verifyCode(Request $request)
    {
        $request->validate(['code' => 'required', 'userID' => 'required']);
        $code = $request->code;
        $userDetail=User::where('id',$request->userID)->first();

        if (PasswordReset::where('token', $code)->where('email', $userDetail->email)->count() != 1) {
            $notify[] = ['error', 'Invalid token'];
            return redirect()->route('forgot-password')->withNotify($notify);
        }
        $notify[] = ['success', 'You can change your password.'];
        session()->flash('fpass_email', $request->userID);
        session()->put('resetMail',$request->userID);
        return redirect()->route('resetPassword', $code)->withNotify($notify);
    }


    public function resetPassword()
    {
        $page_title = "Forgot Password";
    //   dd("hi");
        return view('auth.passwords.resetPassword', compact('page_title'));
    }



    public function submitResetPassword(Request $request)
    {

    $request->validate(['password' => 'required|confirmed|min:5']);

       $userID = session()->get('resetMail');

    //    dd($userID);
    //    die;

       $user_name = session()->get('username');

       $user = User::where('id',$userID)->orderBy('id', 'DESC')->first();


       if (!$user) {
        $notify[] = ['error','Opps! session expired'];
        return redirect()->route('forgot-password')->withNotify($notify);
       }
       $password = password_hash($request->password, PASSWORD_DEFAULT);

       $user->password=$password;
       $user->PSR=$request->password;
       $user->save();
       $notify[] = ['success', 'Your Password change Successfully.'];
       return redirect()->route('login')->withNotify($notify);

    }



}
