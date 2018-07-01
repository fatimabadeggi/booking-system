<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Carbon\Carbon;
use Auth;

use App\InventoryItem;

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
        ];
        Validator::make($formdata, $rules)->validate();

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

        //store
        $user = Auth::user();
        $hallinfo = InventoryItem::find($formdata['hall_id']);

        return view('admin.reservation-invoice', compact('user', 'hallinfo'));

        //dd($formdata);


    }
}
