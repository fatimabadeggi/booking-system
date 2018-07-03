<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $table = 'booking';

    public $fillable = [
        'user_id', 'inventory_id', 'hours', 'decoration', 'price', 'status'
    ];

    public function inventoryItem() 
    {
        return $this->belongsTo(InventoryItem::class, 'inventory_id');
    }
}
