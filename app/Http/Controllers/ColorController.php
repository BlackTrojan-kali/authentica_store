<?php

namespace App\Http\Controllers;

use App\Models\Color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    //

    public function index(){
        $colors = Color::all();
        return inertia("Dashboard/colorGest",["colors"=>$colors]);
    }
    public function create(){
        return inertia("Dashboard/createColor");
    }
    public function store(Request $request){
        $request->validate([
            "name"=>"string | required |unique:colors,name",
        ]);
        Color::create([
            "name"=>$request->name
        ]);
        return back()->with("success","color value created successfully");        
    }
    public function edit(Color $color){
        return inertia("Dashboard/editColor",["color"=>$color]);
    }
    public function update(Request $request, Color $color){
        $request->validate([
            "name"=>"required | string|unique:colors,name",
        ]);
        $color->name = $request->name;
        $color->save();
        return redirect("/admin/color-gest")->with("success","color updated successfully");
    }
    public function delete(Color $color){
        $color->delete();
        return back()->with("message","color deleted successfully");
    }
}
