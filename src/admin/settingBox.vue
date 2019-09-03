<template>
  <!--                右侧-->
  <div>
    <div class="setting-main-right ">
      <div class="setting-right-personInfo">
        <div class="setting-right-personInfo-top">
          <h1 class="h-title">个人信息 <span :class="{'up':upOrDown}" @click="upOrDown=!upOrDown"></span>
          </h1>
          <p class="m-t-2">以下信息仅用于帮助你在支付时自动填写你的个人资料，你的信息将会安全地被客路保存且不会公开</p>
        </div>
        <div class="setting-right-personInfo-bottom" v-show="upOrDown">
          <div class="setting-right-name">
            <div class="setting-name-one">
              <p>称谓</p>
              <select>
                <option value="">请选择</option>
                <option value="1">先生</option>
                <option value="0">女士</option>
              </select>
            </div>
            <div class="setting-name-two">
              <p>名字（须与旅游证件一致）</p>
              <input type="text" placeholder="请输入">
            </div>
            <div class="setting-name-two">
              <p>姓氏（须与旅游证件一致）</p>
              <input type="text" placeholder="请输入">
            </div>
          </div>
          <div class="setting-country">
            <p>国籍/地区（须与旅游证件一致）</p>
            <select>
              <option value="">请选择</option>
              <option value="CN">中国内地</option>
              <option value="HK">香港</option>
              <option value="SG">新加坡</option>
              <option value="MY">马来西亚</option>
              <option value="KR">韩国</option>
            </select>
          </div>
          <div class="setting-phone">
            <div>
              <p>国家/地区代码</p>
              <select>
                <option value="">请选择</option>
                <option value="86">中国内地 +(86)</option>
                <option value="852">香港 +(852)</option>
                <option value="65">新加坡 +(65)</option>
                <option value="60">马来西亚 +(60)</option>
                <option value="82">韩国 +(82)</option>
                <option value="1">美国 +(1)</option>
                <option value="886">台湾 +(886)</option>
                <option value="1">加拿大 +(1)</option>
                <option value="61">澳大利亚 +(61)</option>
              </select>
            </div>
            <div>
              <p>电话号码（首次需验证）</p>
              <input type="text" placeholder="请输入">
            </div>
          </div>
          <div class="setting-email">
            <p>邮箱（接收凭证）</p>
            <input type="text" placeholder="请输入你的邮箱（接收凭证）">
          </div>
          <button> 保存</button>

        </div>

      </div>
      <!--                    密码-->
      <div class="setting-right-password">
        <div class="setting-right-personInfo-top">
          <h1 class="h-title">密码管理 <span :class="{'up':psdUpOrDown}"
                                         @click="psdUpOrDown=!psdUpOrDown"></span>
          </h1>
          <p class="m-t-2">须包含至少8个字符，并使用字母与数字组合</p>
        </div>
        <div class="setting-right-personInfo-bottom" v-show="psdUpOrDown">
          <div class="setting-oldpsd">
            <p>当前密码</p>
            <div class="setting-oldpsd-one" v-show="oldpsdObj">
              <input type="password" placeholder="更改密码" v-model="oldpsd">
              <i class="fa fa-eye" @click="oldpsdObj=!oldpsdObj"></i>
            </div>
            <div class="setting-oldpsd-two" v-show="!oldpsdObj">
              <input type="text" placeholder="更改密码" v-model="oldpsd">
              <i class="fa fa-eye-slash" @click="oldpsdObj=!oldpsdObj"></i>
            </div>
          </div>
          <div class="setting-newpsd">
            <p>新密码 (须包含至少8个字符，并使用字母与数字组合)</p>
            <div class="setting-oldpsd-one" v-show="newpsdObj">
              <input type="password" placeholder="输入新密码" v-model="newpsd">
              <i class="fa fa-eye" @click="newpsdObj=!newpsdObj"></i>
            </div>
            <div class="setting-oldpsd-one" v-show="!newpsdObj">
              <input type="text" placeholder="输入新密码" v-model="newpsd">
              <i class="fa fa-eye-slash" @click="newpsdObj=!newpsdObj"></i>
            </div>
          </div>
          <div class="setting-renewpsd">
            <div class="setting-oldpsd-one" v-show="repsdObj">
              <input type="password" placeholder="确认密码" v-model="repsd">
              <i class="fa fa-eye" @click="repsdObj=!repsdObj"></i>
            </div>
            <div class="setting-oldpsd-one" v-show="!repsdObj">
              <input type="text" placeholder="确认密码" v-model="repsd">
              <i class="fa fa-eye-slash" @click="repsdObj=!repsdObj"></i>
            </div>
          </div>
          <button> 保存</button>
        </div>

      </div>


    </div>
  </div>

</template>

<script>
    export default {
        name: "settingBox",
        data() {
            return {
                oldpsd: '',
                newpsd: '',
                repsd: '',
                oldpsdObj: true,
                newpsdObj: true,
                repsdObj: true,
                upOrDown: true,
                psdUpOrDown: true,
            }
        }
    }
</script>

<style scoped>

</style>
