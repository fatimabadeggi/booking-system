<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = 'booking';

    public $fillable = [
        'user_id', 'inventory_id', 'hours', 'decoration', 'price', 'status'
    ];
}
