<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    //
    public $timestamps = false;
    protected $table = 'cart';
    protected $primaryKey = 'CartID';
    protected $fillable = ['UserID', 'ProductID', 'Quantity'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}