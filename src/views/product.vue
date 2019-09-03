<template>
  <div>
    <!--    banner-->
    <div class="product-banner">
      <div class="swiper-container">
        <swiper :options="swiperOne" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="item in goodsImgList" :key="item.image_path"
                        :style="{backgroundImage: 'url(' +item.image_path + ')'}"></swiper-slide>
          <swiper-slide style="background-image: url('../../lib/images/product2.jpg')"></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>


      </div>
    </div>
    <div class="layout-container">
      <div class="product-body" ref="product-body">
        <div class="product-body-title">
          <router-link to="/">首页</router-link>&nbsp;&nbsp;<i></i> &nbsp;&nbsp;<a href="/">台北</a> <i></i>&nbsp;&nbsp;{{productInfo.goods_name}}
        </div>
        <h1>{{productInfo.goods_name}}</h1>
        <p class="product-comment-num">
          <span>★&nbsp;&nbsp;{{productInfo.goods_star}} </span>(10,027条评价) 79K 人参加过
        </p>
        <ul class="product-body-intro">
          <li><i class="fa fa-dollar"></i><span>不支持退改</span></li>
          <li><i class="fa fa-print"></i><span>可出示手机电子凭证或打印凭证</span></li>
          <li><i class="fa fa-calendar"></i><span>仅限指定日期使用</span></li>
          <li><i class="fa fa-support"></i><span>英文 / 普通话</span></li>
          <li><i class="fa fa-users"></i><span>最少1人起订</span></li>
        </ul>
        <ul class="product-describe-info">
          <li>到台北101观景台体验超高速电梯，仅37秒即可直达89楼室内观景台</li>
          <li>免排队现货新鲜供应：机场快速提货，原味、蔓越莓、凤黄酥等多种凤梨酥口味一次购足</li>
          <li>奶蛋素，皮薄馅多不黏牙，夹藏着口感细致的凤梨美味，闻名海内外的精致茗点</li>
          <li>旅游时光怎能少了美食作伴！探索台北必吃美食：阿宗面线、卤肉饭、麻辣火锅，到台北必吃查看更多推荐</li>
        </ul>
        <div class="product-categorys">
          <h2 class="product-title">套餐选项</h2>
          <div class="product-category" id="category">
            <h3>请选择日期、预订选项</h3>
            <p class="product-select-time">请选择领取日期</p>
            <div class="product-time-picker">
              <el-date-picker
                v-model="value1"
                type="date"
                :picker-options="pickerOptions1"
                placeholder="选择日期">
              </el-date-picker>
            </div>
            <p class="product-combo-category">套餐类型</p>
            <div class="product-combo-category-list">
              <label :for="'fengli'+index" @click="goodsTitle='true',getProductList(item.id)"
                     v-for="(item,index) in packageList" :key="item.id">
                <input type="radio" :id="'fengli'+index" v-model="goods" name="goods">
                <span>{{item.title}}</span>
              </label>
            </div>
            <!--            产品框-->
            <div v-show="goodsTitle">
              <p class="product-category-type">数量</p>

              <div class="product-category-name" v-for="(item,index) in productList" :key="item.id">

                <span>{{item.price_title}}</span>
                <div class="productPrice">
                  <span class="oldPrice">￥ {{item.original_price}}</span>
                  <span class="newPrice">￥ {{item.cost_price}}</span>
                  <div class="productCountList">
                    <button class="productCountBtn" @click="handleReduce(index)" :disabled="item.count == 0">-</button>
                    <span>{{ item.count }}</span>
                    <button class="productCountBtn" @click="handleAdd(index)">+</button>
                  </div>


                </div>
              </div>

            </div>

            <div class="product-category-info" v-show="productCount">
              <p>费用详情</p>
              <div class="product-category-info1">
                <div class="product-category-info-price">
                  <p>￥ {{productCount}}</p>
                  <p>完成活动可获得40积分</p>
                </div>
                <div class="product-category-info-shop">
                  <a href="#">加入购物车</a>
                  <a href="#">立即预订</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <h2 class="product-title">最新评价</h2>
        <div class="product-eval">
          <div class="product-eval-item">
            <p class="product-eval-item-title"><i>Lai Kam <span>★ ★ ★ ★ ★</span></i><i>2019年8月17日</i></p>
            <p class="product-eval-combo">评价套餐： 6个入盒装（原味凤梨酥）10盒以上</p>
            <h5>很方便！很方便！很方便！很方便！很方便！很方便！很方便！</h5>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <img src="../../lib/images/product3.jpg" alt="">
          </div>
          <a href="#">查看2,309条评价</a>
        </div>
        <h2 class="product-title">活动概览</h2>
        <div class="product-huodong">
          <p>
            台湾最经典的伴手礼，非凤梨酥莫属，而最实惠的凤梨酥伴手礼当属佳德，佳德凤梨酥在台湾人心中地位很高，钟情于传统原味凤梨酥的你，
            选择佳德最适合不过，凤梨酥本身有股淡淡的奶香，饼皮松软但又扎扎实实，香酥美味，不会粉粉的，它的内陷是微甜的冬瓜内馅，甜而不腻，
            浓郁丰富的口感令人难以抗拒，难以忘怀！最重要是它只可以在台湾买到，美好的味觉是旅行的记忆，机场取货让你轻松把多种美味带回家自用、送礼两相宜。
          </p>
          <img src="../../lib/images/product4.jpg" alt="">
          <img src="../../lib/images/product4.jpg" alt="">
          <img src="../../lib/images/product4.jpg" alt="">
          <img src="../../lib/images/product4.jpg" alt="">
          <img src="../../lib/images/product4.jpg" alt="">

        </div>
        <h2 class="product-title">预订详情</h2>
        <div class="product-book">
          <h4 class="product-title-4">确认详情：</h4>
          <ul>
            <li>客路会在预订成功后的1个工作日内确认，并将使用凭证发送至你的电子邮箱</li>
            <li>如在注明的时限内还没收到邮件，或须查看垃圾邮件箱</li>
          </ul>
          <h4 class="product-title-4">商品规格：</h4>
          <ul>
            <li>重量：400g / 6入装，740g / 12入装</li>
            <li>盒装尺寸：21×29×5cm（6入装），10×29×5cm（12入装）</li>
          </ul>
          <h4 class="product-title-4">商品规格：</h4>
          <ul>
            <li>重量：400g / 6入装，740g / 12入装</li>
            <li>盒装尺寸：21×29×5cm（6入装），10×29×5cm（12入装）</li>
          </ul>
          <h4 class="product-title-4">商品规格：</h4>
          <ul>
            <li>重量：400g / 6入装，740g / 12入装</li>
            <li>盒装尺寸：21×29×5cm（6入装），10×29×5cm（12入装）</li>
          </ul>
          <h4 class="product-title-4">商品规格：</h4>
          <ul>
            <li>重量：400g / 6入装，740g / 12入装</li>
            <li>盒装尺寸：21×29×5cm（6入装），10×29×5cm（12入装）</li>
          </ul>
          <div class="product-book-hint">
            <h4 class="product-title-4">注意事项：</h4>
            <ul>
              <li>购买6个入盒装1-9盒、12个入盒装1-4盒需另付运费NTD100，购买6个入盒装10盒以上、12个入盒装5盒以上免运费</li>
              <li>请于支付页面选择欲取货的机场／航厦，并估计取货时间</li>
              <li>订购商品均会被妥善装箱，可直接于机场轻松领取</li>
              <li>商品为食品，如非运送过程失温导致食品变质者，恕无法退换货，敬请见谅与配合。除商品本身有瑕疵可办理退货，商品一经使用或损毁即不可退货，退货必须保留纸箱，及商品组合之齐全及完整性</li>
              <li>
                购买前，请务必先了解此伴手礼是否可携入欲前往国家，本商品仅提供伴手礼与机场领取服务
              </li>
              <li>请注意：台北松山机场的领取时间截止到当天10:00 PM，预订时请注意领取的截止时间</li>
            </ul>

          </div>

        </div>

        <h2 class="product-title">如何使用</h2>
        <div class="product-use ">
          <ul>
            <li>参与活动时须出示打印出的使用凭证，或可出示手机上的电子使用凭证</li>
            <li>此使用凭证只适用于已获确认的日期及时间</li>
          </ul>
          <h4 class="product-title-4">领取地点：</h4>
          <ul>
            <li>供应商将于取货日1-2天前透过Klook凭证与短信上通知详细的取货资讯，请务必保持手机畅通</li>
          </ul>
          <h4 class="product-title-4">桃园机场</h4>
          <ul>
            <li>供应商将于取货日1-2天前透过Klook凭证与短信上通知详细的取货资讯，请务必保持手机畅通</li>
            <li>供应商将于取货日1-2天前透过Klook凭证与短信上通知详细的取货资讯，请务必保持手机畅通</li>
            <li>供应商将于取货日1-2天前透过Klook凭证与短信上通知详细的取货资讯，请务必保持手机畅通</li>
          </ul>
          <h4 class="product-title-4">桃园机场</h4>
          <ul>
            <li>供应商将于取货日1-2天前透过Klook凭证与短信上通知详细的取货资讯，请务必保持手机畅通</li>
            <li>供应商将于取货日1-2天前透过Klook凭证与短信上通知详细的取货资讯，请务必保持手机畅通</li>
          </ul>
          <div class="product-usage_imgs">
            <div class="product-usage_image">
              <div class="product-image-left">
                <el-image
                  style="width: 195px; height: 130px"
                  :src="url"
                  :preview-src-list="srcList">
                </el-image>
              </div>
              <div class="product-image-right">
                桃园国际机场（TPE）领取地点（第一航站楼）
              </div>


            </div>
            <div class="product-usage_image">
              <div class="product-image-left">
                <el-image
                  style="width: 195px; height: 130px"
                  :src="url"
                  :preview-src-list="srcList">
                </el-image>
              </div>
              <div class="product-image-right">
                桃园国际机场（TPE）领取地点（第一航站楼）
              </div>
            </div>
            <div class="product-usage_image">
              <div class="product-image-left">
                <el-image
                  style="width: 195px; height: 130px"
                  :src="url"
                  :preview-src-list="srcList">
                </el-image>
              </div>
              <div class="product-image-right">
                桃园国际机场（TPE）领取地点（第一航站楼）
              </div>
            </div>
            <div class="product-big_image">
              <el-image
                style="width: 790px; height: 316px"
                :src="url"
                :preview-src-list="srcList">
              </el-image>
            </div>

          </div>
          <h2 class="product-title">退改详情</h2>
          <div class="product-back">
            <ul>
              <li>此活动不受理订单修改、订单取消或退款</li>
            </ul>
          </div>
          <div class="product-grade">
            <h2 class="product-title">活动评价 ( 2,309 ) </h2>
            <div class="product-grade-start">
              <span>★★★★★</span>
              <span class="start-color" style="width: 90%;">★★★★★</span>
              <i>4.8</i>
            </div>
          </div>
          <div class="product-eval">
            <div class="product-eval-item">
              <p class="product-eval-item-title"><i>Lai Kam <span>★ ★ ★ ★ ★</span></i><i>2019年8月17日</i></p>
              <p class="product-eval-combo">评价套餐： 6个入盒装（原味凤梨酥）10盒以上</p>
              <h5>很方便！很方便！很方便！很方便！很方便！很方便！很方便！</h5>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <img src="../../lib/images/product3.jpg" alt="">
            </div>
            <a href="#" class="product-lick"><i class="fa fa-thumbs-o-up"></i>有帮助</a>
          </div>

          <div class="product-eval product-eval-items" v-for="item in evalList" :key="item.id">
            <div class="product-eval-item">
              <p class="product-eval-item-title"><i>Lai Kam <span>★ ★ ★ ★ ★</span></i><i>2019年8月17日</i></p>
              <p class="product-eval-combo">评价套餐： 6个入盒装（原味凤梨酥）10盒以上</p>
              <h5>很方便！很方便！很方便！很方便！很方便！很方便！很方便！</h5>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <img src="../../lib/images/product3.jpg" alt="">
            </div>
            <a href="#" class="product-lick"><i class="fa fa-thumbs-o-up"></i>有帮助</a>
          </div>
          <div class="product-pagination">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
          <h2 class="product-title">常见问题</h2>
          <div class="product-question">
            <h4>活动相关常见问题</h4>
            <p class="product-q">Q: 请问 台北101观景台可以持KLOOK客路发给我的电子票直接入场吗？</p>
            <p class="product-a">A: 此票需要兑换实体票方可入场哦，请至五楼售票处网路预购票柜檯出示电子凭证或打印出的电子凭证领取实体票券。</p>
            <p class="product-q">Q: 请问 台北101观景台可以持KLOOK客路发给我的电子票直接入场吗？</p>
            <p class="product-a">A: 此票需要兑换实体票方可入场哦，请至五楼售票处网路预购票柜檯出示电子凭证或打印出的电子凭证领取实体票券。</p>
            <a href="#" class="product-help">KLOOK帮助中心</a>
          </div>

        </div>

      </div>

      <div :class="{'product-body-right':'true','cheapPrice':cheapPrice}">
        <div class="cheap-price">
          <p>KLOOK客路低价保证</p>
        </div>
        <p class="product-body-right-price">
          <span class="newPrice">￥ 110</span>
          <span class="oldPrice">136</span>
        </p>
        <p class="book-now"><i class="fa fa-clock-o"></i> 今日可订</p>
        <p class="require-now"><i class="fa fa-flash"></i> 立即确认并获得凭证</p>
        <a href="#category">选择</a>
      </div>
      <h2 class="product-title">你可能还会喜欢</h2>
      <div class="product-lick">
        <ul>
          <li class="theme-body-product" v-for="item in otherList" :key="item.id">
            <a href="#">
              <div class="theme-body-img" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
                <i class="fa fa-map-marker"></i>
                {{item.country_name_str}}
                <span>19% OFF</span>
              </div>
              <div class="them-body-descr">
                <h3>{{item.goods_name}}</h3>
                <p class="lk-grade"><span>★   {{item.goods_star}}  &nbsp;&nbsp;</span>({{item.comment_count}}条评价) |
                  {{item.goods_sold_count}} 人参加过</p>

                <div>
                  <!--                  <p class="active-money">￥  <i class="fa fa-flash"></i></p>-->
                  <!--                  <p class="active-time">最早可预订日期：{{item.near_sell_date}}</p>-->
                  <p class="active-old">￥ {{item.converter_goods_price}}</p>
                  <p class="active-new">￥ {{item.converter_goods_price}} <i class="fa fa-flash"></i>
                    <span>最早可预订日期：明日</span></p>
                </div>
                <i class="theme-body-hot">
                  <span> 热门</span>
                </i>
              </div>

            </a>
          </li>
        </ul>

      </div>

    </div>
    <!--    购物车-->
    <div class="product-shopping fixed" v-show="productCount">
      <div class="lk-layout">
        <div class="product-category-info">
          <div class="product-category-info1">
            <div class="product-category-info-price">
              <p>￥ {{productCount}}</p>
              <p>完成活动可获得40积分</p>
            </div>
            <div class="product-category-info-shop">
              <a href="#">加入购物车</a>
              <a href="#">立即预订</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "product",
        data() {
            return {
                cheapPrice: false,
                isHint: true,
                currentPage: 2,
                productNum: 0,
                goodsTitle: '',
                // productCount: 0,
                goods: '',

                evalList: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5},
                    {id: 6}
                ],
                value1: '',
                pickerOptions1: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    },
                },
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                swiperOne: {
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                    navigation: {
                        nextEl: '.product-banner .swiper-button-next',
                        prevEl: '.product-banner .swiper-button-prev',
                    },
                    pagination: {
                        el: '.product-banner .swiper-pagination',
                    },
                },
                packageList: [],
                productList: [],
                goodsImgList: [],
                productInfo: {},
                otherList: []
            }
        },
        computed: {
            productCount() {
                let count = 0
                this.productList.forEach(item => {
                    count += item.count * item.cost_price
                })
                return count
            }
        },
        created() {
            this.getProductIndex(this.$route.params.id)
        },
        methods: {
            getProductIndex(id) {
                this.$http.get('api/index/goods_index/goods_id/' + id).then(resu => {
                    if (resu.data.code == 200) {
                        this.packageList = resu.data.data.package_list
                        this.goodsImgList = resu.data.data.goods_img_list
                        this.productInfo = resu.data.data.list
                        this.otherList = resu.data.data.other_list.list
                        console.log(this.packageList);
                    }

                })
            },

            getProductList(id) {
                this.$http.get('api/index/get_package_option/package_id/' + id).then(resu => {
                    if (resu.data.code = 200) {
                        this.productList = resu.data.data
                        this.productList.forEach(item => {
                            item.count = 0
                        })
                        // console.log(this.productList);
                    }
                })
            },
            handleReduce: function (index) {
                let item = this.productList[index];
                item.count = parseInt(item.count)
                if (item.count < 2) {
                    return;
                }

                item.count--;
            },
            handleAdd: function (index) {
                let item = this.productList[index];
                item.count = parseInt(item.count)
                item.count++;
            },

            handleChange(val) {
                // this.productCount = this.productPrice * val
                console.log(val);
            },
            getMouseEnter() {
                console.log("enter");
                // this.$refs.mySwiper.autoplay.stop()
                this.swiperOne.autoplay.stop()
            },
            getMouseLeave() {
                this.swiperOne.autoplay.start()

            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            getScrolltopNum() {
                let cc = document.querySelector('.product-body').offsetHeight
                console.log(cc);
                let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                if (top > 460) {
                    this.cheapPrice = true;
                    if (top > 260 + cc) {
                        this.cheapPrice = false
                    }
                } else {
                    this.cheapPrice = false
                }
            }

        },
        mounted() {
            window.addEventListener('scroll', this.getScrolltopNum)

        }
    }
