<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', 
    'Auth\LoginController@showLoginForm')->name('login');

Route::post('/login', 'Auth\LoginController@login');

Route::get('/registration', function() {
    return view('registration-form');
});

Route::get('/logout', 'Auth\LoginController@logout');

Route::post('/registration', 
'RegistrationFormController@processForm');

// Route::post('/login', '');

Route::get('/dashboard', 'DashboardController@showPage')->middleware('auth');
Route::get('/viewcustomers', 'ViewCustomerController@showCustomers')->middleware('auth');

//Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
