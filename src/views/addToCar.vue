<template>
  <div class="addToCar">
    <p class="addToCar-title">已成功添加1个活动至购物车</p>
    <div class="addToCar-info">
      <img src="../../lib/images/city-hot1.jpg" alt="">
      <div class="addToCar-left">
        <p>套餐类型： 随上随下巴士通行票</p>
        <p>出行日期: 2019年9月12日</p>
        <p>数量: 1 x 成人</p>
      </div>
      <div class="addToCar-right">
        <p>总价: ¥ 109</p>
        <a href="#">继续购买</a>
        <a href="#" class="toCount">去购物车结算</a>
      </div>
    </div>

    <div class="addToCar-bottom">
      <h2>相关活动推荐</h2>
      <div class="addToCar-bottom-list">
        <div class="addToCar-bottom-item" v-for="item in cartList" :key="item.id">
          <a href="#">
            <div class="theme-body-img">
              <i class="fa fa-map-marker"></i>
              宿雾
              <span>19% OFF</span>
            </div>
            <div class="them-body-descr">
              <h3>【优惠】奥斯洛鲸鲨共游（宿雾市或麦克坦岛出发）</h3>
              <p class="lk-grade"><span>★  4.8 &nbsp;&nbsp;</span>(6,978条评价) | 142K 人参加过</p>
              <div>
                <p class="active-old">￥ 489</p>
                <p class="active-new">￥ 394 </p>
              </div>
              <i class="theme-body-hot">
                <span> 热门</span>
              </i>
            </div>

          </a>
        </div>

      </div>
      <p class="addToCar-more">
        <a href="#">查看更多</a>
      </p>

    </div>
  </div>


</template>

<script>
    export default {
        name: "addToCar",
        data() {
            return {
                cartList: [
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
  @import "../../lib/css/addToCar.css";
</style>
