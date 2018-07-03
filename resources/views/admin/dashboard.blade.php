@extends('layout.master')
@section('title') Dashboard @stop

@section('header-nav-bar')
    @include('header-nav-bar')
@stop

@section('page-content')
    <div class="page-content--bgf7">
        <!-- DATA TABLE-->
        
        @if(Auth::user()->isAdmin())
            isAdmin
        @else
            <section class="p-t-20">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h3> Most recent booking </h3>
                            <div class="table-responsive table-responsive-data2">
                                <table class="table table-data2">
                                    <thead>
                                        <tr>
                                            <th>S/N</th>
                                            <th>Name </th>
                                            <th>description</th>
                                            <th>date</th>
                                            <th>status</th>
                                            <th>price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $i = 1; ?>
                                        @foreach($bookings as $booking)
                                        <tr class="tr-shadow">
                                            <td>{{ $i++ }}</td>
                                            <td>{{ $booking->inventoryItem->name }}</td>
                                            <td>
                                                <p> 
                                                    Type: {{ $booking->inventoryItem->inventoryType->type }}
                                                </p>

                                                <br>
                                                <p>
                                                Decoration: {{ $booking->decoration }} </p>

                                                <br>    
                                                <p>Hours: {{ $booking->hours }}</p>

                                            </td>
                                            <td class="desc">{{ $booking->booking_date }}</td>
                                            <td> <span class="status--denied"> <!--.status--process !-->
                                                {{ $booking->status }} </span>
                                            </td>
                                            <td>
                                                <span>{{ $booking->price }}</span>
                                            </td>
                                            
                                            <td>
                                                <div class="table-data-feature">
                                                    <button class="item" data-toggle="tooltip" data-placement="top" title="Edit">
                                                        <i class="zmdi zmdi-edit"></i>
                                                    </button>
                                                    <button class="item" data-toggle="tooltip" data-placement="top" title="Delete">
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </button>
                                                </div>
                                            </td>
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
        @endif 
    </div>
@stop
