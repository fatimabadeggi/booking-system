@extends('layout.master')
@section('title') Dashboard @stop

@section('header-nav-bar')
    @include('header-nav-bar')
@stop

@section('page-content')
    <div class="page-content--bgf7">
        <!-- DATA TABLE-->
        @if(Auth::user()->isAdmin())
            <h3><b>Administrator</b></h3>
            @include('partials.booking-table', ['bookings'=> $bookings])
        @else
            @include('partials.booking-table', ['bookings'=> $bookings])
        @endif 
    </div>
@stop
