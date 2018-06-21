@extends('layout.master')
@section('title') Add New Inventory Item Page @stop

@section('header-nav-bar')
    @include('header-nav-bar')
@stop

@section('page-title')
    Inventory Type Page
@stop

@section('page-content')
    <div class="page-content--bgf7">
        <!-- DATA TABLE-->
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
            <div class="card">
                <div class="card-header">New Inventory Item Form</div>
                <div class="card-body">

                    <form action="/addnewinventoryitem" method="post">
                    {{ csrf_field() }}
                        <div class="form-group">
                            <label for="cc-payment" 
                            class="control-label mb-1">Name:</label>

                            <input 
                            name="name" type="text" 
                            class="form-control" 
                            aria-required="true">
                            @if(!$errors->isEmpty())
                            <span class="help-block has-error">
                                {{ $errors->get('name')[0] }}</span>
                            @endif
                        </div> 

                        <div class="form-group">
                            <label for="cc-payment" 
                            class="control-label mb-1">Type:</label>

                            <select name="inventory_type_id" 
                            class="form-control" >
                                <option value=" ">---Select---</option>
                                @foreach($inventorytypes as $inventorytype)
                                    <option value="{{ $inventorytype->id }}">
                                        {{ $inventorytype->type }}
                                    </option>
                                @endforeach
                            </select>  
                            @if(!$errors->isEmpty())
                            <span class="help-block has-error">
                                {{ $errors->get('inventory_type_id')[0] }}</span>
                            @endif
                        </div> 

                        <div class="form-group">
                            <label for="cc-payment" 
                            class="control-label mb-1">Size:</label>

                            <input 
                            name="size" type="text" 
                            class="form-control" 
                            aria-required="true">
                            @if(!$errors->isEmpty() && isset($errors->get('size')[0]))
                            <span class="help-block has-error">
                                {{ $errors->get('size')[0] }}</span>
                            @endif
                        </div> 

                        <div class="form-group">
                            <label for="cc-payment" 
                            class="control-label mb-1">Status:</label>

                            <select name="status" 
                            class="form-control">
                                <option>Available</option>
                                <option>Not Available</option>
                            </select>  
                        </div> 

                        <button type="submit" class="btn btn-lg btn-info btn-block">
                        Add New Item
                        </button>
                    </form>
                </div>
                                                  
                    
                
            </div>                    
        </div>
        </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="table-responsive table-responsive-data2">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>SN</th>
                                            <th>Item name</th>
                                            <th>Type</th>
                                            <th>Size</th>
                                            <th>Status</th>                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $sn = 1; ?>


                                        @foreach($inventoryitems as $inventoryitem)
                                            <tr>
                                                <td>{{ $sn++ }}</td>
                                                <td>{{ $inventoryitem->name }}</td>
                                                <td>{{ $inventoryitem->inventorytype->type }}</td>
                                                <td>{{ $inventoryitem->size }}</td>
                                                <td>{{ $inventoryitem->status }}</td>
                                            </tr>
                                            
                                        @endforeach
                                       
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
@stop
