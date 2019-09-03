<template>
  <div>
    <div class="city-banner-fixed" v-show="cityTag">
      <div class="city-banner-fixed-t" :style="{backgroundImage: 'url(' +cityInfo.img + ')'}">
        <div class="city-layout">
          <h1>{{cityInfo.des_name}}</h1>
        </div>
      </div>

      <div class="city-banner-fixed-b">
        <div class="city-layout">
          <ul>
            <li><a href="#" class="active">{{cityInfo.des_name}}首页</a></li>
            <li v-for="item in cityCatelist" :key="item.id"><a href="#">{{item.cat_name}}</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--城市背景图-->
    <div class="city-banner" :style="{backgroundImage: 'url(' +cityInfo.img + ')'}">
      <div class="city-banner-addr">
        <h1>{{cityInfo.des_name}}</h1>
        <a href="#">台湾 <i class="fa fa-long-arrow-right"></i></a>
      </div>
    </div>
    <!--搜索-->
    <div class="city-search">
      <div class="city-layout">
        <div class="city-search-menu">
          <div class="swiper-container">
            <swiper :options="swiperOne" ref="mySwiper" @someSwiperEvent="callback">
              <!-- slides -->
              <swiper-slide v-for="item in cityCatelist" :key="item.id">
                <router-link to="/" class="active">
                  <i :style="{backgroundImage: 'url(' +item.img + ')'}"></i>
                  <p>{{item.cat_name}}</p>
                </router-link>
              </swiper-slide>
              <!-- Optional controls -->
            </swiper>


          </div>
        </div>
      </div>
    </div>

    <div class="city-main" ref="cityMain">
      <div class="city-layout">
        <h2>城市指南</h2>
        <div class="city-guide">
          <div class="city-guide-l">
            <p class="city-guide-desc">
              {{cityInfo.des_tag}}
            </p>
            <div class="city-guide-tag">
              <span class="t_green">不容错过：</span>
              <span class="tags" v-for="(item,i) in cityInfo.des_tag_list">{{item}}</span>
            </div>
            <p><a href="#" @click.prevent="cityFixed = 'true'">查看更多 <i class="fa fa-chevron-down"></i></a></p>
          </div>
          <div class="city-guide-r">
            <div class="guider-r-t">
              <i class="fa fa-cloud"></i>
              <div>
                <p>
                  <span>36°C</span>
                  <span class="gray">27°C</span>
                </p>
                <p>
                  星期二,8月13日. (当地时间)
                </p>
              </div>
            </div>
            <div class="guider-r-b">
              查看未来7日天气
              <i class="fa fa-angle-down"></i>
            </div>

          </div>

        </div>
        <!--        广告1-->
        <div class="city-img1"></div>
        <h2>{{cityInfo.des_name}}热门活动</h2>
        <div class="city-hot1">
          <div class="swiper-container">
            <swiper :options="swiperTwo" ref="mySwiper">
              <!-- slides -->
              <swiper-slide v-for="(item,i) in hotGoodsList" :key="item.id">
                <div class="city-hot1-t" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
                  <i class="fa fa-video-camera"></i>
                  <span>46% OFF</span>
                </div>
                <div class="city-hot1-b active-body-b">
                  <h3>{{item.goods_name}}</h3>
                  <p><span>★  {{item.goods_star}} &nbsp;&nbsp;</span>({{item.comment_count}}条评价) |
                    {{item.goods_sold_count}} 人参加过</p>
                  <div>
                    <p class="active-money">￥ {{item.converter_goods_price}} <i class="fa fa-flash"></i></p>
                    <p class="active-time">最早可预订日期：{{item.near_sell_date}}</p>
                  </div>
                </div>
                <em>
                  <b class="fa fa-star"></b>
                  <p>{{i+1}}</p>
                </em>
              </swiper-slide>
            </swiper>
            <!-- Add Arrows -->
          </div>
          <div class="swiper-button-next swiper-button-black"></div>
          <div class="swiper-button-prev swiper-button-black"></div>
        </div>
        <h2>体验师精选攻略</h2>
        <div class="city-exper">
          <div class="swiper-container">
            <swiper :options="swiperThree" ref="mySwiper">
              <!-- slides -->
              <swiper-slide v-for="item in cityStrategyList" :key="item.id">
                <router-link :to="'/youji/'+item.id">
                  <div class="city-hot1-t" :style="{backgroundImage: 'url(' +item.title_img + ')'}">
                  </div>
                  <div class="city-hot1-b active-body-b">
                    <h4>{{item.title}}</h4>
                    <p>
                      <img :src="item.curator_img" alt="">
                      <span>{{item.curator_name}}</span>.
                      <span>{{item.create_date}}</span>
                    </p>
                  </div>
                </router-link>
              </swiper-slide>
            </swiper>

          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next swiper-button-black"></div>
          <div class="swiper-button-prev swiper-button-black"></div>
        </div>
        <h2>{{cityInfo.des_name}}当地玩乐</h2>
        <div class="city-local">
          <div class="city-local-body">
            <div class="city-local-body-item" v-for="item in categorylist" :key="item.id">
              <a href="">
                <div class="city-body-item-t">
