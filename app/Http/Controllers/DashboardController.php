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
        } else {
            $bookings = Booking::all();
        }

        return view('admin.dashboard', compact('user', 'bookings'));
    }

    public function updatePaymentStatus(Request $resquest) 
    {

        $bookingid = $resquest->get('bookingid');

        //search for this booking
        $booking = Booking::find($bookingid);
        $booking->status = 'Paid';
        $booking->save();

        return redirect('/dashboard');

    }

    public function cancelReservation(Request $resquest) 
    {
        $bookingid = $resquest->get('bookingid');
        
        //search for this booking
        $booking = Booking::find($bookingid);
        $booking->status = 'Cancel';
        $booking->save();

        return redirect('/dashboard');
    }

}
