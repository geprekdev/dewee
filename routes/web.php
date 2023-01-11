<?php

use App\Http\Controllers\EkrafController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TouristVillageController;
use App\Http\Controllers\UmkmController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    Route::get('/tourist-villages', TouristVillageController::class)->name('tourist-villages');

    Route::get('/products/umkm', UmkmController::class)->name('products.umkm');

    Route::get('/products/ekraf', EkrafController::class)->name('products.ekraf');
})->prefix("admin");



require __DIR__ . '/auth.php';
