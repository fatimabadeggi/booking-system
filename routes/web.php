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



//Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Admin Routes
Route::get('/dashboard', 'DashboardController@showPage')->middleware('auth');
Route::get('/viewcustomers', 'ViewCustomerController@showCustomers')->middleware('auth');

//new inventory type  routes
Route::get('/addnewinventorytype', 'InventoryTypeController@showPage')
    ->middleware('auth');
Route::post('/addnewinventorytype', 'InventoryTypeController@processForm')->middleware('auth');
Route::get('/editinventorytype/{id}', 'InventoryTypeController@getInventoryType')->middleware('auth');
Route::post('/editinventorytype', 'InventoryTypeController@updateInventoryType')->middleware('auth');
Route::post('/deleteinventorytype', 'InventoryTypeController@deleteType')->middleware('auth');


//inventory item
Route::get('/addnewinventoryitem', 'InventoryItemController@showPage')
->middleware('auth');
Route::post('/addnewinventoryitem', 'InventoryItemController@processForm')
->middleware('auth');
Route::get('/editinventoryitem/{id}', 'InventoryItemController@getInventoryItem')->middleware('auth');
Route::post('/editinventoryitem', 'InventoryItemController@updateInventoryItem')->middleware('auth');
Route::post('/deleteinventoryitem', 'InventoryItemController@deleteItem')->middleware('auth');

//Reservations
Route::get('/makereservation', 'ReservationController@showListOfHalls')->middleware('auth');
Route::post('/makereservation', 'ReservationController@processReservation')->middleware('auth');



