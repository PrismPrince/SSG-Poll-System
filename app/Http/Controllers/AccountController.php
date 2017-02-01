<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\User;

class AccountController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth', ['except' => ['getEmail']]);
    $this->middleware('auth:api', ['only' => ['getEmail']]);
  }

  public function showAccountSetting()
  {
    return view('account.index');
  }

  public function showChangePassword()
  {
    return view('account.password');
  }

  public function showChangeEmail()
  {
    return view('account.email');
  }

  public function getEmail()
  {
    return Auth::guard('api')->user()->email;
  }

  public function setEmail(Request $request)
  {
    $this->validate($request, ['email' => 'required|email|max:255|unique:users,email,' . Auth::id()]);

    $request->user()->fill([
      'email' => $request->email
    ])->save();

    return redirect('account')->withStatus('Your e-mail was successfully changed.');
  }
}
