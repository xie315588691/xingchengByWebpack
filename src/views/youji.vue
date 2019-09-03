<template>
  <div>
    <div class="youji-banner" :style="{backgroundImage: 'url(' +youjiInfo.title_img + ')'}">
      <div class="youji-banner-title">
        <h1> {{youjiInfo.title}}</h1>
        <p>{{youjiInfo.create_date}}</p>
      </div>
    </div>
    <!--    body-->
    <div class="layout-container" >
      <div class="youji-title">首页&nbsp;<i></i> &nbsp;&nbsp;<span> {{youjiInfo.title}}</span></div>
      <div class="youji-body" v-html="youjiInfo.content">


      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "youji",
        data() {
            return {
                id: this.$route.params.id,
                youjiInfo: {}

            }
        },
        created() {
            this.getYouJiIndex()
        },
        methods: {
            getYouJiIndex() {
                this.$http.get('http://starway.hzclouds.com/api/index/get_strategy_detail/id/' + this.id).then(resu => {
                    if (resu.data.code == 200) {
                        console.log(resu.data.data);
                        this.youjiInfo = resu.data.data.list
                        console.log(this.youjiInfo);
                    }
                })
            }
        }
    }
</script>

<style scoped>
  @import "../../lib/css/youji.css";

</style>
