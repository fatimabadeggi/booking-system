@extends('layout.master') 
@section('title') Add New Inventory Item Page @stop 
@section('header-nav-bar') @include('header-nav-bar') @stop 
@section('page-title') Inventory Type Page @stop 
@section('page-content')
<?php 
    $headingTxt = 'Add New';
    $updatestatus = false;

    if ($inventoryitem != NULL) {
        $updatestatus = true;
        $headingTxt = 'Update';
    }
?> 
<div class="page-content--bgf7">
    <!-- DATA TABLE-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $headingTxt }} Inventory Item Form</div>
                    <div class="card-body">

                        @if($updatestatus)
                            <form action="/editinventoryitem" method="post"
                            enctype="multipart/form-data">
                            <input type="hidden" name="id" value="{{$inventoryitem->id}}" />
                        @else
                            <form action="/addnewinventoryitem" method="post" 
                            enctype="multipart/form-data">
                        @endif
                            {{ csrf_field() }}
                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">Name:</label>

                                <input name="name" type="text" 
                                @if($updatestatus) 
                                value="{{$inventoryitem->name}}"
                                @endif
                                class="form-control" aria-required="true"> 
                                @if(!$errors->isEmpty())
                                <span class="help-block has-error">
                                    {{ print_r($errors->get('name')) }}</span>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">Type:</label>

                                <select name="inventory_type_id" class="form-control">
                                    <option value=" ">---Select---</option>
                                    @foreach($inventorytypes as $inventorytype)
                                    <option value="{{ $inventorytype->id }}" 
                                    
                                    <?php 
                                    if( ($updatestatus) 
                                        && ($inventoryitem->inventorytype->id == $inventorytype->id) )
                                       print  'selected="selected"';
                                    ?> >

                                        {{ $inventorytype->type }}
                                    </option>
                                    @endforeach
                                </select>
                                @if(!$errors->isEmpty())
                                <span class="help-block has-error">
                                    {{-- $errors->get('inventory_type_id')[0] --}}</span>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">Qty/Size:</label>

                                <input name="size" type="text" 
                                
                                @if($updatestatus) 
                                value="{{$inventoryitem->size}}"
                                @endif

                                class="form-control" aria-required="true"> @if(!$errors->isEmpty() && isset($errors->get('size')[0]))
                                <span class="help-block has-error">
                                    {{-- $errors->get('size')[0] --}}</span>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">Decoration Price:</label>

                                <input name="dec_price" type="text" 
                                
                                @if($updatestatus) 
                                value="{{$inventoryitem->dec_price}}"
                                @endif

                                class="form-control" aria-required="true"> @if(!$errors->isEmpty() && isset($errors->get('dec_price')[0]))
                                <span class="help-block has-error">
                                    {{-- $errors->get('size')[0] --}}</span>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">No Decoration Price:</label>

                                <input name="no_dec_price" type="text" 
                                
                                @if($updatestatus) 
                                value="{{$inventoryitem->no_dec_price}}"
                                @endif

                                class="form-control" aria-required="true"> @if(!$errors->isEmpty() && isset($errors->get('no_dec_price')[0]))
                                <span class="help-block has-error">
                                    {{-- $errors->get('size')[0] --}}</span>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">Status:</label>

                                <select name="status" class="form-control">
                                    <option  
                                    @if($updatestatus && $inventoryitem->status == 'Available' )
                                     selected="selected"
                                    @endif
                                    >Available</option>

                                    <option 
                                    @if($updatestatus && $inventoryitem->status == 'Not Available' )
                                        selected="selected"
                                    @endif
                                    >Not Available</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">Image</label>

                                <input name="image" type="file"/>
                                

                                
                                @if($updatestatus) 
                                    <image src="{{asset('storage/images/'.$inventoryitem->id.'.jpg')}}" alt="img" />
                                @endif
                                
                            </div>

                            <button type="submit" class="btn btn-lg btn-info btn-block">
                                {{$headingTxt}} Item
                            </button>
                        </form>
                    </div>



                </div>
            </div>
        </div>

        @if(!$updatestatus)
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive table-responsive-data2">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Item name</th>
                                <th>Type</th>
                                <th>Qty/Size</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $sn = 1; ?> @foreach($inventoryitems as $inventoryitem)
                            <tr>
                                <td>{{ $sn++ }}</td>
                                <td>{{ $inventoryitem->name }}</td>
                                <td>{{ $inventoryitem->inventorytype->type }}</td>
                                <td>{{ $inventoryitem->size }}</td>
                                <td>{{ $inventoryitem->status }}</td>

                                <td>
                                    <div class="table-data-feature">
                                        <form action="/editinventoryitem/{{$inventoryitem->id}}" method="get">
                                            {{ csrf_field() }}

                                            <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                <i class="zmdi zmdi-edit"></i>
                                            </button>
                                        </form>

                                        <form action="/deleteinventoryitem" method="post">
                                            {{ csrf_field() }}
                                            <input type="hidden" value="{{$inventoryitem->id}}" name="id" />
                                            <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                <i class="zmdi zmdi-delete"></i>
                                            </button>
                                        </form>

                                    </div>
                                </td>
                            </tr>

                            @endforeach

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        @endif
    </div>
    </section>
</div>
@stop