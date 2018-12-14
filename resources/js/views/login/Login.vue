<template>
  <div class="login">
      <div id="particles"><canvas class="particles-js-canvas-el" width="1747" height="1000" style="width: 100%; height: 100%;"></canvas></div>
    <div class="login-form">
      <div class="login-header">
        <p>{{ $Config.siteName }}</p>
      </div>
        <el-form :rules="rules" :model="ruleForm" ref="ruleForm" status-icon >
            <el-form-item prop="userName">
                <el-input
                    placeholder="请输入用户名"
                    suffix-icon="fa fa-user"
                    v-model="ruleForm.userName"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                    placeholder="请输入密码"
                    suffix-icon="fa fa-keyboard-o"
                    type="password"
                    @keyup.native.enter="login"
                    v-model="ruleForm.password"
                >
                </el-input>
            </el-form-item>
            <el-button
                type="primary" :loading="loginLoading"
                style="width: 100%;margin-bottom: 18px"
                @click.native="login('ruleForm')"
            >登录
            </el-button>
            <div>
                <el-checkbox v-model="Remenber"> Remenber</el-checkbox>
            </div>
        </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          userName: sessionStorage.getItem('username'),
          password: '',
        },
        Remenber: true,
        loginLoading: false,
        rules:{
            userName: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 6, max: 18, message: '用户名6-18位', trigger: 'blur' }
            ],
            password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 6, max: 12, message: '密码长度6-12位', trigger: 'blur' }
            ]
        }
      }
    },
    methods: {
      login(formName) {
          let APP = this;
          APP.$refs[formName].validate((valid) => {
              if (valid) {
                  APP.loginLoading = true;
                  APP.$Api.login(APP.ruleForm,(c) => {
                      //登录验证成功
                      if (c.code == 200){

                          if(APP.Remenber) {
                              sessionStorage.setItem('username', APP.ruleForm.userName);
                          }
                          setTimeout(() => {
                              //分发存储任务
                              this.$store.dispatch('logined',c.data['access_token']);
                              APP.$notify({
                                  title: '登录成功',
                                  message: '欢迎来到商城后台',
                                  type: 'success'
                              });
                              APP.loginLoading = false;
                              APP.$router.push({path: '/admin'});
                          }, 1000);
                      }else{
                          APP.$message({
                              'message' : JSON.parse(c.data),
                              'type' : 'error',
                              showClose: true,
                          });
                          APP.loginLoading = false;
                      }
                  });
              } else {
                  return false;
              }
          });
      }
  },

  mounted: function () {
      particlesJS('particles',

          {
              "particles": {
                  "number": {
                      "value": 70,
                      "density": {
                          "enable": true,
                          "value_area": 800
                      }
                  },
                  "color": {
                      "value": "#bddcf0"
                  },
                  "shape": {
                      "type": "circle",
                  },
                  "opacity": {
                      "value": 0.8,
                      "random": true,
                      "anim": {
                          "enable": false,
                          "speed":2,
                          "opacity_min": 0.1,
                          "sync": false
                      }
                  },
                  "size": {
                      "value": 10,
                      "random": true,
                      "anim": {
                          "enable": true,
                          "speed": 0.5,
                          "size_min": 0.3,
                          "sync": false
                      }
                  },
                  "line_linked": {
                      "enable": true,
                      "distance": 150,
                      "color": "#3cabff",
                      "opacity": 0.3,
                      "width": 1
                  },
              },
              "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "grab"
                      },
                      "onclick" : {
                          "enable" : false
                      },
                      "resize": true
                  },
                  "modes": {
                      "grab": {
                          "distance": 200,
                          "line_linked": {
                              "opacity": 0.8
                          }
                      },
                      "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                      },
                      "repulse": {
                          "distance": 200
                      },
                      "push": {
                          "particles_nb": 4
                      },
                      "remove": {
                          "particles_nb": 2
                      }
                  }
              },
              "retina_detect": true
          }
      );
  }

  }
</script>

<style lang="less">
  @import "Login.less";
  #particles{
      position: absolute;
      width: 100%;
      height: 100%;
      /*background-repeat: no-repeat;*/
      /*background-size: cover;*/
      /*background-position: 50% 50%;*/
  }
</style>
