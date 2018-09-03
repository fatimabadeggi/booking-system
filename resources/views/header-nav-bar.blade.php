<?php 
    $user = Auth::user();
 ?>
{{-- dd($user) --}}
<div class="page-wrapper">
        <!-- HEADER DESKTOP-->
        <header class="header-desktop3 d-none d-lg-block">
            <div class="section__content section__content--p35">
                <div class="header3-wrap">
                    <div class="header__logo">
                        <a href="#">
                            <img src="images/icon/logo-white.png" alt="CoolAdmin" />
                        </a>
                    </div>
                    <div class="header__navbar">
                        <ul class="list-unstyled">

                            <li class="has-sub">
                                <a href="/">
                                    <i class="fas fa-copy"></i>
                                    <span class="bot-line"></span>Home</a>
                            </li>

                            <li class="has-sub">
                                <a href="#">
                                    <i class="fas fa-tachometer-alt"></i>Dashboard
                                    <span class="bot-line"></span>
                                </a>
                                <ul class="header3-sub-list list-unstyled">
                                    <li>
                                        <a href="/dashboard">Dashboard</a>
                                    </li>
                                    
                                    @if($user->type == 'admin')
                                    <li>
                                        <a href="/viewcustomers">View Customers</a>
                                    </li>
                                    @endif

                                </ul>
                            </li>
                           
                            @if($user->type == 'customer')
                            <li class="has-sub">
                                <a href="#">
                                    <i class="fas fa-copy"></i>
                                    <span class="bot-line"></span>Reservation</a>
                                <ul class="header3-sub-list list-unstyled">
                                    <li>
                                        <a href="/makereservation">Make Reservation</a>
                                    </li>
                                </ul>
                            </li>
                            @endif

                            @if($user->type == 'admin')
                            <li class="has-sub">
                                <a href="#">
                                    <i class="fas fa-copy"></i>
                                    <span class="bot-line"></span>Manage Inventory</a>
                                <ul class="header3-sub-list list-unstyled">
                                    <li>
                                        <a href="/addnewinventorytype">Add New Inventory Type</a>
                                    </li>
                                    <li>
                                        <a href="/addnewinventoryitem">Add New Inventory</a>
                                    </li>
                                    
                                </ul>
                            </li>
                            @endif

                        </ul>
                    </div>
                    <div class="header__tool">
                        
                        <div class="account-wrap">
                            <div class="account-item account-item--style2 clearfix js-item-menu">
                                <div class="image" style="border: 1px solid #c6c6c6; background-color:#f3f3f3">
                                    <img src="" alt="" />
                                </div>
                                <div class="content">
                                    <a class="js-acc-btn" href="#">{{ $user->fullname }}</a>
                                </div>
                                <div class="account-dropdown js-dropdown">
                                    <div class="info clearfix">
                                        <div class="image" style="border: 1px solid #c6c6c6; background-color:#f3f3f3">
                                            <a href="#">
                                                <img src="" alt="" />
                                            </a>
                                        </div>
                                        <div class="content">
                                            <h5 class="name">
                                                <a href="#">{{ $user->fullname }}</a>
                                            </h5>
                                            <span class="email">{{ $user->email }}</span>
                                        </div>
                                    </div>
                                    {{--  <div class="account-dropdown__body">  --}}
                                        <!--<div class="account-dropdown__item">
                                            <a href="#">
                                                <i class="zmdi zmdi-account"></i>Account</a>
                                        </div> -->
                                        
                                        {{--  @if($user->type == 'customer')  --}}
                                            <!--<div class="account-dropdown__item">
                                                <a href="#">
                                                    <i class="zmdi zmdi-money-box"></i>Billing</a>
                                            </div> -->
                                        {{--  @endif  --}}

                                    {{--  </div>  --}}
                                    <div class="account-dropdown__footer">
                                        <a href="/logout">
                                            <i class="zmdi zmdi-power">
                                            </i>Logout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- END HEADER DESKTOP-->

         <!-- HEADER MOBILE-->
        
        
        <!-- END HEADER MOBILE -->