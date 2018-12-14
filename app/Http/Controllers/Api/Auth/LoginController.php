<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Api\CommonController;
use App\Models\Users;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use JWTAuth;

class LoginController extends CommonController
{
    /**
     * @author YiYuan Lin
     * @date 18/11/21
     * @describe 登录验证 生成jwt
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        try{
            $params = [
                'username' => $request->userName,
                'password' => $request->password
            ];
            //配置验证
            $rules = [
                'username' => 'required',
                'password' => 'required|min:6|max:18',
            ];
            $message = [
                'username.required' => '[username]缺失',
                'password.required' => '[password]缺失',
                'password.min' => '[password]最少6位数',
                'password.max' => '[password]最多18位数',
            ];

            $this->verifyParams($params, $rules, $message);

            //检查用户以及密码是否正确
            if (! $token = JWTAuth::attempt($params)) {
                $this->throwExp('登录失败，用户验证失败，请检查用户名以及密码');
            }

            //正确返回信息
            return $this->respondWithToken($token);

        }catch (\Exception $e){
            return $this->errorReturn('400', json_encode($e->getMessage()));

        }
    }

    /**
     * @author YiYuan Lin
     * @date 18/11/22
     * @describe 返回的JWT信息
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        $data = [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ];

        return $this->successReturn(200,$data);
    }

    /**
     * @author YiYuan Lin
     * @date 18/11/23
     * @describe 退出登录操作
     */
    public function logOut(Request $request)
    {
        //检查Token有效性
        if (JWTAuth::parseToken()->check()) {
            //退出操作，将Jwt拉进黑名单
            JWTAuth::parseToken()->invalidate(true);

            return $this->successReturn(200,'success');
        }else{
            return $this->successReturn(200,'success');
        }
    }

    public function getUser()
    {
        if (!JWTAuth::parseToken()->check()) return $this->errorReturn(500,'用户认证失败');

        $user = JWTAuth::parseToken()->toUser();

        $user = json_encode($user);

        return $this->successReturn(200,$user);

    }
}
