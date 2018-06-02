<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\User;

class RegistrationFormController extends Controller
{
    
    public function processForm(Request $request) 
    {
        
        $rules= [
            'fullname' => 'required|string|min:5',
            'address' => 'required|string',
            'tel' => 'required|numeric',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed'
        ];

        Validator::make($request->all(), $rules)->validate();

        $formdata = $request->except('_token');
        $formdata['type'] = 'customer';
        $user = new User($formdata);
        $user->save();
        
        dd('registraton successful');
    }

    
}
