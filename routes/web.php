<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\SizeController;
use App\Http\Controllers\WeightController;
use App\Http\Middleware\IsAdminMiddleware;
use App\Http\Middleware\IsSuperMiddleware;
use App\Models\Category;
use Illuminate\Support\Facades\Route;

Route::middleware(IsAdminMiddleware::class)->group(function(){

    Route::get("/admin/dashboard",[DashboardController::class,"index"]);
    Route::post("/admin/logout",[AdminAuthController::class,"logout"]);
    //manage products
    //manage categories
    Route::get('/admin/cat-gest',[CategoryController::class,"index"]);
    Route::get('/admin/create-cat',[CategoryController::class,"create"]);
    Route::post('/admin/create-cat',[CategoryController::class,"store"]);
    Route::get('/admin/edit-cat/{cat}',[CategoryController::class,"edit"]);
    Route::put('/admin/edit-cat/{cat}',[CategoryController::class,"update"]);
    Route::delete('/admin/delete-cat/{cat}',[CategoryController::class,"delete"]);
    //manage weights
    Route::get('/admin/weight-gest',[WeightController::class,"index"]);
    Route::get('/admin/create-weight',[WeightController::class,"create"]);
    Route::post('/admin/create-weight',[WeightController::class,"store"]);
    Route::get('/admin/edit-weight/{weight}',[WeightController::class,"edit"]);
    Route::put('/admin/edit-weight/{weight}',[WeightController::class,"update"]);
    Route::delete('/admin/delete-weight/{weight}',[WeightController::class,"delete"]);
    //manage sizes
    Route::get('/admin/size-gest',[SizeController::class,"index"]);
    Route::get('/admin/create-size',[SizeController::class,"create"]);
    Route::post('/admin/create-size',[SizeController::class,"store"]);
    Route::get('/admin/edit-size/{size}',[SizeController::class,"edit"]);
    Route::put('/admin/edit-size/{size}',[SizeController::class,"update"]);
    Route::delete('/admin/delete-size/{size}',[SizeController::class,"delete"]);
    //manage Colors
    Route::get('/admin/color-gest',[ColorController::class,"index"]);
    Route::get('/admin/create-color',[ColorController::class,"create"]);
    Route::post('/admin/create-color',[ColorController::class,"store"]);
    Route::get('/admin/edit-color/{color}',[ColorController::class,"edit"]);
    Route::put('/admin/edit-color/{color}',[ColorController::class,"update"]);
    Route::delete('/admin/delete-color/{color}',[ColorController::class,"delete"]);
 //manage admins
 Route::middleware(IsSuperMiddleware::class)->group(function(){
    Route::get("/admin/admin-gest",[adminController::class,"index"]);
    Route::get("/admin/create-admin",[adminController::class,"create"]);
    Route::post("/admin/create-admin",[adminController::class,"store"]);
    Route::get("/admin/edit-admin/{user}",[adminController::class,"edit"]);
    Route::post("/admin/edit-admin/{user}",[adminController::class,"update"]);
    Route::delete("/admin/delete-admin/{user}",[adminController::class,"delete"]);
 });
});

Route::get("/auth/admin",[AdminAuthController::class,"admin_login"]);
Route::post("/auth/admin/login",[AdminAuthController::class,"login"]);