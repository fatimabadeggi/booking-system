<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InventoryItem extends Model
{
    protected $table = 'InventoryItem';

    public $fillable = ['name', 'size', 'inventory_type_id', 'status'];


    //relationship mapping
    //InventoryItem -> InventoryType (OneToOne) 
    public function inventorytype()
    {
        return $this->belongsTo('App\InventoryType', 'inventory_type_id');
    }
}
