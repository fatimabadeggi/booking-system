<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InventoryType extends Model
{
    protected $table = 'InventoryType';

    public $fillable = ['type'];
}
