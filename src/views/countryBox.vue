<template>
  <div>
    <div class="city-banner-fixed" v-show="cityTag">
      <div class="city-banner-fixed-t">
        <div class="city-layout">
          <h1>{{countryInfo.des_name}}</h1>
        </div>
      </div>

      <div class="city-banner-fixed-b">
        <div class="city-layout">
          <ul>
            <li v-for="item in cateList" :key="item.id" @click="navId = item.id">
              <a href="#" :class="{'active':navId==item.id}">{{item.cat_name}}</a>
            </li>

          </ul>
        </div>
      </div>
    </div>
    <!--城市背景图-->
    <div class="city-banner">
      <div class="country-banner-filter">
        <div class="country-banner-addr city-layout">

          <div class="country-banner-left">
            <span>切换目的地</span>
            <h1>{{countryInfo.des_name}}</h1>
            <p>
              {{countryInfo.des_tag}}
            </p>
            <a href="#">查看更多</a>
          </div>
          <div class="country-banner-right">
            <div class="swiper-container">
              <swiper :options="swiperTwo" ref="mySwiper" @someSwiperEvent="callback">
                <!-- slides -->
                <swiper-slide v-for="item in cityList" :key="item.id">
                  <a href="#" class="country-banner-img-item" :style="{backgroundImage: 'url(' +item.img + ')'}">
                    <div class="bgcBack">
                      <h3>{{item.des_name}}</h3>
                    </div>
                  </a>
                </swiper-slide>

              </swiper>

            </div>
            <div class="swiper-button-next swiper-button-black"></div>
            <div class="swiper-button-prev swiper-button-black"></div>

          </div>

        </div>
      </div>
    </div>
    <!--搜索-->
    <div class="city-search">
      <div class="city-layout">
        <div class="city-search-menu">
          <div class="swiper-container">
            <swiper :options="swiperOne" ref="mySwiperOne">
              <!-- slides -->
              <swiper-slide v-for="item in cateList" :key="item.id" @click.stop="navId = item.id">
                <a href="#" :class="{'active':navId==item.id}">
                  <i :style="{backgroundImage: 'url(' +item.img + ')'}"></i>
                  <p>{{item.cat_name}}</p>
                </a>
              </swiper-slide>
              <!-- Optional controls -->
            </swiper>

          </div>
        </div>
      </div>
    </div>

    <div class="city-main">
      <div class="city-layout">
        <!--        广告1-->
        <h2>探索{{countryInfo.des_name}}的城市</h2>
        <div v-for="item in cityList" :key="item.id">
          <h3 class="country-title">
            {{item.des_name}}
          </h3>
          <div class="country-like-info">
            <div class="city-guide-tag">
              <span class="t_green">不容错过：</span>
              <span class="tags" v-for="itag in item.des_tag_list">{{ itag }}</span>
            </div>
            <router-link :to="'/city/'+item.des_code">
              探索{{item.des_name}}
            </router-link>
          </div>
          <div class="city-hot1 country-hot1">

            <div class="country-slide" v-for="(slide,i) in item.goods_list.list" :key="slide.id">
              <div class="city-hot1-t" :style="{backgroundImage: 'url(' +slide.goods_image + ')'}">
                <i class="fa fa-video-camera"></i>
                <span>46% OFF</span>
              </div>
              <div class="city-hot1-b active-body-b">
                <h3>{{slide.goods_name}}</h3>
                <p><span>★  {{slide.goods_star}} &nbsp;&nbsp;</span>({{slide.comment_count}}条评价) |
                  {{slide.goods_sold_count}} 人参加过</p>
                <div>
                  <p class="active-money">￥ {{slide.converter_goods_price}} <i class="fa fa-flash"></i></p>
                  <p class="active-time">最早可预订日期：{{slide.near_sell_date}}</p>
                </div>
              </div>
              <em>
                <b class="fa fa-star"></b>
                <p>{{i+1}}</p>
              </em>
            </div>

          </div>
        </div>


        <h2>{{countryInfo.des_name}}当地玩乐</h2>
        <div class="city-local">
          <div class="city-local-body">
            <div class="city-local-body-item" v-for="item in countryPage.list" :key="item.id">
              <router-link :to="'/product/'+item.id">
                <div class="city-body-item-t" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
                  <!--                  <i class="fa fa-video-camera"></i>-->
                  <span>38% OFF</span>
                </div>
                <div class="city-body-item-b">
                  <div class="them-body-descr">
                    <h3>{{item.goods_name}}</h3>
                    <p class="lk-grade"><span>★  {{item.goods_star}} &nbsp;&nbsp;</span>({{item.comment_count}}条评价) |
                      {{item.goods_sold_count}} 人参加过</p>
                    <div>
                      <p class="active-old" v-show="item.converter_goods_original_price">￥
                        {{item.converter_goods_original_price}}</p>
                      <p class="active-new">￥ {{item.converter_goods_price}} <i class="fa fa-flash"></i> <span>最早可预订日期：{{item.near_sell_date}}</span>
                      </p>
                    </div>
                    <i class="theme-body-hot">
                      <span> 热门</span>
                    </i>
                  </div>
                </div>
              </router-link>

            </div>
            <div class="city-local-pagination">
              <div class="block" v-show="countryPage.count">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[15, 20]"
                  :page-size="20"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="countryPage.count">
                </el-pagination>
              </div>
            </div>

          </div>

        </div>
        <h2>旅行贴士</h2>
        <div class="city-tips">
          <h4>关于 {{countryInfo.des_name}}

          </h4>
          <div class="city-tips-desc">
            <div class="city-tips-desc-text" v-html="countryInfo.des_info">

              <p>谈到这座城市的代表建筑，台北101你绝对不能错过，它是世界上最高的建筑之一，登上91楼可以饱览整个城市美景。</p>
            </div>
            <div class="city-tips-map" id="dituContent"></div>
          </div>
          <div class="city-local-weather">
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
            <h2>实用信息

            </h2>
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
              <swiper :options="swiperThree" ref="mySwiperThree">
                <!-- slides -->
                <swiper-slide v-for="item in nearAddr" :key="item.id">
                  <!--                  <div class="bgcBack">-->
                  <!--                  <router-link :to="'/country/'+item.des_code" :style="{backgroundImage: 'url(' +item.img + ')'}">-->
                  <!--                    <h4>{{item.des_name}}</h4>-->
                  <!--                  </router-link>-->

                  <a href="#" @click.prevent="goToOtherCountry(item.des_code)"
                     :style="{backgroundImage: 'url(' +item.img + ')'}">
                    <h4>{{item.des_name}}</h4>
                  </a>
                  <!--                  </div>-->
                </swiper-slide>

              </swiper>
            </div>
          </div>
        </div>

      </div>

    </div>



  </div>

