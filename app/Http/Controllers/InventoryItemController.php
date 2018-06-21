<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Validator;

use App\InventoryItem;
use App\InventoryType;

class InventoryItemController extends Controller
{
    


    public function showPage() 
    {
        //fetch all inventory types
        $inventorytypes = InventoryType::getAll();

        //fetch all inventory items;
        $inventoryitems = InventoryItem::all();

        //display the page
        return view('admin.addnewinventoryitem', 
            compact('inventorytypes', 'inventoryitems'));
    }

    public function processForm(Request $request)
    {

        $formdata = $request->except('_token');

        $rules = [
                    'name'=>'required|string|unique:InventoryItem',
                    'inventory_type_id'=> 'required|numeric',
                    'size'=> 'required|numeric'
                ];
        
        Validator::make($formdata, $rules)->validate();

        $newitem = new InventoryItem($formdata);
        $newitem->save();

        return redirect()->back();
        
    }

}
