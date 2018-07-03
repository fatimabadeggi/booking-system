<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use Auth;

use App\InventoryItem;
use App\Booking;

class ReservationController extends Controller
{
    

    public function showListOfHalls() 
    {

        $inventoryitems = InventoryItem::all();

        $halls = collect();

        //fiter halls
        if (!$inventoryitems->isEmpty()) {

            $halls = $inventoryitems->reject(function($item){
                return $item->inventorytype->type != 'hall';
            });

        }
        
        return view('admin.list-available-halls', compact('halls'));
    }

    public function processReservation(Request $request) 
    {

        $formdata = $request->except('_token');
        
        $rules = [
            'res_date'=> 'required',
            'hours' => 'required|integer'
        ];
        Validator::make($formdata, $rules)->validate();

        //check length
        if(strlen($formdata['hours']) > 2) {
            return redirect()->back();
        }


        //split string
        $datefields = explode('-', $formdata['res_date']);

        //day
        if(strlen($datefields[0]) != 2 || 
            $datefields[0] > 31 || $datefields[0] <= 0) {
            return redirect()->back();
        }

        //month
        if(strlen($datefields[1]) != 2 || 
        $datefields[1] > 12 || $datefields[1] <= 0) {
            return redirect()->back();
        }

        //year
        if(strlen($datefields[2]) > 4 || strlen($datefields[2]) < 4) {
            return redirect()->back();
        }

        //carbon date
        $carbondate = Carbon::createFromDate($datefields[2], $datefields[1], $datefields[0]);

        $carbondatestr = $carbondate->toDateTimeString();
        //split by space
        $carbondatefields = explode(' ', $carbondatestr);

        //split by date 
        // $carbondatefields[0] = 2017-07-01
        $carbondatefields = explode('-', $carbondatefields[0]); 

        //verify if date is valid
        if ($carbondatefields[0] != $datefields[2] ||
        $carbondatefields[1] != $datefields[1] || 
        $carbondatefields[2] != $datefields[0] ) {
            
            return redirect()->back();
        }

        //is date past
        if ($carbondate->isPast()) {
            return redirect()->back();
        }

        $user = Auth::user();
        $hallinfo = InventoryItem::find($formdata['hall_id']);
        $deco_price_option = $formdata['dec_price_option'];

        //couple the date 
        //$carbondatefields[0] => 2018, $carbondatefields[1] => 12, $carbondatefields[2]=> 12
        $carbondatefieldsimplode = implode('-', $carbondatefields);

        //verify item is not booked
        $inventory_id = $hallinfo->id;
        $isbooked = Booking::where(
            'inventory_id', $inventory_id)
            ->where('status', 'booked')
            ->whereDate('booking_date', $carbondatefieldsimplode)->count();

        //hall has already been booked for this date
        if ($isbooked == 1) {
            return redirect()->back();
        }

        //calculate price
        $rate = 0;
        $hours = $formdata['hours'];
        
        if ($deco_price_option == 'yes') {
            $rate = $hallinfo->dec_price;
        } else {
            $rate = $hallinfo->no_dec_price;
        }

        $price = $hours * $rate;

        //save to db
        $user_id = Auth::user()->id;
        $inventory_id = $hallinfo->id;
        $decoration = $deco_price_option;
        
        $booking = new Booking();
        $booking->user_id = $user_id;
        $booking->inventory_id = $inventory_id;
        $booking->hours = $hours;
        $booking->decoration = $decoration;
        $booking->status = 'pendding';
        $booking->price = $price;
        $booking->booking_date = $carbondate;
        $booking->save();

        //check if hall has be reserved by another customer
        $availablebookings = Booking::where(
            'inventory_id', $inventory_id)
            ->where('status', 'pendding')
            ->whereDate('booking_date', $carbondatefieldsimplode)
            ->count();
        
        return view('admin.reservation-invoice', 
            compact('user', 'hallinfo', 'deco_price_option', 
            'booking', 'availablebookings'));

    }
}
