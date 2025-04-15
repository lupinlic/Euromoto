<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    //
    use HasFactory;
    protected $table = 'address';
    protected $primaryKey = 'AddressID';
    public $timestamps = false;

    protected $fillable = ['CustomerID', 'FullName','PhoneNumber','Email','Provinces','Districts','Wards','SpecificAddress','isDefault'];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'CustomerID', 'CustomerID');
    }
}