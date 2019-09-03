<template>
  <div>
    <div class="login-form">
      <h2>登录</h2>
      <div class="login-form-nav">
            <span :class="{'active':usernav=='email'}" @click="usernav='email'"><i
              class="fa fa-envelope-o"></i>邮箱地址</span>
        <span :class="{'active':usernav=='phone'}" @click="usernav='phone'"> <i class="fa fa-phone"></i>手机号码</span>
      </div>
      <div class="login-form-table">
        <input type="email" placeholder="邮箱地址" v-model="email" name="email" v-show="usernav=='email'">
        <input type="text" placeholder="手机号码" name="email" v-show="usernav=='phone'">
        <div class="password-close" v-show="passnav=='psdClosed'">
          <input type="password" placeholder="密码" v-model="password">
          <i class="fa fa-eye" @click="passnav='psdOpen'"></i>
        </div>
        <div class="password-open" v-show="passnav=='psdOpen'">
          <input type="text" placeholder="密码" v-model="password">
          <i class="fa fa-eye-slash" @click="passnav='psdClosed'"></i>
        </div>
        <p class="login-from-rember">
               <span>
                   <input type="checkbox">记住账户
               </span>
          <span><a href="#">忘记密码？</a></span>
        </p>
        <button>登录</button>
        <div class="login-fast">
          <span>或快速登录</span>
          <div class="login-fast-change">
            <a href="#">
              <em class="fa fa-facebook-square"></em>
              <h4>Facebook</h4>
            </a>

            <a href="#">
              <em class="fa fa-wechat"></em>
              <h4>微信</h4>
            </a>
          </div>

        </div>

      </div>
      <div class='login-register'>
        <span>还没有账号？现在注册！</span>
        <router-link to="/register">注册</router-link>

      </div>

    </div>
  </div>


</template>

<script>
    export default {
        name: "loginBox",
        data() {
            return {
                usernav: 'email',
                passnav: 'psdClosed',
                password: '',
                email: '',

            }
        },
        methods: {
            getToLogin() {
                this.$http.post('/')

            }
        }
    }
</script>

<style scoped>
  @import "../../lib/css/login.css";

</style>
