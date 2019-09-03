<template>
  <!--                右侧-->

  <div class="order-main-right review-right">
    <div class="order-right-top">
      <div class="empty-img"></div>
      <p class="m-2">review 还未有可评价活动？立即预订活动，完成体验并留下评价，就有机会获得积分奖励！</p>
      <a class="personal-index" href="/index.html">返回首页</a>
    </div>

    <div class="order-right-bottom">
      <h1>热门活动</h1>
      <ul class="wish-goods-list">
        <li v-for="item in hotList" :key="item.id">
          <a href="#" class="add-active-body">
            <div class="active-img">
              <i class="fa fa-map-marker"></i>
              JR 列车
            </div>
            <div class="active-body-b">
              <h3>JR PASS 全日本铁路通票（7 / 14 / 21日）</h3>
              <div>
                <p class="old-price">￥ 17</p>
                <p class="active-money">￥ 1,838 <i class="fa fa-flash"></i></p>
                <p class="active-time">最早可预订日期：2019年8月13日</p>
              </div>
            </div>
          </a>
        </li>

      </ul>
    </div>

  </div>

</template>

<script>
    export default {
        name: "reviewBox",
        data() {
            return {
                hotList: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5},
                    {id: 6}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
