<template>
  <div class="order-main-right">
    <h1>我的订单 <span>查看有效订单</span></h1>
    <div class="order-right-top">
      <div class="empty-img"></div>
      <p>暂无新的行程！请在这里查看历史订单</p>
      <p class="m-2">探索精彩活动并体验轻松的网上预订流程</p>
      <a class="personal-index" href="/index.html">返回首页</a>
    </div>

    <div class="order-right-bottom">
      <h1>热卖活动</h1>
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
        name: "orderBox",
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
