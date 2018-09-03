@extends('layout.master') 
@section('title') Inventory Type Page @stop 
@section('header-nav-bar') @include('header-nav-bar') @stop 
@section('page-title') Inventory Type Page @stop 

<?php 
    $headingTxt = 'Add New';
    $updatestatus = false;

    if ($inventorytype != NULL) {
        $updatestatus = true;
        $headingTxt = 'Update';
    }
?> 

@section('page-content')
<div class="page-content--bgf7">
    <!-- DATA TABLE-->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $headingTxt }} Inventory Type Form</div>
                    <div class="card-body">

                        @if(!$updatestatus)
                            <form action="/addnewinventorytype" method="post">
                        @else
                            <form action="/editinventorytype" method="post">
                            <input type="hidden" value="{{ $inventorytype->id }}" name="id" >
                        @endif
                            {{ csrf_field() }}
                            <div class="form-group">
                                <label for="cc-payment" class="control-label mb-1">Name:</label>

                                <input name="type" 
                                @if($updatestatus)
                                    value="{{ $inventorytype->type }}"
                                @endif
                                type="text" class="form-control" aria-required="true"> @if(!$errors->isEmpty())
                                <span class="help-block has-error">
                                    {{ $errors->get('type')[0] }}</span>
                                @endif
                            </div>

                            <button type="submit" class="btn btn-lg btn-info btn-block">
                                {{ $headingTxt }} Type
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
        @if ($inventorytype == NULL) 
            @include('admin.inventorytype-table', $inventorytypes)
        @endif
    </section>
</div>
@stop