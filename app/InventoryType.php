<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InventoryType extends Model
{
    protected $table = 'InventoryType';

    public $fillable = ['type'];


    //Fetch all records
    public static function getAll() 
    {
        return self::all();
    }
}
