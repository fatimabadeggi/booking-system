@extends('layout.master') 
@section('title') Reservation Form @stop 
@section('header-nav-bar') @include('header-nav-bar') @stop 
@section('page-title') Halls @stop 

@section('page-content')
<div class="page-content--bgf7">
    
    <div class="container-fluid">
        <div class="row" style="padding-top:50px;">
            
            @foreach($halls as $hall)
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">{{ $hall->name }}</div>
                    <div class="card-body">
                        <?php $image = $hall->id.'.jpg'; ?>
                        <image src="{{asset('storage/images/'.$image)}}" 
                            alt="hall image" />

                        <form action="/makereservation" method="post">
                        {{ csrf_field() }}
                        <input type="hidden" name="hall_id" value="{{$hall->id}}" />
                         
                        <p> Name: <b>{{ $hall->name }}</b> </p>
                        <p> Capacity:<b> {{ $hall->size }} </b> </p>

                        <p><b>Prices:</b> </p>
                        <ul style="margin-left:10px; 
                            font-size:14px; ">
                            <li>Decoration Price: 
                                <span style="font-weight:bolder; color: red;">
                                     &nbsp;&#8358; {{ $hall->dec_price }} 
                                </span></li>
                            <li>No Decoration Price: 
                                <span style="font-weight:bolder; color: red;">
                                    &nbsp;&#8358; {{ $hall->no_dec_price }}
                                </span> </li>
                        </ul>
                        
                        <div class="form-group">
                            <label for="cc-payment" class="control-label mb-1">Decoration:</label>

                                <select name="dec_price_option" class="form-control">
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                    
                                </select>
                        </div>

                        <div class="form-group">
                            <label for="cc-payment" 
                            class="control-label mb-1">Hours:</label>

                                <input name="hours" 
                                type="text" class="form-control" placeholder="0 Hour"/>    
                                    
                                </select>
                        </div>


                        <div class="form-group">
                            <label for="cc-payment" class="control-label mb-1">
                            Reservation Date:</label>

                            <input name="res_date" 
                            type="text" class="form-control" placeholder="DD-MM-YYYY"/>
                                
                        </div>

                        <button type="submit" class="btn btn-lg btn-info btn-block">
                                Reserve 
                            </button>

                        </form>
                           
                    </div>
                </div>
            </div>
            @endforeach

            
        </div>

    </div>
        
    </section>
</div>
@stop
