<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInventoryItemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('InventoryItem', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('inventory_type_id')->unsigned();
            $table->string('name');
            $table->integer('size');
            $table->string('status');
            $table->timestamps();

            $table->foreign('inventory_type_id')->references('id')
            ->on('InventoryType')->onDelete('cascade');
        
        });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('InventoryItem');
    }
}
