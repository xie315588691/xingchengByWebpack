<template>
  <div>
    <!--    旅游背景图-->
    <div class="lk-trval">
      <h1>初次来 STARWAY？</h1>
      <h2>与STARWAY一起，开启新旅程，探索世界的更多可能</h2>
      <p>
            <span @click="xcVideo=!xcVideo">
                <i class="fa fa-caret-right"></i>
            </span>

      </p>
    </div>

    <div class="bgc-g">
      <div class="xc-about-layout">
        <div class="about-desc">
          <h2>关于星程</h2>
          <p class="f20">
            KLOOK客路隶属于深圳市客路网络科技有限公司。KLOOK客路是亚太领先的旅行体验预订平台，
            提供世界各地上万种值得尝试的目的地玩法与服务。每一天，我们都在帮助旅行者发掘全球最棒的景点、行程与难忘的当地体验。
          </p>
          <p class="f20">
            还在困惑玩些什么好？那就到KLOOK探索你即将出发的城市吧！从乘坐大阪环球影城刺激的过山车，到潜入巴厘岛海域探秘沉船；
            从享受新加坡高空缆车晚宴，到体验各地便捷的机场接驳和WiFi，KLOOK将帮助全球千万旅行者，一起发现更好玩的世界，预订独一无二的旅行体验。
          </p>


        </div>
      </div>
    </div>
    <!--    使命-->
    <div class="about-sm">
      <div class="xc-about-layout">
        <div class="about-desc">
          <h2>我们的使命</h2>
          <p class="f18">旅行本来就应该轻松惬意。KLOOK的任务是在令人眼花缭乱的选择中，帮助千万旅行者找到“想要“和“需要”的一切，让您每一次旅行告别纠结，充满难忘回忆。</p>
        </div>
      </div>
    </div>


    <!--    视频-->
    <div class="xc-video" v-if="xcVideo">
      <video src="../../lib/video/CN4_m.mp4" :autoplay="{'autoplay':xcVideo}"></video>
      <i class="fa fa-close" @click="xcVideo=!xcVideo"></i>
    </div>

  </div>
</template>

<script>
    export default {
        name: "aboutBox",
        data() {
            return {
                xcVideo: false,
                currencyList: []
            }
        }
    }
</script>

<style scoped>
  @import "../../lib/css/about.css";

</style>
