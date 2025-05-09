<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\adminController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\IsSuperMiddleware;
use Illuminate\Support\Facades\Route;

Route::middleware(IsSuperMiddleware::class)->group(function(){

    Route::get("/admin/dashboard",[DashboardController::class,"index"]);
    Route::get("/admin/admin-gest",[adminController::class,"index"]);
    Route::post("/admin/logout",[AdminAuthController::class,"logout"]);
 //manage admins
    Route::get("/admin/create-admin",[adminController::class,"create"]);
    Route::post("/admin/create-admin",[adminController::class,"store"]);
});

Route::get("/auth/admin",[AdminAuthController::class,"admin_login"]);
Route::post("/auth/admin/login",[AdminAuthController::class,"login"]);