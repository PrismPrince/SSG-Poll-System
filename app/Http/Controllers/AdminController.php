<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use DB;

class AdminController extends Controller
{
  public function __construct()
  {
    $this->middleware('auth', ['only' => ['showUsers', 'getCode']]);
    $this->middleware('auth:api', ['only' => ['getUsers', 'setUserStatus']]);
    $this->middleware('admin');
  }

  public function getCode()
  {
    return view('admin.code');
  }

  public function showUsers()
  {
    return view('admin.users')->withUser_count(User::withTrashed()->get()->count());
  }

  public function getUsers(Request $request)
  {
    $users = User::where(DB::raw(1), 1);

    if ($request->student_id) {
      $users->where('id', 'LIKE', '%' . $request->student_id . '%');
    }
    if ($request->name) {
      $users->searchName($request->name);
    }
    if ($request->email) {
      $users->where('email', 'LIKE', '%' . $request->email . '%');
    }
    if ($request->role) {
      $users->where('role', $request->role);
    }
    if ($request->status) {
      if ($request->status == 'deactive') {
        $users->onlyTrashed();
      }
    } else $users->withTrashed();

    $u = [];

    foreach ($users->get() as $user) {
      $u[] = [
        'id' => $user->id,
        'fname' => $user->fname,
        'lname' => $user->lname,
        'email' => $user->email,
        'role' => $user->role,
        'created_at' => $user->created_at,
        'deleted_at' => $user->deleted_at,
      ];
    }

    // foreach (User::withTrashed()->offset($request->skip)->limit($request->take)->orderBy('created_at', 'desc')->get() as $user) {
    //   $u[] = [
    //     'id' => $user->id,
    //     'fname' => $user->fname,
    //     'lname' => $user->lname,
    //     'email' => $user->email,
    //     'role' => $user->role,
    //     'created_at' => $user->created_at,
    //     'deleted_at' => $user->deleted_at,
    //   ];
    // }

    return response()->json($u);
  }

  public function setUserStatus(Request $request)
  {
    if ($request->status == 'activate') {
      $user = User::withTrashed()->find($request->id);
      $user->posts()->restore();
      $user->polls()->restore();
      $user->suggestions()->restore();
      $user->restore();
    }
    if ($request->status == 'deactivate') {
      $user = User::withTrashed()->find($request->id);
      $user->posts()->delete();
      $user->polls()->delete();
      $user->suggestions()->delete();
      $user->delete();
    }
    return response()->json([
      'id' => $user->id,
      'fname' => $user->fname,
      'lname' => $user->lname,
      'email' => $user->email,
      'role' => $user->role,
      'created_at' => $user->created_at,
      'deleted_at' => $user->deleted_at,
    ]);
  }
}
