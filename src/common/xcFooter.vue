<template>
  <footer>
    <div class="lk-layout">
      <div class="foot-a">

        <div>
          友情链接: <i class="fa fa-facebook"></i> <i class="fa fa-twitter"></i> <i class="fa fa-weixin"></i><i
          class="fa fa-youtube"></i>
        </div>
        <div class="foot-grid">
          <div>
            <span>最高可省60%，只有订阅用户才能享受到隐藏优惠</span>
            <p>点击「订阅」，即表示您同意我们的服务条款及隐私政策</p>
          </div>
          <div class="foot-search">
            <input type="text" placeholder="请输入邮箱以接收订阅信息">
            <a href="#">订阅</a>
          </div>
        </div>
      </div>

    </div>
    <div class="foot-border"></div>
    <div class="lk-layout">
      <div class="foot-b">
        <p class="t12 copyright ">©2014-2019 Klook Travel Technology Limited. All Rights Reserved.<br>HK Travel
          Agent Licence: 354005.<br>SG
          Travel Agent Licence: 02851.<br>TW
          Travel Agent License: 甲
          03950.</p>
        <ul>
          <li class="t_white">认识星程</li>
          <li><router-link to="/about/">关于星程</router-link></li>
          <li><a href="/zh-CN/partner/">合作伙伴</a></li>
          <li><a href="/zh-CN/careers/">加入我们</a></li>
        </ul>
        <ul>
          <li class="t_white">携手星程</li>
          <li><a href="https://merchant.klook.com/zh-CN/">商户登录</a></li>
          <li><a href="http://affiliate.klook.com/zh-CN/">联合营销</a></li>
          <li><a href="https://www.klook.com/zh-CN/agent/">同业交易</a></li>
        </ul>
        <ul>
          <li class="t_white">网站条款</li>
          <li><a href="/zh-CN/conditions/">使用条款</a></li>
          <li><a href="/zh-CN/policy/">隐私政策</a></li>
          <li><a href="/zh-CN/cookiepolicy/">Cookie政策</a></li>
        </ul>
        <div class="foot-paly">
          <a href="#">咨询星程</a>
          <h3>支付方式</h3>
          <p>
            <span class="i_alipay m_justify_list"></span>
            <span class="i_newMaster m_justify_list"></span>
            <span class="i_wechatpay m_justify_list"></span>
            <span class="i_newAE m_justify_list"></span>
            <span class="i_newVisa m_justify_list"></span>
          </p>

        </div>

      </div>
    </div>
    <div class="foot-border"></div>
    <div class="lk-layout">
      <div class="foot-c">
        <p>
          粤ICP号备14100233号-1 地址：深圳市福田区天安科技创业园大厦A1002室 客服电话：400-194-9240
        </p>
      </div>
    </div>

  </footer>
</template>

<script>
    export default {
        name: "xcFooter"
    }
</script>

<style scoped>

</style>
