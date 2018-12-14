<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
    //后台接口路由
    Route::group(['namespace' => 'Api'],function(){


    // ================== 不需要认证权限的路由 ==================
            //后台登录相关接口
            Route::group(['prefix' => 'auth', 'namespace' => 'Auth'] ,function(){
                //验证登录接口
                Route::post('login','LoginController@login');

                //退出登录
                Route::post('logout','LoginController@logOut');

            });




    // ================== 需要认证权限的接口路由 ==================
            Route::group(['middleware' => 'refresh.token'], function(){
                //获取用户信息接口
                Route::post('auth/getUser','Auth\LoginController@getUser');

                //测试接口
                Route::get('test','TestController@test');


            });



    });



