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
        // dd(storage_path());
        //fetch all inventory types
        $inventorytypes = InventoryType::getAll();

        //fetch all inventory items;
        $inventoryitems = InventoryItem::all();

        $inventoryitem = NULL;

        //display the page
        return view('admin.addnewinventoryitem', 
            compact('inventorytypes', 'inventoryitems', 'inventoryitem'));
    }

    public function processForm(Request $request)
    {

       

        $formdata = $request->except('_token');

        $rules = [
                    'name'=>'required|string|unique:InventoryItem',
                    'inventory_type_id'=> 'required|numeric',
                    'size'=> 'required|numeric',
                    'dec_price' => 'required|numeric',
                    'no_dec_price' => 'required|numeric'
                ];
        
        Validator::make($formdata, $rules)->validate();

        $newitem = new InventoryItem($formdata);
        $newitem->save();

        //verify if image was uploaded
        if($request->hasFile('image')) {
            $filename = $newitem->id.'.jpg';
            $request->image->storeAs('public/images', $filename);
        }

        return redirect()->back();
        
    }

    public function getInventoryItem($id)
    {
       
        $inventoryitem = InventoryItem::find($id);

        //fetch all inventory types
        $inventorytypes = InventoryType::getAll();

        return view('admin.addnewinventoryitem', 
        compact('inventoryitem', 'inventorytypes'));
    }

    public function updateInventoryItem(Request $request)
    {
     
        $formdata = $request->except('_token');

        $id = $formdata['id'];

        $inventoryitem = InventoryItem::find($id);
        
                $rules = [
                            'inventory_type_id'=> 'required|numeric',
                            'size'=> 'required|numeric',
                            'dec_price' => 'required|numeric',
                            'no_dec_price' => 'required|numeric'
                        ];

            if ($formdata['name'] != $inventoryitem->name) {
                $rules['name'] = 'required|string|unique:InventoryItem';

                //item 
                $inventoryitem->name = $formdata['name'];
            }
                
            Validator::make($formdata, $rules)->validate();

            //update the item
            $inventoryitem->inventory_type_id = $formdata['inventory_type_id'];
            $inventoryitem->size = $formdata['size'];
            $inventoryitem->status = $formdata['status'];
            $inventoryitem->dec_price = $formdata['dec_price'];
            $inventoryitem->no_dec_price = $formdata['no_dec_price'];
            $inventoryitem->update();

             //verify if image was uploaded
            if($request->hasFile('image')) {
                $filename = $id.'.jpg';
                $request->image->storeAs('public/images', $filename);
            }
            
            return redirect('/addnewinventoryitem');
           

    }

    public function deleteItem(Request $request)
    {
        $id = $request->get('id');

        $inventoryitem = InventoryItem::find($id);

        $inventoryitem->delete();

        return redirect('/addnewinventoryitem');
    }

}
