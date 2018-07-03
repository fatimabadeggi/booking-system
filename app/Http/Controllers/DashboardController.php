<?php

namespace App\Http\Controllers;

use App\Booking;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    

    public function showPage(Request $request)
    {
        $user = $request->user();
        $bookings = collect();

        if (!$user->isAdmin()) {
            $bookings = Booking::where('user_id', $user->id)->get();
        }

        return view('admin.dashboard', compact('user', 'bookings'));
    }
}
