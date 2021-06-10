<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use DB;
use App\Customer;
use App\Order_Products;
use App\Order;
use Hash;
use App\Cart;
use Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\RequestMail;
use App\Http\Controllers\Controller;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function contact_us(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'msg' => 'required|min:3',
            'email' => 'required|email|max:255',
            'phone' => 'required|min:11',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() , 
            'errors' => $validator->errors()];
            return $response;
        }else{
            $title = 'Contact Us Request';
            $name = $request->name;
            $phone = $request->phone;
            $msg = $request->msg;
            $email = $request->email;
            Mail::to('waleedah.official@gmail.com')->send(new RequestMail($title,$name , $phone , $msg , $email));
            $response = ['status' => 200 , 'msg' => 'Request Submitted Successfully.'];
            return $response;
        }
    }

    public function create_customer_order(Request $request){
        $cart = $this->get_cookie_session_cart($request);
        $neworder = new Order();
        $neworder->cus_id = $request->cus_id;
        $neworder->fname = $request->firstName;
        $neworder->lname = $request->lastName;
        $neworder->email = $request->email;
        $neworder->phone = $request->phone;
        $neworder->date = date("d-m-Y");
        $neworder->totals = $cart['cart'][0]->cart_totals;
        $neworder->address = $request->country;
        $neworder->country = $request->address1 .' '. $request->address2;
        $neworder->status = 'Pending';
        $neworder->save(); 

        foreach($cart['cart'] as $c){
            $order_product = new Order_Products();
            $order_product->order_id = $neworder->id;
            $order_product->product_id = $c->product[0]->id;
            $order_product->varient_id = $c->varient_id;
            $order_product->qty = $c->qty;
            $order_product->price = $c->price;
            $order_product->save();
        }
        $response = ['status' => 200 , 'msg' => 'Order Placed SuccessFully'];
        return $response;
       

    }
    public function add_product_in_cart(Request $request){
        $cart = new Cart();
        $cart->product_id = $request->product_id;
        $cart->cart_cookie_id = $request->cart_cookie_id;
        $cart->qty = $request->qty;
        $cart->price = $request->price;
        $cart->varient_id = $request->varient_id;
        $cart->save();

    }
    public function get_cookie_session_cart(Request $request){
        $cart = DB::table('carts')->where('cart_cookie_id',$request->cart_cookie_id)->get();
        if(sizeof($cart) > 0){
            $cart_products = [];
            $cart_totals = 0;
            foreach($cart as $key => $c){
                $cart_totals = $cart_totals + (int)$c->price;
                $product = DB::table('products')
                            ->where('id',$c->product_id)
                            ->get();
                foreach($product as $p){
                    $images = DB::table('product_images')->where('product_id',$p->id)->get();
                    $p->images = $images;
                    $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
                    $p->varients = $varients;
                    $cheep_varient = $varients[0];
                    $price = 0;
                }
                $cart[$key]->product = $product;
            }
            $cart[0]->cart_totals = $cart_totals;
            $response = ['status' => 200 , 'cart' => $cart];
            return $response;
        }else{
            $response = ['status' => 401 , 'msg' => 'Cart Is Empty'];
            return $response;
        }
    }
    public function remove_product_from_cart(Request $request){
        $cart = Cart::find($request->id);
        $cart->delete();
    }

    public function Add_new_customer(Request $request){

        $c = DB::table('customers')
                        ->where('email',$request->email)
                        ->where('username',$request->username)
                        ->get();

        if(sizeof($c) == 0){
            $cus = new Customer();
            $cus->name = $request->name;
            $cus->username = $request->username;
            $cus->email = $request->email;
            $cus->password = $request->password;
            $cus->token = Hash::make(time());
            $cus->status = 'Active';
            $cus->save();
            $response = ['status' => 200 , 'cus' => $cus];
            return $response;
        }else{
            $response = ['status' => 401 , 'msg' => 'Error- Username or email already exists'];
            return $response;
        }
        
    }

    public function customer_login(Request $request){
        $c = DB::table('customers')->where('email',$request->username)
        ->orwhere('username',$request->username)
        ->get();
        if(sizeof($c) > 0){
            if($c[0]->password == $request->password){
                $cus = Customer::find($c[0]->id);
                $cus->token = Hash::make($c[0]->id);
                $cus->save();
                $response = ['status' => 200 , 'cus' => $cus];
                return $response;
            }else{
                $response = ['status' => 401 , 'msg' => 'Wrong Password'];
                return $response;
            }
            
        }else{
            $response = ['status' => 401 , 'msg' => 'Error- Wrong Username or email'];
            return $response;
        }
    }

    public function check_customer_auth(Request $request){
        $c = DB::table('customers')->where('token',$request->token)
        ->get();
        if(sizeof($c) > 0){
           
            $response = ['status' => 200 , 'cus' => $c];
            return $response;
        }else{
            $response = ['status' => 401 , 'msg' => 'Error- Authentication failed'];
            return $response;
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
