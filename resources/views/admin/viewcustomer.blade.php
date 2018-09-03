@extends('layout.master')
@section('title') View Customers @stop

@section('header-nav-bar')
    @include('header-nav-bar')
@stop

@section('page-content')
    <div class="page-content--bgf7">
        <!-- DATA TABLE-->
            <section class="p-t-20">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            
                            <div class="table-responsive table-responsive-data2">
                                <table class="table table-data2">
                                    <thead>
                                        <tr>
                                            
                                            <th>Full Name</th>
                                            <th>Email</th>
                                            <th>Address</th>
                                            <th>Tel</th>
                                            <th>Register date</th>
                                            
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    @foreach($customers as $customer)
                                        <tr class="tr-shadow">
                                            <td>
                                                <?php print $customer->fullname; ?>
                                            </td>
                                            
                                            <td>
                                                <span class="block-email">
                                                    {{ $customer->email }}
                                                </span>
                                            </td>
                                            <td class="desc">
                                                {{ $customer->address }}
                                            </td>
                                            <td>{{ $customer->tel }} </td>
                                            
                                            <td>{{ $customer->created_at }}</td>
                                            
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
