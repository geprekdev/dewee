<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'name',
        'address',
        'city',
        'latitude',
        'longitude',
        'description',
        'images',
        'price',
        'tourist_village_id',
    ];
}
