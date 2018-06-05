<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    

    public function showPage(Request $request)
    {
        $user = $request->user();
        return view('admin.dashboard', compact('user'));
    }
}
