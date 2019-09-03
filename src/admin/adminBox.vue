<template>
  <div>
    <!--main-->
    <div class="personal-main">
      <div class="layout-container">
        <!--        提示-->
        <div class="personal-hint" v-show="isHint" @click="isHint=false">
          <span>新增邮箱或手机号码作为登录方式，以增强账号安全性</span>
          <a href="#">保护我的账号</a>
          <i class="fa fa-close"></i>
        </div>


        <div class="personal-body">
          <!--                左侧-->
          <div class="personal-main-left">
            <div class="personal-left-info">
              <label for="active">
                <input type="file" id="active">
                <img src="../../lib/images/avatar.png" alt="">
                <div>
                  <i class="fa fa-camera"></i>
                </div>
              </label>
              <h3>Klook用户</h3>
              <a href="#">编辑个人信息</a>
            </div>
            <!--                    优惠-->
            <div class="personal-left-discounts">
              <a href="#">
                <p>0</p>
                <span>可用优惠码</span>
              </a>
              <a href="#">
                <p>0</p>
                <span>积分</span>
              </a>
            </div>
            <!--                    菜单-->
            <div class="personal-left-menu">
              <ul>
                <li>
                  <router-link to="/admin/personal"><i
                    class="fa fa-drivers-license-o"></i><span>个人中心</span></router-link>
                </li>
                <li>
                  <router-link to="/admin/order"><i class="fa fa-newspaper-o"></i><span>我的订单</span></router-link>
                </li>
                <li>
                  <router-link to="/admin/review"><i class="fa fa-newspaper-o"></i><span>我的评价</span></router-link>
                </li>
                <li class="personal-left-card">
                  <router-link to="/admin/wish"><i
                    class="fa fa-heart-o"></i><span>心愿清单</span></router-link>
                </li>
                <li>
                  <router-link to="/admin/setting"><i class="fa fa-cog"></i><span>账户设置</span></router-link>
                </li>
              </ul>
            </div>
            <div class="h20"></div>
            <!--                    banner-->
            <div class="personal-left-banner">
              <h4>获取优惠</h4>
              <p>每成功邀请好友一次可获取¥20</p>
              <span>查看详情</span>
            </div>

          </div>
          <!--                右侧-->
          <router-view></router-view>

        </div>

      </div>

    </div>


  </div>
</template>

<script>
    export default {
        name: "personalBox",
        data() {
            return {
                isHint: true
            }
        }
    }
</script>

<style scoped>
  @import "../../lib/css/personal.css";

</style>
