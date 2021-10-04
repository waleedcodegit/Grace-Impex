<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\ProductImages;

class Product extends Model
{
    protected $table = 'products';

    public function image() {
        return $this->hasOne(Product_Images::class);
    }
}
