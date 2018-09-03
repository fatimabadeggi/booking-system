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

                                            @if(Auth::user()->isAdmin())
                                                <th>email</th>
                                                <th>phone</th>
                                            @endif

                                            <th>price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php $i = 1; ?>
                                        @foreach($bookings as $booking)
                                        <tr class="tr-shadow"
                                        
                                        @if($booking->status == 'Cancel')
                                         style="text-decoration:line-through; color:red;"
                                        @endif 
                                        >
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
                                            <td> <span 
                                                @if ($booking->status == 'Paid') class="status--process"
                                                @else class="status--denied" 
                                                @endif >
                                                {{ $booking->status }} </span>
                                            </td>

                                            @if(Auth::user()->isAdmin())
                                            <td>
                                                <span>{{ $booking->user->email }}</span>
                                            </td>

                                            <td>
                                                <span>{{ $booking->user->tel }}</span>
                                            </td>
                                            @endif


                                            <td>
                                                <span>{{ $booking->price }}</span>
                                            </td>
                                            
                                            <td>
                                                <div class="table-data-feature">
                                                    @if(Auth::user()->isAdmin())
                                                    
                                                    @if($booking->status != 'Cancel')
                                                    @if ($booking->status != 'Paid')
                                                    <form action="/updatepayment" method="post">
                                                    {{ csrf_field() }}
                                                    <input type="hidden" name="bookingid" value="{{ $booking->id }}">

                                                    <button class="item" data-toggle="tooltip" 
                                                        data-placement="top" title="Update Payment">                                                        
                                                        <i class="zmdi zmdi-edit"></i>
                                                    </button>
                                                    </form>
                                                    @endif
                                                    @endif
                                                    @endif

                                                    @if(!Auth::user()->isAdmin())

                                                    @if($booking->status != 'Cancel')
                                                    <form action="/cancelreservation" method="post">
                                                    {{ csrf_field() }}
                                                    <input type="hidden" name="bookingid" value="{{ $booking->id }}">
                                                    <button class="item" data-toggle="tooltip" 
                                                        data-placement="top" title="Cancel">
                                                        <i class="zmdi zmdi-delete"></i>
                                                    </button>
                                                    </form>
                                                    @endif
                                                    @endif
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