<?php

namespace App\Http\Controllers;

use App\Models\User;
use Faker\Guesser\Name;
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
                $imageName = time() . '.' . $request->profile->getClientOrigninalName();
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
    public function edit(User $user){
   
        return inertia("Dashboard/editAdmin",["user"=>$user]);
    }
    public function update(Request $request,User $user){
        $request->validate([
                "name"=>"required | string",
                "role"=>"required | string",
                "gender"=>"required | string",
                "number"=>"required |numeric",
                "profile" =>"image| mimes:jpeg,jpg,png|max:2098"
            ]);
            $filename = $user->profile;
            if($request->file("profile")){
                $filename =time().".".$request->profile->getClientOrigninalName();
                $request->profile->move(public_path("images/admins"),$filename);
            }
            $user->name = $request->name;
            $user->role = $request->role;
            $user->gender = $request->gender;
            $user->number = $request->number;
            $user->profile = $filename;
            $user->save();
            return redirect("/admin/admin-gest")->with("success","user updated successfully");

    }
    public function delete(User $user){
        if($user->role == "super"){
            return back()->with("error","super users cant be deleted");
        }
        $user->delete();
        return back()->with("message","user deleted successfully");
    }
}
