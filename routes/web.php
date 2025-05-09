<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Middleware\IsSuperMiddleware;
use Illuminate\Support\Facades\Route;

Route::middleware(IsSuperMiddleware::class)->group(function(){


    Route::get('/', function () {
        return inertia('Dashboard/index');
        });
    Route::post("/admin/logout",[AdminAuthController::class,"logout"]);
});

Route::get("/auth/admin",[AdminAuthController::class,"admin_login"]);
Route::post("/auth/admin/login",[AdminAuthController::class,"login"]);