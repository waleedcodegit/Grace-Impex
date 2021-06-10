<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Distributor;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\DistributorPassword;
use App\Product_Variations;
use DB;
use App\DistributorProductVariations;
use Validator;

class DistributoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create_distributor(Request $request){
        $validator = Validator::make($request->all(), [
            'fname' => 'required|min:3',
            'email' => 'email|unique:distributors,email|max:255',
            'company_name' => 'required',
            'phone' => 'required|min:11',
            'lname' => 'required',
            'credit_limit' => 'required',
            'address' => 'required',
            'country' => 'required',
            'city' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }
        $new_distributors = new Distributor();
        $new_distributors->fname = $request->fname;
        $new_distributors->lname = $request->lname;
        $new_distributors->company = $request->company_name;
        $new_distributors->phone = $request->phone;
        $new_distributors->email = $request->email;
        $new_distributors->password = Str::random(10);
        $new_distributors->credit_limit = $request->credit_limit;
        $new_distributors->address = $request->address;
        $new_distributors->country = $request->country;
        $new_distributors->city = $request->city;
        $new_distributors->gst = $request->gst;
        $new_distributors->status = 1;
        $new_distributors->save();
            $variations = Product_Variations::all();
            foreach($variations as $v){
                $dis_var = new DistributorProductVariations();
                $dis_var->variation_id	= $v->id;
                $dis_var->distributor_id = $new_distributors->id;
                $dis_var->discount = 0;
                $dis_var->save();
            }
            return $variations;
            // $body = $request->fname.', We Welcome you to be a part of Us.'.
            // 'Your Password for Distributor Account is '.$new_distributors->password ;
            // $title = 'Distributors Account Credentials';
            Mail::to($request->email)->send(new DistributorPassword($title,$body));
        $response = ['status' => 200 , 'msg' => 'Distributor Created successfully.'];
        return $response;
    }
    public function update_distributor(Request $request){
        $validator = Validator::make($request->all(), [
            'fname' => 'required|min:3',
            'email' => 'email|unique:distributors,email|max:255',
            'company_name' => 'required',
            'phone' => 'required|min:11',
            'lname' => 'required',
            'credit_limit' => 'required',
            'address' => 'required',
            'country' => 'required',
            'city' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }
        $new_distributors = Distributor::find($request->id);
        $new_distributors->fname = $request->fname;
        $new_distributors->lname = $request->lname;
        $new_distributors->company = $request->company_name;
        $new_distributors->phone = $request->phone;
        $new_distributors->email = $request->email;
        $new_distributors->credit_limit = $request->credit_limit;
        $new_distributors->address = $request->address;
        $new_distributors->country = $request->country;
        $new_distributors->city = $request->city;
        $new_distributors->gst = $request->gst;
        $new_distributors->save();
        $response = ['status' => 200 , 'msg' => 'Distributor Updated successfully.'];
        return $response;
    }
    public function get_distributors(Request $request){
        $distributors = Distributor::all();
        $response = ['status' => 200 , 'distributors' => $distributors];
        return $response;
    }
    public function get_distributor_product_variations(Request $request){
        $variations = DB::table('distributors_product_variations')
                        ->join('product_variations','product_variations.id' , '=' , 'distributors_product_variations.variation_id')
                        ->where('product_variations.product_id',$request->product_id)
                        ->where('distributors_product_variations.distributor_id',$request->distributor_id)
                        ->select('distributors_product_variations.discount','distributors_product_variations.id','distributors_product_variations.variation_id',
                        'product_variations.product_id','product_variations.price','product_variations.name')
                        ->get();
        return $variations;
    }
    public function update_distributor_varients(Request $request){
            $dis_var = DistributorProductVariations::find($request->id);
            $dis_var->discount = $request->discount;
            $dis_var->save();
    }
    public function distributor_discount_products(Request $request){
        $products = DB::table('products')
                        ->get();
        $dicounted_products = [];
        foreach($products as $p){
            $dis_var = DB::table('distributors_product_variations')
                    ->join('product_variations','product_variations.id' , '=' , 'distributors_product_variations.variation_id')
                    ->where('product_variations.product_id',$p->id)
                    ->where('distributors_product_variations.distributor_id',$request->distributor_id)
                    ->select('distributors_product_variations.discount','distributors_product_variations.id','distributors_product_variations.variation_id',
                    'product_variations.product_id','product_variations.price','product_variations.name')
                    ->get();
            foreach($dis_var as $dv){
                if($dv->discount > 0){
                    $p->varient = $dv;
                    $dicounted_products[] = $p;
                }
            }
          
        }
            
        return $dicounted_products;
    }
    public function get_distributor_by_id(Request $request){
        $distributor = Distributor::find($request->id);
        return $distributor;
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
    public function update(Request $request)
    {
        
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
