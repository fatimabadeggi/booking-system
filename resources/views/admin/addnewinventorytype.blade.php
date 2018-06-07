@extends('layout.master')
@section('title') Add New Inventory Type Page @stop

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
                <div class="card-header">New Inventory Type Form</div>
                <div class="card-body">

                    <form action="/addnewinventorytype" method="post">
                    {{ csrf_field() }}
                        <div class="form-group">
                            <label for="cc-payment" 
                            class="control-label mb-1">Name:</label>

                            <input 
                            name="type" type="text" 
                            class="form-control" 
                            aria-required="true">
                            @if(!$errors->isEmpty())
                            <span class="help-block has-error">
                                {{ $errors->get('type')[0] }}</span>
                            @endif
                        </div> 

                        <button type="submit" class="btn btn-lg btn-info btn-block">
                        Add New Type
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
                                            <th>Inventory Types</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $sn = 1; ?>
                                        @foreach($inventorytypes as $inventorytype)
                                            <tr class="tr-shadow">
                                                
                                                <td>{{ $sn++ }}  </td>
                                                <td>{{ $inventorytype->type }}</td>
                                                
                                                
                                            </tr>
                                            <tr class="spacer"></tr>
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