</script>

<style scoped>
  @import "../../lib/css/product.css";


  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: 23px
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: 23px
  }

  .productCountList {
    width: 104px;
    height: 32px;
    display: flex;
    justify-content: space-between;
    line-height: 32px;
    border: 1px solid #ccc;
  }

  .productCountBtn {
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    outline: none;
    line-height: 30px;
    border: none;
  }

  .productPrice {
    display: flex;
    vertical-align: middle;
  }

  .layout-container {
    position: relative;
  }

  .product-body-right {
    position: absolute;
    top: 24px;
    /*right: 0;*/
    margin-left: 810px;
    width: 320px;
    height: 200px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    padding: 12px 20px;
    background-color: #fff;
  }

  .cheap-price {
    font-size: 14px;
    line-height: 24px;
  }

  .product-body-right-price .newPrice {
    font-size: 24px;
    color: #333;
    line-height: 27px;
  }

  .product-body-right-price .oldPrice {
    font-size: 16px;
  }

  .book-now {
    margin-top: 20px;
  }

  .book-now, .require-now {
    padding-left: 30px;
    position: relative;
    /*margin-top: 4px;*/
  }

  .book-now i, .require-now i {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 16px;
    color: #d1d1d1;
  }

  .require-now i {
    color: #ff5722;
    font-weight: 700;
  }

  .product-body-right >a {
    display: inline-block;
    text-align: center;
    line-height: 40px;
    width: 280px;
    height: 40px;
    margin-top: 16px;
    background-color: #ff5722;
    border: 1px solid #ff5722;
    outline: none;
    border-radius: 6px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    box-sizing: border-box;
  }

  .cheapPrice {
    position: fixed;
    top: 90px;
  }

</style>
