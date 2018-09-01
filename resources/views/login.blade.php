@extends('layout.master')

@section('title') Login Form @stop

@section('page-content')

<div class="page-content--bge5">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="CoolAdmin"/>
                            </a>
                            @if(!$errors->isEmpty())
                                <h3>Error</h3>
                            @endif
                        </div>
                        <div class="login-form">
                            <form action="/login" method="post">
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="au-input au-input--full form-control
                                    @if($errors->has('email')) is-invalid @endif" 
                                     type="email" name="email" placeholder="Email">
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full form-control
                                    @if($errors->has('password')) is-invalid @endif" 
                                     type="password" name="password" placeholder="Password">
                                </div>
                                <div class="login-checkbox">
                                    <label>
                                        <input type="checkbox" name="remember">Remember Me
                                    </label>
                                    <label>
                                        <a href="#">Forgotten Password?</a>
                                    </label>
                                </div>
                                <button class="au-btn au-btn--block au-btn--green m-b-20" type="submit">sign in</button>
                                
                            </form>
                            <div class="register-link">
                                <p>
                                    Don't you have account?
                                    <a href="/registration">Sign Up Here</a>
                                </p>
                            </div>

                            <div class="register-link">
                                <p>
                                    <a href="/">Home Page</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
@stop