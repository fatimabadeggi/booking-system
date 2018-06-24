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
        $inventorytype = NULL;
        return view('admin.addnewinventorytype', 
            compact('inventorytypes','inventorytype'));

    }

    //add new inventory type
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

    //get inventory type for editing
    public function getInventoryType($id) 
    {
        $inventorytype = InventoryType::find($id);
        
        return view('admin.addnewinventorytype', compact('inventorytype'));
    }

    //update inventory
    public function updateInventoryType(Request $request)
    {

        $formdata = $request->only('type');

                Validator::make($formdata, 
                    ['type'=>'required|string|unique:InventoryType'])->validate();
        
                    ///Retrive inventory type update
                $id = $request->get('id');
                $inventorytype = InventoryType::find($id);

                //change the attribute/value and save
                $inventorytype->type = $formdata['type'];
                $inventorytype->save();

                return redirect('/addnewinventorytype');
        
    }

    public function deleteType(Request $request) 
    {
        $id = $request->get('id');

        //retreive 
        $inventorytype = InventoryType::find($id);
        $inventorytype->delete();

        return redirect('/addnewinventorytype');

    }


    
}