<!--                  <i class="fa fa-video-camera"></i>-->
                  <span>38% OFF</span>
                </div>
                <div class="city-body-item-b">
                  <div class="them-body-descr">
                    <h3>【优惠】奥斯洛鲸鲨共游（宿雾市或麦克坦岛出发）</h3>
                    <p class="lk-grade"><span>★  4.8 &nbsp;&nbsp;</span>(6,978条评价) | 142K 人参加过</p>
                    <div>
                      <p class="active-old">￥ 489</p>
                      <p class="active-new">￥ 394 <i class="fa fa-flash"></i> <span>最早可预订日期：明日</span>
                      </p>
                    </div>
                    <i class="theme-body-hot">
                      <span> 热门</span>
                    </i>
                  </div>
                </div>
              </a>

            </div>
            <div class="city-local-pagination">
              <div class="block">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[40, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400">
                </el-pagination>
              </div>
            </div>

          </div>

        </div>
        <h2>旅行贴士</h2>
        <div class="city-tips">
          <h4>关于 {{cityInfo.des_name}}</h4>
          <div class="city-tips-desc">
            <div class="city-tips-desc-text">
              <p v-html="cityInfo.des_info"></p>
            </div>
            <!--            <div class="city-tips-map"></div>-->
          </div>
          <div class="city-local-weather" v-show="weatherCFList">
            <h4>当地天气
              <div class="city-weather-c">
                <span :class="{'active':weatherCF=='F'}" @click="weatherCF='F'">°F</span>
                <span :class="{'active':weatherCF=='C'}" @click="weatherCF='C'">°C</span>
              </div>
            </h4>
            <ul>
              <li v-for="item in weatherCFList" :key="item.weather">
                <p>{{item.title}}</p>
                <p class="city-local-weather-temp">
                  <span>{{item.weather}}°</span>
                </p>
              </li>

            </ul>

          </div>

          <div class="city-local-info">
            <h2>实用信息</h2>
            <ul class="city-info-ul">
              <li v-for="(val,key,i) in useFulInfo">
                <p>{{key}}</p>
                <span v-for="item in val">{{item}}</span>
              </li>
              <!--              <li>-->
              <!--                <p>时区</p>-->
              <!--                <span>GMT +08:00</span>-->
              <!--                <p>没有时差</p>-->
              <!--                <span>GMT +08:00</span>-->
              <!--              </li>-->
            </ul>
          </div>

        </div>

        <!--                附近目的地-->
        <div class="city-address">
          <h2>附近目的地</h2>
          <div class="city-address-items">
            <div class="swiper-container">
              <swiper :options="swiperFore" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="item in nearDestinationList" :key="item.id">
                  <a href="#" :style="{backgroundImage: 'url(' +item.img + ')'}">
                    <h4>{{item.des_name}}</h4>
                  </a>
                </swiper-slide>
                <!-- Optional controls -->
              </swiper>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-button-next swiper-button-black"></div>
            <div class="swiper-button-prev swiper-button-black"></div>
          </div>

        </div>


      </div>

    </div>


    <div class="city-fixed-info" v-if="cityFixed">
      <div class="city-tips">
        <h4>关于 {{cityInfo.des_name}}</h4>
        <div class="city-tips-desc">
          <div class="city-tips-desc-text">
            <p v-html="cityInfo.des_info"></p>
          </div>
          <!--            <div class="city-tips-map"></div>-->
        </div>
        <div class="city-local-weather" v-show="weatherCFList">
          <h4>当地天气
            <div class="city-weather-c">
              <span :class="{'active':weatherCF=='F'}" @click="weatherCF='F'">°F</span>
              <span :class="{'active':weatherCF=='C'}" @click="weatherCF='C'">°C</span>
            </div>
          </h4>
          <ul>
            <li v-for="item in weatherCFList" :key="item.weather">
              <p>{{item.title}}</p>
              <p class="city-local-weather-temp">
                <span>{{item.weather}}°</span>
              </p>
            </li>

          </ul>

        </div>

        <div class="city-local-info">
          <h2>实用信息</h2>
          <ul class="city-info-ul">
            <li v-for="(val,key,i) in useFulInfo">
              <p>{{key}}</p>
              <span v-for="item in val">{{item}}</span>
            </li>
            <!--              <li>-->
            <!--                <p>时区</p>-->
            <!--                <span>GMT +08:00</span>-->
            <!--                <p>没有时差</p>-->
            <!--                <span>GMT +08:00</span>-->
            <!--              </li>-->
          </ul>
        </div>

      </div>
      <i class="fa fa-close" @click="cityFixed = !cityFixed"></i>
    </div>
  </div>


</template>

<script>
    export default {
        name: "cityBox",
        data() {
            return {
                cityFixed: false,
                weatherCF: 'C',
                useFulInfo: {},
                categorylist: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5},
                    {id: 6},
                    {id: 7},
                    {id: 8},
                    {id: 9},
                    {id: 10},
                    {id: 11},
                    {id: 12},
                    {id: 13},
                    {id: 14},
                    {id: 15}
                ],
                cityCatelist: [],
                cityInfo: {},
                cityStrategyList: [],
                //附件目的地
                nearDestinationList: [],
                hotGoodsList: [],
                currentPage: 1,
                cityTag: false,
                currentPage4: 4,
                cityWeather: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4}
                ],
                cityAddress: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5},
                    {id: 6},
                    {id: 7},
                ],
                value1: '',
                swiperOne: {
                    slidesPerView: 7,
                    spaceBetween: 4,
                    freeMode: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                },
                swiperTwo: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: '.city-hot1 .swiper-button-next',
                        prevEl: '.city-hot1 .swiper-button-prev',
                    },
                },
                swiperThree: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: '.city-exper .swiper-button-next',
                        prevEl: '.city-exper .swiper-button-prev',
                    },
                },
                swiperFore: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: '.city-address-items .swiper-button-next',
                        prevEl: '.city-address-items .swiper-button-prev',
                    },
                }
            }
        },
        created() {
            this.getCityIndex(this.$route.params.id)
        },
        computed: {
            weatherCFList() {
                if (this.weatherCF == 'F') {
                    return this.cityInfo.des_weather_f_list
                } else {
                    return this.cityInfo.des_weather_c_list
                }
            }
        },
        methods: {
            getCityIndex(id) {
                this.$http.get('api/index/city_index/city/' + id).then(resu => {
                    if (resu.data.code = 200) {
                        this.cityCatelist = resu.data.data.cate_list
                        this.cityInfo = resu.data.data.city_info
                        this.hotGoodsList = resu.data.data.hot_goods_list.list
                        this.cityStrategyList = resu.data.data.goods_strategy_list
                        this.nearDestinationList = resu.data.data.near_destination_list
                        this.useFulInfo = this.cityInfo.des_useful_info
                        console.log(this.useFulInfo);
                        console.log(resu.data);
                    }

                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },

            getScrolltopNum() {
                let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                if (top > 320) {
                    this.cityTag = true;

                    this.$refs.cityMain.style.marginTop = '120px'

                } else {
                    this.cityTag = false
                    this.$refs.cityMain.style.marginTop = '0'
                }
            }

        },
        mounted() {
            window.addEventListener('scroll', this.getScrolltopNum)
            console.log(this.$route.params)
        }
    }
</script>

<style scoped>
  @import "../../lib/css/city.css";


</style>
