@extends('layout.master')

@section('title') Registration Form @stop

@section('style')
 <style type="text/css">
    label { font-weight: bold; color: green; }
 </style>
@stop

@section('page-content')

<div class="page-content--bge5" style="height:auto; ">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="CoolAdmin">
                            </a>
                        </div>
                        <div class="login-form">
                            <form action="/registration" method="post">
                            {{ csrf_field() }}
                            <div class="form-group">
                                    <label>Full Name:</label>
                                    <input 
                                    class="au-input au-input--full form-control
                                    @if($errors->has('fname')) is-invalid @endif" 
                                    type="text" name="fullname" 
                                    placeholder="Full Name"
                                    value="{{ old('fname') }} ">
                                </div>


                                <div class="form-group">
                                    <label>Address:</label>
                                    <input class="au-input au-input--full form-control
                                    @if($errors->has('address')) is-invalid @endif" 
                                    type="text" name="address" placeholder="Contact Address"
                                    value="{{ old('address') }} ">
                                </div>

                                <div class="form-group">
                                    <label>Tel No:</label>
                                    <input class="au-input au-input--full form-control
                                    @if($errors->has('tel')) is-invalid @endif" 
                                    type="text" name="tel" placeholder="Contact Address"
                                    value="{{ old('tel') }} ">
                                </div>
                                
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="au-input au-input--full form-control
                                    @if($errors->has('email')) is-invalid @endif" type="email" name="email" placeholder="Email"
                                    value="{{ old('email') }} ">
                               </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full form-control
                                    @if($errors->has('password')) is-invalid @endif" type="password" name="password" placeholder="Password">
                                </div>

                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input class="au-input au-input--full form-control
                                    @if($errors->has('password_confirmation')) is-invalid @endif" 
                                    type="password" name="password_confirmation" placeholder="Password">

                                </div>

                                <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">register</button>
                                
                            </form>
                            <div class="register-link">
                                <p>
                                    Already have account?
                                    <a href="/login">Sign In</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
@stop