<template>
  <div>
    <!--      轮播图-->
    <div class="banner">
      <ul class="banner">
        <li :style="{backgroundImage: 'url(' +item.img + ')'}" v-for="(item,index) in bannerImgs"
            :key="item.img" v-show="bannerIndex==index"></li>
      </ul>
      <div class="banner-container">
        <h1>一天游 一樣有要求</h1>

        <div class="banner-search">
          <div class="banner-search-top">
            <input type="text" v-model="searchObj" placeholder="輸入城市、景點、活動行程、門票......"/>
            <button @click="getToSearch"><i class="fa fa-search"></i></button>
          </div>

        </div>
      </div>
    </div>

    <!--目的地-->
    <div class="lk-addr">
      <div class="lk-layout">
        <!--        热门目的地-->
        <div class="addr-hot mg">
          <div class="addr-hot-title">
            <h2>·熱門目的地·</h2>
            <p>發現當地最酷炫的道地玩法</p>
          </div>
          <div class="addr-hot-body">
            <div class="swiper-container">
              <swiper :options="swiperOptionOne">
                <!-- slidesdes_code -->
                <swiper-slide v-for="item in countryIndex" :key="item.id">
                  <router-link :style="{backgroundImage: 'url(' +item.img + ')'}"
                               :to="'/country/'+item.des_code">{{ item.des_name}}
                  </router-link>
                </swiper-slide>
                <!-- Optional controls -->

              </swiper>

            </div>
            <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
            <a href="#" class="addr-hot-all borders borderf"><i class="fa fa-map-marker"></i> 探索全部目的地</a>
          </div>
        </div>
        <!--        热卖活动-->
        <div class="addr-hot-active mg">
          <div class="addr-hot-title">
            <h2>·{{popActivities.title}}·</h2>
            <p>{{popActivities.sub_title}}</p>
          </div>

          <div class="add-active-body">
            <div class="my-swiper-4">
              <div class="swiper-container">

                <swiper :options="swiperOption" ref="mySwiper">
                  <!-- slides -->
                  <swiper-slide v-for="item in moodlist" :key="item.id">
                    <router-link :to="'/product/'+item.id">
                      <div class="active-img" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
                        <i class="fa fa-map-marker"></i>
                        {{item.country_name_str}}.{{item.tour_main_city_str}}
                      </div>
                      <div class="active-body-b">
                        <h3>{{ item.goods_name}}</h3>
                        <p><span>★  {{item.goods_star}} &nbsp;&nbsp;</span>({{item.comment_count}}条评价) |
                          {{item.goods_sold_count}} 人参加过</p>
                        <div>
                          <p class="active-money">￥ {{item.converter_goods_price}} <i class="fa fa-flash"></i></p>
                          <p class="active-time">最早可预订日期：{{item.near_sell_date}}</p>
                        </div>
                      </div>
                    </router-link>
                  </swiper-slide>
                  <!-- Optional controls -->

                </swiper>

              </div>
              <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
              <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
            </div>

          </div>

        </div>
        <!--        本季优选主题-->
        <div class="lk-theme">
          <div class="addr-hot-title">
            <h2>·{{seasonThemeList.title}}·</h2>
            <p>{{seasonThemeList.sub_title}}</p>
          </div>
          <div class="theme-body">
            <div :style="{backgroundImage: 'url(' +seasonThemeList.head_img + ')'}">
              <a href="javasript:;" class="theme-body-item">
                <div>
                  <h3>悠悠夏日长</h3>
                  <p>浮潜、跳岛、水上乐园、与鲸鲨共游……悠长夏日就要无乐不玩！</p>
                  <i>查看更多</i>
                </div>
              </a>
            </div>
            <div class="theme-body-product" v-for="item in seasonThemeDataList" :key="item.id">
              <router-link :to="'/product/'+item.id">
                <div class="theme-body-img" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
                  <i class="fa fa-map-marker"></i>
                  {{item.country_name_str}}
                  <span>19% OFF</span>
                </div>
                <div class="them-body-descr">
                  <h3>{{item.goods_name}}</h3>
                  <p class="lk-grade"><span>★  {{item.goods_star}} &nbsp;&nbsp;</span>({{item.comment_count}}条评价) |
                    {{item.goods_sold_count}} 人参加过</p>
                  <div>
                    <p class="active-old">￥ 489</p>
                    <p class="active-new">￥ 394 <i class="fa fa-flash"></i> <span>最早可预订日期：{{item.near_sell_date}}</span>
                    </p>
                  </div>
                  <i class="theme-body-hot">
                    <span> 热门</span>
                  </i>
                </div>

              </router-link>

            </div>


            <div class=""></div>
          </div>
        </div>
        <!--        热卖活动-->
        <div class="addr-hot-active mg">
          <div class="addr-hot-title">
            <h2>·{{cxRecomment.title}}·</h2>
            <p>{{cxRecomment.sub_title}}</p>
          </div>

          <div class="add-active-body">
            <div class="my-swiper-4">
              <div class="swiper-container">
                <swiper :options="swiperOptionTwo" ref="mySwiper">
                  <!-- slides -->
                  <swiper-slide v-for="item in cxRecommentList" :key="item.id">
                    <router-link :to="'/product/'+item.id">
                      <div class="active-img" :style="{backgroundImage: 'url(' +item.goods_image + ')'}">
                        <i class="fa fa-map-marker"></i>
                        {{item.country_name_str}}.{{item.tour_main_city_str}}
                      </div>
                      <div class="active-body-b">
                        <h3>{{item.goods_name}}</h3>
                        <p><span>★  {{item.goods_star}} &nbsp;&nbsp;</span>({{item.comment_count}}条评价) |
                          {{item.goods_sold_count}} 人参加过</p>
                        <div>
                          <p class="active-money">￥ {{item.converter_goods_price}} <i class="fa fa-flash"></i></p>
                          <p class="active-time">最早可预订日期：{{item.near_sell_date}}</p>
                        </div>
                      </div>
                    </router-link>
                  </swiper-slide>
                </swiper>

              </div>
              <div class="swiper-button-next swiper-button-black"></div>
              <div class="swiper-button-prev swiper-button-black"></div>
            </div>

          </div>

        </div>
      </div>
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
      <!--    分享-->
      <div class="lk-show">
        <div class="lk-layout">
          <div class="show-item" style="background-image: url('../../lib/images/show-1.jpg')">
            <a href="#">
              <h5>邀请好友一起领取旅行基金</h5>
              <p>分享邀请链接给好友，注册领取HK$25 折扣！体验活动后您也会立即获得¥22.5旅行基金</p>
            </a>
          </div>
          <div class="show-item" style="background-image: url('../../lib/images/show-1.jpg')">
            <a href="#">
              <h5>邀请好友一起领取旅行基金</h5>
              <p>分享邀请链接给好友，注册领取HK$25 折扣！体验活动后您也会立即获得¥22.5旅行基金</p>
            </a>
          </div>
          <div class="show-item" style="background-image: url('../../lib/images/show-1.jpg')">
            <a href="#">
              <h5>邀请好友一起领取旅行基金</h5>
              <p>分享邀请链接给好友，注册领取HK$25 折扣！体验活动后您也会立即获得¥22.5旅行基金</p>
            </a>
          </div>
        </div>

      </div>
      <!--合作伙伴-->
      <div class="lk-brands">
        <div class="lk-layout">
          <h1>合作伙伴友情链接</h1>
          <h2>星程携手各领域合作伙伴，为您打造旅途中的专属优惠！</h2>
          <div class="partner_logo_box">
            <!-- 还有根据IP地址判断来显示功能没有,缺少citilogo -->
            <div class="partner_icon_scale"><a target="_blank" href="#">
              <i class="i_shangrila_cn"></i></a>
            </div>
            <div class="partner_icon_scale"><a target="_blank" href="#"><i
              class="i_airasia_cn"></i></a>
            </div>
            <div class="partner_icon_scale"><a target="_blank" href="#">
              <i class="i_big"></i></a>
            </div>
            <div class="partner_icon_scale">
              <a target="_blank" href="#">
                <i class="i_disney"></i>
              </a>
            </div>
            <div class="partner_icon_scale">
              <a target="_blank" href="#">
                <i data-image="i_bigbus" class="i_bigbus"></i></a>
            </div>
            <div class="partner_icon_scale">
              <a target="_blank" href="#"><i
                data-image="i_railpass" class="i_railpass"></i></a></div>
            <div class="partner_icon_scale">
              <a target="_blank" href="#"><i
                data-image="i_index_wechat_cn" class="i_index_wechat_cn"></i></a>
            </div>
            <div class="partner_icon_scale"><a target="_blank"
                                               href="#"><i
              data-image="i_guotai_cn" class="i_guotai_cn"></i></a>
            </div>
            <div class="partner_icon_scale"><a target="_blank"
                                               href="#"><i
              data-image="i_hkexpress" class="i_hkexpress"></i></a></div>
          </div>
        </div>

      </div>
      <!--    媒体-->
      <div class="lk-media">
        <div class="lk-layout">
          <h1>媒体报导</h1>
          <h2>更多的人在了解星程，每一次鼓励都让我们不断成长</h2>
          <div class="t_v_mid_box">
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_yicai"
                                                                          class="i_yicai"></i></a>
            </div>
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_36kr2"
                                                                          class="i_36kr2"></i></a>
            </div>
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_touzijie"
                                                                          class="i_touzijie"></i></a></div>
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_tencent"
                                                                          class="i_tencent"></i></a></div>
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_cnbc"
                                                                          class="i_cnbc"></i></a></div>
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_scmp2"
                                                                          class="i_scmp2"></i></a>
            </div>
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_tdn" class="i_tdn"></i></a>
            </div>
            <div class="t_v_mid"><a href="/zh-CN/news" target="_blank"><i data-image="i_wsj2"
                                                                          class="i_wsj2"></i></a></div>
          </div>
        </div>
      </div>
    </div>
    <div class="xc-video" v-if="xcVideo">
      <video src="../../lib/video/CN4_m.mp4" autoplay="{'autoplay':xcVideo}"></video>
      <i class="fa fa-close" @click="xcVideo=!xcVideo"></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexBox",
        data() {
            return {
                xcVideo: false,
                scrollTag: false,
                bannerIndex: 0,
                swiperOne: null,
                swiperNum:
                    null,
                indexObj:
                    {}
                ,
                searchObj: '',
                hotAddr:
                    [
                        {id: 1},
                        {id: 2},
                        {id: 3},
                        {id: 4},
                        {id: 5}
                    ],
                bannerImgs:
                    [],
                hotActiveList:
                    [
                        {id: 1},
                        {id: 2},
                        {id: 3},
                        {id: 7},
                        {id: 8}
                    ],
                currencyList:
                    [],
                popActivities:
                    {}
                ,
                // reQiList: [],
                countryIndex: [],
                countryList:
                    [],
                seasonThemeList:
                    {}
                ,
                seasonThemeDataList: [],
                cxRecomment:
                    {}
                ,
                cxRecommentList: {}
                ,
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween:
                        30,
                    slidesPerColumn:
                        1,
                    navigation:
                        {
                            nextEl: '.my-swiper-4 .swiper-button-next',
                            prevEl:
                                '.my-swiper-4 .swiper-button-prev',
                        }
                    ,
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide:
                            false,
                        disableOnInteraction:
                            true,
                        autoplayDisableOnInteraction:
                            false
                    }
                    ,
                }
                ,
                swiperOptionOne: {
                    slidesPerView: 5,
                    slidesPerColumn:
                        1,
                    spaceBetween:
                        30,
                    navigation:
                        {
                            nextEl: '.addr-hot-body .swiper-button-next',
                            prevEl:
                                '.addr-hot-body .swiper-button-prev',
                        }
                    ,
                    autoplay: {
                        delay: 2000,
                        stopOnLastSlide:
                            false,
                        disableOnInteraction:
                            true,
                        autoplayDisableOnInteraction:
                            false
                    }
                    ,
                }
                ,
                swiperOptionTwo: {
                    slidesPerView: 4,
                    slidesPerColumn:
                        1,
                    spaceBetween:
                        30,
                    navigation:
                        {
                            nextEl: '.my-swiper-4 .swiper-button-next',
                            prevEl:
                                '.my-swiper-4 .swiper-button-prev',
                        }
                    ,
                }
                ,
                swiperOnelist: [
                    {id: 1},
                    {id: 2},
                    {id: 3},
                    {id: 4},
                    {id: 5}
                ],
                moodlist:
                    []
            }
        },
        created() {
            this.getIndex()
        },
        methods: {
            getIndex() {
                this.$http.get('api/index/index').then(resu => {
                    if (resu.data.code == 200) {
                        const result = resu.data.data
                        this.bannerImgs = result.banner_img
                        this.countryList = result.destination_list
                        //热门季节主题
                        this.seasonThemeList = result.season_theme_list
                        this.seasonThemeDataList = this.seasonThemeList.data.list
                        this.popActivities = result.pop_activities
                        this.cxRecomment = result.quality_activities
                        this.cxRecommentList = this.cxRecomment.data.list

                        this.countryList.forEach(item => {
                            this.countryIndex.push(item.country)
                        })
                        this.moodlist = this.popActivities.data.list
                        console.log(result)
                    }
                })

            },
            getToSearch() {
                this.$router.push('/search?obj=' + this.searchObj)
            },
            // getMouseEnter() {
            //     this.swiperOne.autoplay.stop()
            //
            // },
            // getMouseLeave() {
            //     this.swiperOne.autoplay.start()
            //
            // },
            // getMouseEnterTwo() {
            //     this.swiperNum.autoplay.stop()
            //
            // },
            // getMouseLeaveTwo() {
            //     this.swiperNum.autoplay.start()
            //
            // },
            getScrolltopNum() {
                let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                if (top > 700) {
                    this.scrollTag = true;
                } else {
                    this.scrollTag = false
                }
            }
        },
        mounted() {
            setInterval(() => {
                this.bannerIndex++;
                if (this.bannerIndex == this.bannerImgs.length) {
                    this.bannerIndex = 0
                }
            }, 3000)
        }
    }
</script>

<style scoped>
  @import "../../lib/css/index.css";

</style>
