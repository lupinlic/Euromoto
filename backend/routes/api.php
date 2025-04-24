<?php

use App\Http\Controllers\AddressController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryParentController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\FavoriteProductController;
use App\Http\Controllers\feedbackController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductColorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductVersionController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user/getuserID', [AuthController::class, 'userID']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/change-password', [UserController::class, 'changePassword']);
// user
    Route::get('user/{id}', [UserController::class, 'show']);
    Route::put('user/{id}', [UserController::class, 'update']);
    // địa chỉ
    Route::apiResource('address',AddressController::class)->only('destroy','update','store','index','show');
    Route::get('/address/user/{user_id}', [AddressController::class, 'getAddressesByUser']);
    Route::get('/user/{userId}/defaultaddress', [AddressController::class, 'getDefaultAddress']);
    Route::post('/user/{userId}/setdefaultaddress/{addressId}', [AddressController::class, 'setDefaultAddress']);
    // khách hàng
    Route::get('customer/{UserID}/customer', [CustomerController::class, 'getByUser']);
    // sản phẩm yêu thích
    Route::get('favorite/byuser/{id}', [FavoriteProductController::class, 'getFavoritesByUser']); 
    Route::get('/favorites/check', [FavoriteProductController::class, 'checkFavorite']);
    Route::post('/favorites', [FavoriteProductController::class, 'toggleFavorite']);
    // giỏ hàng
    Route::post('cart/add', [CartController::class, 'addToCart']);
    Route::get('cart/{user_id}', [CartController::class, 'getCart']);
    Route::put('cart/update', [CartController::class, 'updateCart']);
    Route::delete('cart/remove/{id}', [CartController::class, 'removeFromCart']);
    Route::put('cart/updatequantity', [CartController::class, 'updateQuantity']);
    // đơn hàng
    Route::post('/order/place', [OrderController::class, 'store']);
    Route::get('order', [OrderController::class, 'index']);
    Route::get('customer/getorder/{id}', [CustomerController::class, 'getOrderOfCustomer']);
    // feedback
    Route::apiResource('feedback',feedbackController::class)->only('destroy','store','index');
    // tin tức
    Route::apiResource('news',NewsController::class)->only('index','show');
// admin
    Route::middleware('check.admin')->group(function () {
        // người dùng
        Route::get('user', [UserController::class, 'index']);
        Route::delete('user/{id}', [UserController::class, 'destroy']);
        // sản phẩm
        Route::post('products', [ProductController::class, 'store']);
        Route::put('products/{id}', [ProductController::class, 'update']); // Sửa
        Route::delete('products/{id}', [ProductController::class, 'destroy']); // Xoá
        // danh mục cha
        Route::apiResource('category_parent',CategoryParentController::class)->only('destroy','update','store','show');
        // danh mục con
        Route::apiResource('category',CategoryController::class)->only('destroy','update','store','show');
        // phiên bản
        Route::apiResource('productversion',ProductVersionController::class)->only('destroy','update','store','show');
        //    màu sắc
        Route::apiResource('productcolor',ProductColorController::class)->only('destroy','update','store','show');
        // tin tức
        Route::apiResource('news',NewsController::class)->only('destroy','update','store');
    });
});
// công khai
    Route::get('category_parent', [CategoryParentController::class, 'index']); 
    Route::get('category', [CategoryParentController::class, 'index']); 
    Route::get('category/{CategoryParentID}/category', [CategoryController::class, 'getByCategoryParent']);
    Route::get('products', [ProductController::class, 'index']); 
    Route::get('products/{id}', [ProductController::class, 'show']); 
    Route::get('/products/bycategoryparent/{id}', [ProductController::class, 'getByCategoryParent']);
    Route::get('/products/bycategory/{id}', [ProductController::class, 'getByCategory']);
    Route::get('productversion/byproduct/{id}', [ProductVersionController::class, 'getByProduct']); 
    Route::get('productcolor/byproduct/{id}', [ProductColorController::class, 'getByProduct']); 
    Route::get('productversion', [ProductVersionController::class, 'index']); 
    Route::get('productcolor', [ProductColorController::class, 'index']); 
   
    