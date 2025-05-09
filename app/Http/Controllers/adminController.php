<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class adminController extends Controller
{
    //
    public function index(){
        $admins = User::where("role","super")->orWhere("role","admin")->get();
        return inertia("Dashboard/adminGest",["admins"=>$admins]);
    }
    public function create(){
        return inertia("Dashboard/createAdmin");
    }
    public function store(Request $request){
         $request->validate([
            "name"=>"string | required",
            "role"=>"string | required",
            "gender"=>"string | required",
            "number"=>"numeric | required",
            "profile"=>"image |mimes:jpeg,png,jpg|max:2098",
            "email"=>"email| required| unique:users,email", 
            "password"=>"confirmed| required| string",
         ]);
            // Create the uploads directory if it doesn't exist
            $uploadPath = public_path('images/admins');
            if (!file_exists($uploadPath)) {
            mkdir($uploadPath, 0755, true);
            }
            if ($request->file('profile')) {
                $imageName = time() . '.' . $request->profile->extension();
                $request->profile->move($uploadPath, $imageName);
            }
            
            $user = new User();
            $user->name = $request->name;
            $user->role = $request->role;
            $user->gender = $request->gender;
            $user->number = $request->number;
            $user->profile = $imageName;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            return back()->with("success","user inserted successfully");
    }
}
