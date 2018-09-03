<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddHallPrices extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('InventoryItem', function (Blueprint $table) {
            
            $table->double('no_dec_price');
            $table->double('dec_price');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('InventoryItem', function (Blueprint $table) {
            $table->dropColumn('no_dec_price');
            $table->dropColumn('dec_price');
        });
    }
}
