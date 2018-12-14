<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BaseController extends Controller
{
    /**
     * 抛出异常
     * @author YiYuan Lin
     * @param $message
     * @throws \Exception
     */
    public function throwExp($message) {
        throw new \Exception($message);
    }

    /**
     * 验证参数
     * @param $data
     * @param $rules
     * @param $message
     * @throws \Exception
     */
    public function verifyParams($data, $rules, $message)
    {
        $validator = Validator::make($data, $rules, $message);
        if ($validator->fails()) {
            $this->throwExp($validator->messages()->first());
        }
    }
}
