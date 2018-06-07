<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\InventoryType;

class InventoryTypeController extends Controller
{
    
    public function showPage() 
    {

        $inventorytypes = InventoryType::all();
        
        return view('admin.addnewinventorytype', 
            compact('inventorytypes'));

    }

    public function processForm(Request $request) 
    {
        $formdata = $request->only('type');

        Validator::make($formdata, 
            ['type'=>'required|string|unique:InventoryType'])
            ->validate();

        $inventorytype = new InventoryType($formdata);

        $inventorytype->save();

        return redirect()->back();
        
    }

    
}
