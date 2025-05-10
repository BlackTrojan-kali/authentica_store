<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function index(){
        $categories = Category::all();
        return inertia("Dashboard/catGest",["categories"=>$categories]);
    }
    public function create(){
        return inertia("Dashboard/createCat");
    }
    public function store(Request $request){
        $request->validate([
            "name" =>"required | string |min:2 | unique:categories,name",
        ]);
        Category::create([
            "name"=>$request->name
        ]);
        return back()->with("success","category created successfully");
    }
    public function edit(Category $cat){
        return inertia("Dashboard/editCat",["cat"=>$cat]);
    }
    public function update(Request $request,Category $cat){
        $request->validate([
            "name"=>"required | string| min:2 | unique:categories,name",
        ]);
        $cat->name = $request->name;
        $cat->save();
        return redirect("/admin/cat-gest")->with("success","category updated successfully");
    }
    public function delete(Category $cat){
        $cat->delete();
        return back()->with("message","category deleted successfully");
    }
}
