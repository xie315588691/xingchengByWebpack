<template>
  <!--header-->

  <header :class="{'header-fixed':scrollTag}">
    <div class="header-logo">
      <a href="/">星程</a>
    </div>
    <div class="header-search">
      <input type="text" placeholder="搜索全球目的地 / 活动">
      <i class="fa fa-search"></i>
    </div>
    <div class="header-right">
      <ul class="header-menu">
        <li>
          <a href="javascript:void(0);">繁体中文</a>
        </li>
        <li>
          <a href="#">CNY
            <i class="fa fa-angle-down "></i>
          </a>
          <div class="head-moneys">
            <div class="moneys-t">
              <ul class="money-items">
                <li v-for="item in countryList" :key="item.option_code" @click="moneys=item.option_code">
                  <a href="#" :class="{'active':moneys==item.option_code}"><span
                    class="gray">{{item.option_code}}</span>{{item.option_name}}</a>
                </li>
              </ul>
              <span>推荐使用货币</span>
            </div>

          </div>
        </li>
        <li><a href="#">APP下载</a></li>
        <li><a href="#">幫助中心</a></li>
        <li><a href="#">最近浏览<i class="fa fa-angle-down "></i></a>
          <div class="head-history">
            <ul>
              <li><a href="#">
                <img src="../../lib/images/his1.jpg" alt="">
                <div>
                  <h3>越南下龙湾一日游</h3>
                  <p><span>★ 4.4</span> (1,622条评价)|22K 人参加过</p>
                  <p>¥ 304</p>
                  <p>¥ 247<i class="fa fa-flash"></i></p>
                  <p>最早可預訂日期：今日</p>
                </div>
              </a></li>
              <li><a href="#">
                <img src="../../lib/images/his1.jpg" alt="">
                <div>
                  <h3>越南下龙湾一日游</h3>
                  <p><span>★ 4.4</span> (1,622条评价)|22K 人参加过</p>
                  <p>¥ 304</p>
                  <p>¥ 247<i class="fa fa-flash"></i></p>
                  <p>最早可預訂日期：今日</p>
                </div>
              </a></li>
              <li><a href="#">
                <img src="../../lib/images/his1.jpg" alt="">
                <div>
                  <h3>越南下龙湾一日游</h3>
                  <p><span>★ 4.4</span> (1,622条评价)|22K 人参加过</p>
                  <p>¥ 304</p>
                  <p>¥ 247<i class="fa fa-flash"></i></p>
                  <p>最早可預訂日期：今日</p>
                </div>
              </a></li>
              <li><a href="#">
                <img src="../../lib/images/his1.jpg" alt="">
                <div>
                  <h3>越南下龙湾一日游</h3>
                  <p><span>★ 4.4</span> (1,622条评价)|22K 人参加过</p>
                  <p>¥ 304</p>
                  <p>¥ 247<i class="fa fa-flash"></i></p>
                  <p>最早可預訂日期：今日</p>
                </div>
              </a></li>
            </ul>

          </div>
          <i class="history-arrow"></i>
        </li>
        <li><a href="#">
          <em class="fa fa-shopping-cart"></em>
        </a></li>
        <li>
          <router-link to="/login">登录 / 注册</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
    export default {
        name: "xchead",
        data() {
            return {
                scrollTag: false,
                countryList: [],
                moneys: window.localStorage.getItem("xingChengCurrency") || 'HKD'
            }
        },
        created() {
            this.getHeader()
        },
        computed: {},
        watch: {
            moneys: {
                handler: function (val, oldVal) {
                    window.localStorage.setItem('xingChengCurrency', val)
                    console.log(val + "------" + oldVal);
                },
                deep: true//深度监视
            }
        },
        methods: {
            getHeader() {
                this.$http.get('api/index/index').then(resu => {
                    if (resu.data.code == 200) {
                        const result = resu.data.data
                        this.countryList = result.currency_list
                    }
                })
            },
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
            if (this.$route.path == '/index') {
                window.addEventListener('scroll', this.getScrolltopNum)
            }


        }

    }
</script>

<style>
  .money-items li a.active {
    color: #ff5722;
    font-weight: 700;
  }

  .money-items li a:hover {
    background-color: #efefef;
  }

  .money-items li .active .gray {
    color: #ff5722;
    font-weight: 700;
  }
</style>
