<?php

namespace Database\Seeders;

use App\Models\Categoria;
use App\Models\User;
use Database\Seeders\CategoriaSeeder;
use Database\Seeders\ProductoSeeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(CategoriaSeeder::class);
        $this->call(ProductoSeeder::class);
      
    }
}
