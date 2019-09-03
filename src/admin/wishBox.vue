<template>
  <div class="order-main-right review-right">
    <div class="order-right-top">
      <div v-if="!wishList">
        <div class="empty-img"></div>
        <p class="m-2">愿望清单是空的！赶紧探索你下一次的旅程，并标记你心仪的活动体验</p>
        <router-link class="personal-index" to="/">返回首页</router-link>
      </div>
      <div v-if="wishList">
        <h1>心愿清单</h1>
        <ul class="wish-goods-list wish-goods-ul">
          <li v-for="(item,index) in wishList" :key="item.id">
            <a href="#" class="add-active-body">
              <div class="active-img" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
                <i class="fa fa-map-marker"></i>
                {{item.country_name_str}}
              </div>
              <div class="active-body-b">
                <h3>{{item.goods_name}}</h3>
                <div>
                  <p class="old-price" v-show="item.converter_goods_original_price">￥
                    {{item.converter_goods_original_price}}</p>
                  <p class="active-money">￥ {{item.converter_goods_price}} <i class="fa fa-flash"></i></p>
                  <p class="active-time">最早可预订日期：{{item.near_sell_date}}</p>
                </div>
              </div>
            </a>
            <p class="remove-wish" @click="getRemoveWish(item.id,index) ">
              <i class="fa fa-heart"></i>
              移出愿望清单
            </p>
          </li>

        </ul>

      </div>

    </div>

    <div class="order-right-bottom">
      <h1>热门愿望清单</h1>
      <ul class="wish-goods-list">
        <li v-for="item in wishOtherList" :key="item.id">
          <a href="#" class="add-active-body">
            <div class="active-img" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
              <i class="fa fa-map-marker"></i>
              {{item.country_name_str}}
            </div>
            <div class="active-body-b">
              <h3>{{item.goods_name}}</h3>
              <div>
                <p class="old-price" v-show="item.converter_goods_original_price">￥
                  {{item.converter_goods_original_price}}</p>
                <p class="active-money">￥ {{item.converter_goods_price}} <i class="fa fa-flash"></i></p>
                <p class="active-time">最早可预订日期：{{item.near_sell_date}}</p>
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
        name: "wishBox",
        data() {
            return {
                customerId: 5,
                wishList: [],
                wishOtherList: []
            }
        },
        created() {
            this.getWishIndex()
        },
        methods: {
            getWishIndex() {
                this.$http.get('api/index/my_collect/customer_id/' + this.customerId).then(resu => {
                    if (resu.data.code == 200) {
                        this.wishList = resu.data.data.collect_list.list
                        this.wishOtherList = resu.data.data.goods_list.list
                    }
                })
            },
            getRemoveWish(id, index) {
                this.$http.post('api/index/del_my_collect',
                    "goods_id=" + id + "&customer_id=" + this.customerId,
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(result => {
                    console.log(result);
                    if (result.data.code = 200) {
                        this.$message({
                            message: result.data.msg,
                            type: 'success'
                        });
                        this.wishList.splice(index, 1)
                    } else {
                        this.$message.error(result.data.msg)
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .wish-goods-ul li {
    height: 297px;
  }

  .wish-goods-ul .remove-wish {
    height: 39px;
    box-sizing: border-box;
    border-top: 1px solid #ccc;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;

  }

  .remove-wish i {
    color: red;
  }

</style>
