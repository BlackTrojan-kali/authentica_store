<?php

namespace App\Http\Controllers;

use App\Models\Size;
use Illuminate\Http\Request;

class SizeController extends Controller
{
    //
    //
    public function index(){
        $sizes = Size::all();
        return inertia("Dashboard/sizeGest",["sizes"=>$sizes]);
    }
    public function create(){
        return inertia("Dashboard/createSize");
    }
    public function store(Request $request){
        $request->validate([
            "name"=>"string | required |unique:sizes,name",
        ]);
        Size::create([
            "name"=>$request->name
        ]);
        return back()->with("success","size value created successfully");        
    }
    public function edit(Size $size){
        return inertia("Dashboard/editSize",["size"=>$size]);
    }
    public function update(Request $request, Size $size){
        $request->validate([
            "name"=>"required | string|unique:sizes,name",
        ]);
        $size->name = $request->name;
        $size->save();
        return redirect("/admin/size-gest")->with("success","size updated successfully");
    }
    public function delete(Size $size){
        $size->delete();
        return back()->with("message","size deleted successfully");
    }
}
