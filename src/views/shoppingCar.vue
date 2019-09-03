<template>
  <div class="shopping-cart">
    <h1>购物车</h1>
    <div class="shopping-cart-head">
      <ul class="shopping-cart-ul">
        <li class="shopping-select">
          <input type="checkbox" :checked="selectAll" name="" id="shopping-all">
          <label for="shopping-all" class="shopping-all" @click.prevent="selectAll = !selectAll">

          </label>
        </li>
        <li class="shopping-img">全选</li>
        <li class="shopping-active">活动</li>
        <li class="shopping-date">出行日期</li>
        <li class="shopping-count">数量</li>
        <li class="shopping-num"></li>
        <li class="shopping-price">总价</li>
      </ul>

    </div>

    <div class="shopping-cart-info" v-for="item in shoppingList" :key="item.id">
      <ul class="shopping-cart-ul">
        <li class="shopping-select">
          <input type="checkbox" name="" :checked="item.isSelect" :id="'shopping-all'+item.id">
          <label :for="'shopping-all'+item.id" class="shopping-all"
                 @click.prevent="handleToggleChecked(item)">
          </label>
        </li>
        <li class="shopping-img">
          <img src="../../lib/images/hot-3.jpg" alt="">
        </li>
        <li class="shopping-active">
          <p>【优惠】太平山顶景点套票</p>
          <p>套餐类型: 山顶缆车 + 摩天台套票（单程）</p>
        </li>
        <li class="shopping-date">
          <p>2019年9月7日 11:00 AM</p>
          <p>当地时间</p>
        </li>
        <li class="shopping-count">成人</li>
        <li class="shopping-num">
          <div>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>

        </li>
        <li class="shopping-price"></li>
      </ul>
      <p class="shopping-cart-save">
        <span class="shopping-cart-checked"><i class="fa fa-trash-o"></i>删除</span>
        <span class="shopping-cart-checked"> <i class="fa fa-edit"></i>更改</span>
        <span>￥300</span>
      </p>
    </div>

    <div class="shopping-cart-holder">
      <div class="shopping-cart-holder-left">
        <div class="shopping-select">
          <input type="checkbox" :checked="selectAll" name="" id="shopping-allh">

          <label for="shopping-allh" class="shopping-all" @click.prevent="selectAll = !selectAll">
          </label>
        </div>
        <span class="shopping-select-all">
                    全选
                </span>
        <div><a href="#">删除选中活动</a></div>
      </div>
      <div class="shopping-cart-holder-right">
        <div>
          <p>2 个活动合计: <span>￥1644</span></p>
          <p>你可获得 <b>174</b> 积分</p>
        </div>

        <a href="#">结算</a>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "shoppingCar",
        data() {
            return {
                selectAll: true,
                shoppingList: [
                    {id: 1, isSelect: true},
                    {id: 2, isSelect: true}
                ]
            }
        },
        watch: {
            selectAll() {
                this.shoppingList.forEach(item => {
                    item.isSelect = this.selectAll
                })
            },
        },
        methods: {
            handleToggleChecked(val) {
                console.log(val);
                val.isSelect = !val.isSelect
                this.selectAll = this.shoppingList.every(item => {
                    return item.isSelect == true
                })

            }
        }
    }
</script>

<style scoped>
  @import "../../lib/css/shoppingCar.css";

</style>