</template>

<script>
    export default {
        name: "countryBox",
        data() {
            return {
                weatherCF: 'C',
                category: false,
                useFulInfo: {},
                navId: '1',
                countryId: this.$route.params.id,

                currentPage: 2,
                cityTag: false,
                value1: '',
                swiperOne: {
                    slidesPerView: 7,
                    spaceBetween: 4,
                    freeMode: true,
                },
                swiperTwo: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: '.country-banner-right .swiper-button-next',
                        prevEl: '.country-banner-right .swiper-button-prev',
                    },
                },
                swiperThree: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: '.city-address-items .swiper-button-next',
                        prevEl: '.city-address-items .swiper-button-prev',
                    },
                },
                countryInfo: {},
                cityList: [],
                nearAddr: [],
                cateList: [],
                countryPage: {},
                countryQuery: {
                    country: this.$route.params.id,
                    page: 1,
                    page_size: 12,

                }
            }
        },
        created() {
            this.getCountryIndex(this.countryId);
            this.getCountryPage(this.countryId)
        },
        computed: {
            weatherCFList() {
                if (this.weatherCF == 'F') {
                    return this.countryInfo.des_weather_f_list
                } else {
                    return this.countryInfo.des_weather_c_list
                }
            }
        },
        methods: {
            getCountryIndex(id) {
                this.$http.get('api/index/country_index/country/' + id).then(resu => {
                    if (resu.data.code == 200) {
                        this.countryInfo = resu.data.data.country_info
                        this.cityList = resu.data.data.city_list
                        this.nearAddr = resu.data.data.near_destination_list
                        this.useFulInfo = this.countryInfo.des_useful_info
                        this.cateList = resu.data.data.cate_list
                        // console.log(this.cateList);
                        // console.log(resu.data.data);
                    }
                })
            },
            getCountryPage(id) {
                this.$http.get('http://starway.hzclouds.com/api/index/get_page_goods_list/country/' + id).then(resu => {
                    // console.log(resu);
                    if (resu.data.code == 200) {
                        this.countryPage = resu.data.data.list
                        console.log(this.countryPage)
                        console.log(id);
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
                    const aa = document.querySelector('.city-main').style.marginTop = '120px'
                } else {
                    this.cityTag = false
                    document.querySelector('.city-main').style.marginTop = '0'
                }
            },
            goToOtherCountry(code) {
                this.$router.push('/country/' + code)
                this.getCountryIndex(code)
                this.getCountryPage(code)
            },


        },
        mounted() {
            window.addEventListener('scroll', this.getScrolltopNum)
        }
    }
</script>

<style >
  @import "../../lib/css/city.css";

  .country-banner-right h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    color: #fff;
    position: absolute;
    bottom: 17px;
    left: 12px;
  }

  .bgcBack {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
  }


</style>
