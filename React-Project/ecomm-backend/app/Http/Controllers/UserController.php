<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
// function register(Request $req)
// {
//     $user = new User;
//     $user-> username=$req->input('username');
//     $user-> password= Hash::make( $req->input('password'));
//     $user-> save();
//     return $user;
// }

// function login (Request $req){
//     $user = User::where('username',$req->username)->first();
//     if(!$user || !Hash::check($req->password,$user->password))
//     {
//         return ["error"=>"name or password is not matched!"];
//     }
//     return $user;
// }

public function register(Request $request)
{
    $username = $request->input('username');
    $password = $request->input('password');

    // validate username and password
    $validatedData = $request->validate([
        'username' => 'required|unique:users|min:5',
        'password' => 'required|min:8',
    ]);

    // save username and password to database
    $user = new User();
    $user->username = $username;
    $user->password = bcrypt($password);
    $user->save();

    return response()->json(['success' => true]);
}

public function login(Request $request)
{
    $credentials = $request->only(['username', 'password']);

    if (!Auth::attempt($credentials)) {
        return response()->json(['error' => 'Tên người dùng hoặc mật khẩu không chính xác']);
    }else{
        return response()->json(['error' => 'Dang nhap thanh cong']);
    }

    $user = User::where('username', $request->username)->first();
    $token = $user->createToken('access_token')->accessToken;

    return response()->json(['token' => $token, 'user' => $user]);
}
}