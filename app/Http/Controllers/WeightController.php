<?php

namespace App\Http\Controllers;

use App\Models\Weight;
use Illuminate\Http\Request;

class WeightController extends Controller
{
    //
    public function index(){
        $wieghts = Weight::all();
        return inertia("Dashboard/weightGest",["weights"=>$wieghts]);
    }
    public function create(){
        return inertia("Dashboard/createWeight");
    }
    public function store(Request $request){
        $request->validate([
            "unit"=>"string | required |unique:weights,unit",
        ]);
        Weight::create([
            "unit"=>$request->unit
        ]);
        return back()->with("success","weight value created successfully");        
    }
    public function edit(Weight $weight){
        return inertia("Dashboard/editWeight",["weight"=>$weight]);
    }
    public function update(Request $request, Weight $weight){
        $request->validate([
            "unit"=>"required | string|unique:weights,unit",
        ]);
        $weight->unit = $request->unit;
        $weight->save();
        return redirect("/admin/weight-gest")->with("success","weight updated successfully");
    }
    public function delete(Weight $weight){
        $weight->delete();
        return back()->with("message","weight deleted successfully");
    }
}
