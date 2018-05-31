<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBookingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('booking', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->integer('inventory_id')->unsigned();
            $table->time('hours');
            $table->integer('number_of_chairs');
            $table->string('decoration');
            $table->double('price');
            $table->string('status');
            $table->timestamps();

            $table->foreign('user_id')->references('id')
            ->on('users')->onDelete('cascade');
            $table->foreign('inventory_id')->references('id')
             ->on('InventoryItem')->onDelete('cascade');



           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking');
    }
}
