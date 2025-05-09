<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    //
    public function  admin_login(){
        return inertia("Auth/adminLogin");
    }

    public function login(Request $request){
        $request->validate([
            "email"=>"required| email",
            "password"=>"required",
        ]);
        $credentials = ["email"=>$request->email,"password"=>$request->password];
        if(!Auth::attempt($credentials)){
            return  redirect("/auth/admin/")->with("message","invalid Credentials");
        };
        return redirect("/")->with("success","you logged successfully");
    }
    public function logout(){
        Auth::logout();
    }
}
