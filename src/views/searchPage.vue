<template>
  <div>
    <div class="lk-layout">
      <h1 class="search-body-title">以下是与“美食”相关的体验</h1>
      <div class="search-body">
        <div class="search-body-left" ref="searchBody">
          <div :class="{'search-left-category':true, 'search-left-category-fixed':searchScrollTag}">
            <h2>活动分类</h2>
            <div class="search-left-tree">
              <el-tree
                :data="data"
                show-checkbox
                node-key="id"
                :default-expanded-keys="[1]"
                :default-checked-keys=checkedKeys
                :props="defaultProps">
              </el-tree>
            </div>

          </div>
        </div>
        <div class="search-body-right">
          <h3>找到45个活动</h3>
          <div>
            <ul class="search-right-items">
              <li class="add-active-body">
                <a href="#">
                  <div class="active-img">
                    <i class="fa fa-map-marker"></i>
                    JR 列车
                  </div>
                  <div class="active-body-b">
                    <h3>JR PASS 全日本铁路通票（7 / 14 / 21日）</h3>
                    <p><span>★  4.8 &nbsp;&nbsp;</span>(6,978条评价) | 142K 人参加过</p>
                    <div>
                      <p class="old-price">￥ 91</p>
                      <p class="active-money">￥ 1,838 <i class="fa fa-flash"></i></p>
                      <p class="active-time">最早可预订日期：2019年8月13日</p>
                    </div>
                  </div>
                </a>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>

            <div class="search-pagination">
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

          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "searchPage",
        data() {
            return {
                currentPage: 2,
                data: [{
                    id: 1,
                    label: '星程旅游',
                    children: [{
                        id: 11,
                        label: '景点门票 & 表演'
                    }, {
                        id: 12,
                        label: '一日游 & 小团游'
                    }, {
                        id: 13,
                        label: '特色活动 & 体验'
                    }, {
                        id: 14,
                        label: '地道美食'
                    }, {
                        id: 15,
                        label: '当地交通 & 旅行服务'
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                checkedKeys: [],
                searchScrollTag: false
            }
        },
        created() {

        },
        methods: {
            getSearchIndex() {

            },
            getScrolltopNum() {
                let cc = document.body.clientHeight - document.querySelector('footer').offsetHeight
                let left = document.querySelector(".search-left-tree").offsetHeight

                console.log(cc + "===" + left);
                let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
                if (top > 132) {
                    this.searchScrollTag = true;
                    if (top > cc - left - 150) {
                        this.searchScrollTag = false;
                    }

                } else {
                    this.searchScrollTag = false;
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        mounted() {
            window.addEventListener('scroll', this.getScrolltopNum)
        }
    }
</script>

<style scoped>
  @import "../../lib/css/search.css";


</style>
