<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::view('/{path?}', 'welcome');
Route::get('{reactRoutes}', function () {
    return view('welcome');
});

// Route::view('/Products/{id}', 'welcome');
Route::view('/Product/{id}', 'welcome');
Route::view('/products/{slug}', 'welcome');


Route::view('/adminpanel', 'welcome');
Route::view('/adminpanel/Dashboard', 'welcome');
Route::view('/adminpanel/AddProducts', 'welcome');
Route::view('/adminpanel/ManageCategory', 'welcome');
Route::view('/adminpanel/ManageSubCategory', 'welcome');
Route::view('/adminpanel/ProductLists', 'welcome');
Route::view('/adminpanel/EditProduct/{id}', 'welcome');
Route::view('/adminpanel/Cutomers', 'welcome');
Route::view('/adminpanel/Orders', 'welcome');
Route::view('/adminpanel/ProductValues/{id}', 'welcome');
Route::view('/adminpanel/ProductImages/{id}', 'welcome');
Route::view('/adminpanel/ManageRoles', 'welcome');
Route::view('/adminpanel/ManageAdminAccounts', 'welcome');
Route::view('/adminpanel/AddAdminAccount', 'welcome');
Route::view('/adminpanel/EditAdminAccount/{id}', 'welcome');
Route::view('/adminpanel/ADDNewDistributor', 'welcome');
Route::view('/adminpanel/DistributorLists', 'welcome');
Route::view('/adminpanel/DistributorView/{id}', 'welcome');
Route::view('/adminpanel/AddDiscountonproducts/{id}', 'welcome');

