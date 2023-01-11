<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('name');
            $table->string('address');
            $table->string('city');
            $table->decimal('latitude', 8, 6);
            $table->decimal('longitude', 10, 7);
            $table->text('description');
            $table->text('images');
            $table->bigInteger('price');
            $table->foreignId('tourist_village_id')->constrained('tourist_villages');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
