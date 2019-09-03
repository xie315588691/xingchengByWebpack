<template>
  <!--                右侧-->
  <div class="personal-main-right">
    <div class="personal-right-top">
      <div class="empty-img"></div>
      <p>下一站去哪？请选择您的心仪目的地立即预订吧！</p>
      <a class="personal-index" href="/index.html">返回首页</a>

    </div>

    <div class="personal-right-bottom">
      <h1>热门目的地</h1>
      <ul>
        <li v-for="item in personalOtherList" :key="item.id" :style="{backgroundImage: 'url(' +item.img + ')'}">
          <router-link :to="'/country/'+item.des_code">{{item.des_name}}</router-link>
        </li>

      </ul>
      <div>探索全部目的地</div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "personalBox",
        data() {
            return {
                personalList: [],
                personalOtherList: []
            }
        },
        created() {
            this.getPersonalIndex()
        },
        methods: {
            getPersonalIndex() {
                this.$http.get('api/index/personal_center/5').then(resu => {
                    if (resu.data.code == 200) {
                        this.personalOtherList = resu.data.data.destination_list
                        console.log(this.personalOtherList);
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
