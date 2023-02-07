<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Category;
use App\Subcategory;
use App\Product_Images;
use App\Product_Variations;
use App\Product;
use App\ProductValues;
use App\Customer;
use App\Order;
use App\Http\Controllers\Controller;
use Intervention\Image\ImageManagerStatic as Image;
use DB;
class productscontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function add_product(Request $request){
        $p_code = DB::table('products')
                        ->where('code',$request->p_code)
                        ->get();
        if(sizeof($p_code) == 0){
            $new_product = new Product();
            $new_product->name = $request->p_name;
            $new_product->code = $request->p_code;
            $new_product->description = $request->p_description;
            $new_product->varient_type = $request->p_varient_type;
            $new_product->qty_type = $request->p_qnty_type;
            $new_product->cat_id = $request->p_cat_id;
            $new_product->sub_cat_id = $request->p_subcat_id;
            $new_product->enabled = $request->p_enabled;
            $new_product->retail = $request->p_retail;
            $new_product->distribution = $request->p_distribution;
            $new_product->featuerd = $request->p_featuerd;
            $new_product->save();

            foreach ($request['files'] as $file) {
                

                $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
                \Image::make($file[0])->save(public_path('images/') . $name);
                
                $p_image = new Product_Images();
                $p_image->product_id = $new_product->id;
                $p_image->image = $name;
                $p_image->save();
            }
                foreach($request->varients as $v){
                    $p_variations = new Product_Variations();
                    $p_variations->product_id = $new_product->id;
                    $p_variations->name = $v['varient'];
                    $p_variations->price = $v['price'];
                    $p_variations->save();
                }
                return 1;
        }else{
            return 0;
        }
        
    }
    public function get_all_products(Request $request){
        $products = DB::table('products')
                        ->paginate(10);
        foreach($products as $p){
            $images = DB::table('product_images')->where('product_id',$p->id)->get();
            $p->images = $images;
        }
        return $products;
    }
    public function deleteproduct(Request $request){
        $product =  Product::find($request->id);
        $product->delete();
    }
    public function get_product_by_id(Request $request){
        $product =  Product::find($request->id);
        $product->images = DB::table('product_images')->where('product_id',$product->id)->get();
        $product->varients = DB::table('product_variations')->where('product_id',$product->id)->get();
        return $product;
    }
    public function get_featuerd_products(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->where('featuerd' , '1')
        ->get();
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_products_by_cat(Request $request){
        $category = Category::where('slug',$request->slug)->first();
        $products = [];
        if($category){
            $products = Product::where('cat_id' ,$category->id)->where('enabled',1)->with('image')->get();
        }
        $response = ['status' => 200 , 'products' => $products , 'category' => $category];
        return $response;
    }
    public function get_products_by_cat_(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('slug',$request->id)
        ->get();
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function add_product_values(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
        }
        $newValue = new ProductValues();
        $newValue->image = $name;
        $newValue->product_id = $request->id;
        $newValue->name = $request->name;
        $newValue->description = $request->description;
        $newValue->save();
    }
    public function get_product_values(Request $request){
        $product_values = DB::table('productvalues')
                            ->where('product_id',$request->id)
                            ->get();
        return $product_values;
    }
    public function update_product_values(Request $request){
        $pr = ProductValues::find($request->id);
        $pr->name = $request->name;
        $pr->description = $request->description;
        $pr->save();
    }
    public function delete_product_values(Request $request){
        $pr = ProductValues::find($request->id);
        $pr->delete();
    }
    public function add_product_img(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $p_image = new Product_Images();
            $p_image->product_id = $request->id;
            $p_image->image = $name;
            $p_image->save();
        }
    }
    public function delete_produc_img(Request $request){
        $p_img = Product_Images::find($request->id);
        $p_img->delete();
    }
    public function get_product_images(Request $request){
        $product_images = DB::table('product_images')
                            ->where('product_id',$request->id)
                            ->get();
        return $product_images;
    }
    public function get_category_by_sub_cat_id(Request $request){
        $sub_cat = DB::table('subcategories')
                    ->join('categories','categories.id' , '=' , 'subcategories.cat_id')
                    ->where('subcategories.id',$request->id)
                    ->select('categories.name')
                    ->get();
        return $sub_cat;
    }
    public function get_all_enabled_products(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->paginate(12);
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_product_enabled_by_id(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->where('id',$request->id)
        ->get();
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_cats_with_subs(Request $request){
        $categories = DB::table('categories')->get();
        foreach($categories as $c){
            $c->subcategories = DB::table('subcategories')
                                        ->where('cat_id',$c->id)
                                        ->get();
                    
        }
        return $categories;
    }
    public function update_varients(Request $request){
        if($request->id == 0){
            // return $request;
            $p_variations = new Product_Variations();
            $p_variations->product_id = $request->pid;
            $p_variations->name = $request->name;
            $p_variations->price = $request->price;
            $p_variations->save();
        }else{
            $p_variations = Product_Variations::find($request->id);
            $p_variations->name = $request->name;
            $p_variations->price = $request->price;
            $p_variations->save();
        }
    }
    public function deletep_variations(Request $request){
        $p_variations = Product_Variations::find($request->id);
        $p_variations->delete();
    }
    public function update_product(Request $request){
        $new_product = Product::find($request->id);
        $new_product->name = $request->p_name;
        $new_product->code = $request->p_code;
        $new_product->description = $request->p_description;
        $new_product->varient_type = $request->p_varient_type;
        $new_product->qty_type = $request->p_qnty_type;
        $new_product->cat_id = $request->p_cat_id;
        $new_product->sub_cat_id = $request->p_subcat_id;
        $new_product->enabled = $request->p_enabled;
        $new_product->retail = $request->p_retail;
        $new_product->distribution = $request->p_distribution;
        $new_product->featuerd = $request->p_featuerd;
        $new_product->save();
    }
    public function addcategory(Request $request){
        $new_cat = new Category();
        $new_cat->name = $request->name;
        $new_cat->slug = str_slug($request->name);
        $new_cat->save();
    }

    public function update_category(Request $request){
        $up_cat = Category::find($request->id);
        $up_cat->name = $request->name;
        $up_cat->slug = str_slug($request->name);
        $up_cat->save();
    }

    public function get_allcategories(){
        $cats = Category::all();
        return $cats;
    }
    public function delete_category(Request $request){
        $up_cat = Category::find($request->id);
        $up_cat->delete();
    }
    public function addSubcategory(Request $request){
        $new_cat = new Subcategory();
        $new_cat->cat_id = $request->cat_id; 
        $new_cat->name = $request->name;
        $new_cat->save();
    }

    public function update_Subcategory(Request $request){
        $up_cat = Subcategory::find($request->id);
        $up_cat->cat_id = $request->cat_id; 
        $up_cat->name = $request->name;
        $up_cat->save();
    }
    public function get_admin_dash_data(){
        $users = Customer::all();
        $products = Product::all();
        $orders = Order::all();

        $response = ['users' => sizeof($users) , 'products' => sizeof($products) , 'orders' => sizeof($orders)];
        return $response;
    }

    public function get_Subcategory(Request $request){
        $categories = $this->get_allcategories();
        $subs = [];
        foreach($categories as $c){
            $cat_subs = Subcategory::where('cat_id',$c->id)->get();
           foreach($cat_subs as $cs){
                $subs[] = $cs;
           }
           
        }
        return $subs;
    }
    public function get_categories_with_sub_cats(Request $request){
        $cats = DB::table('categories')
                    ->join('subcategories','subcategories.cat_id','=','categories.id')
                    ->get();
        return $cats;
    }
    public function delete_Subcategory(Request $request){
        $up_cat = Subcategory::find($request->id);
        $up_cat->delete();
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
