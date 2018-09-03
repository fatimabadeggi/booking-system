<?php

namespace App\Http\Controllers;
use App\User;

use Illuminate\Http\Request;

class ViewCustomerController extends Controller
{
    
    public function showCustomers()
    {
        $allcustomers = User::all();

        $customers = $allcustomers->reject(function($customer) {
            return ($customer->type == 'admin');
        });

        return view('admin.viewcustomer', compact('customers'));
    }
}
