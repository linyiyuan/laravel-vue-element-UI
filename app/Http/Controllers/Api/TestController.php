<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;
use JWTAuth;
use JWTFactory;

class TestController extends CommonController
{
    public function test()
    {
//        return $this->respondWithToken();
//        JWTAuth::parseToken()->invalidate();
//
//        $newToken = JWTAuth::getToken();
//
        return $this->successReturn(200,1);
//        Redis::set('id',JWTAuth::getToken());
//        JWTAuth::parseToken()->invalidate(true);
//        auth()->logout(true);
//        return $this->successReturn(200,JWTAuth::parseToken()->refresh());
//        if(JWTAuth::parseToken()->check()) {
//            return $this->successReturn(200,'有效');
//        }
//
//        $this->errorReturn(400,'无效');
    }
}
