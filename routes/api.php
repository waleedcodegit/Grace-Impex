<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Admin Routes 


//products Controller Routes
Route::post('/get_admin_dash_data', 'Admin\productscontroller@get_admin_dash_data');

Route::post('/addcategory', 'Admin\productscontroller@addcategory');
Route::post('/update_category', 'Admin\productscontroller@update_category');
Route::post('/get_allcategories', 'Admin\productscontroller@get_allcategories');
Route::post('/delete_category', 'Admin\productscontroller@delete_category');

Route::post('/addSubcategory', 'Admin\productscontroller@addSubcategory');
Route::post('/update_Subcategory', 'Admin\productscontroller@update_Subcategory');
Route::post('/get_Subcategory', 'Admin\productscontroller@get_Subcategory');
Route::post('/delete_Subcategory', 'Admin\productscontroller@delete_Subcategory');
Route::post('/get_categories_with_sub_cats', 'Admin\productscontroller@get_categories_with_sub_cats');

Route::post('/add_product', 'Admin\productscontroller@add_product');
Route::post('/get_all_products', 'Admin\productscontroller@get_all_products');
Route::post('/get_product_by_id', 'Admin\productscontroller@get_product_by_id');
Route::post('/update_product', 'Admin\productscontroller@update_product');
Route::post('/deleteproduct', 'Admin\productscontroller@deleteproduct');
Route::post('/get_cats_with_subs', 'Admin\productscontroller@get_cats_with_subs');
Route::post('/get_featuerd_products', 'Admin\productscontroller@get_featuerd_products');
Route::post('/get_products_by_sub_cat', 'Admin\productscontroller@get_products_by_sub_cat');
Route::post('/get_all_enabled_products', 'Admin\productscontroller@get_all_enabled_products');
Route::post('/get_product_enabled_by_id', 'Admin\productscontroller@get_product_enabled_by_id');
Route::post('/get_category_by_sub_cat_id', 'Admin\productscontroller@get_category_by_sub_cat_id');
Route::post('/add_product_values', 'Admin\productscontroller@add_product_values');
Route::post('/get_product_values', 'Admin\productscontroller@get_product_values');
Route::post('/update_product_values', 'Admin\productscontroller@update_product_values');
Route::post('/delete_product_values', 'Admin\productscontroller@delete_product_values');
Route::post('/delete_produc_img', 'Admin\productscontroller@delete_produc_img');
Route::post('/add_product_img', 'Admin\productscontroller@add_product_img');
Route::post('/get_product_images', 'Admin\productscontroller@get_product_images');
Route::post('/update_varients', 'Admin\productscontroller@update_varients');
Route::post('/deletep_variations', 'Admin\productscontroller@deletep_variations');


//AdminAccounts Controller Routes

Route::post('/add_role', 'Admin\AdminAccountsController@add_role');
Route::post('/get_permissions_by_role_id', 'Admin\AdminAccountsController@get_permissions_by_role_id');
Route::post('/get_roles', 'Admin\AdminAccountsController@get_roles');
Route::post('/update_permissions', 'Admin\AdminAccountsController@update_permissions');
Route::post('/add_admin_account', 'Admin\AdminAccountsController@add_admin_account');
Route::post('/get_admin_accounts', 'Admin\AdminAccountsController@get_admin_accounts');
Route::post('/Update_admin_account', 'Admin\AdminAccountsController@Update_admin_account');
Route::post('/get_admin_account_by_id', 'Admin\AdminAccountsController@get_admin_account_by_id');
Route::post('/adminLogin', 'Admin\AdminAccountsController@adminLogin');
Route::post('/admin_check_auth', 'Admin\AdminAccountsController@admin_check_auth');

//Distributors Controller Routes
Route::post('/create_distributor', 'Admin\DistributoresController@create_distributor');
Route::post('/get_distributor_product_variations', 'Admin\DistributoresController@get_distributor_product_variations');
Route::post('/get_distributors', 'Admin\DistributoresController@get_distributors');
Route::post('/get_distributor_by_id', 'Admin\DistributoresController@get_distributor_by_id');
Route::post('/update_distributor', 'Admin\DistributoresController@update_distributor');
Route::post('/update_distributor_varients', 'Admin\DistributoresController@update_distributor_varients');
Route::post('/distributor_discount_products', 'Admin\DistributoresController@distributor_discount_products');


// Orders Controller
Route::post('/get_all_customers', 'Admin\orderscontroller@get_all_customers');
Route::post('/get_all_orders', 'Admin\orderscontroller@get_all_orders');
Route::post('/get_orders_by_customer_id', 'Admin\orderscontroller@get_orders_by_customer_id');




// customer Controller

Route::post('/Add_new_customer', 'Front\CustomerController@Add_new_customer');
Route::post('/customer_login', 'Front\CustomerController@customer_login');
Route::post('/check_customer_auth', 'Front\CustomerController@check_customer_auth');
Route::post('/add_product_in_cart', 'Front\CustomerController@add_product_in_cart');
Route::post('/get_cookie_session_cart', 'Front\CustomerController@get_cookie_session_cart');
Route::post('/create_customer_order', 'Front\CustomerController@create_customer_order');
Route::post('/remove_product_from_cart', 'Front\CustomerController@remove_product_from_cart');
Route::post('/contact_us', 'Front\CustomerController@contact_us');

//