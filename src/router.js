import Vue from 'vue'
import Router from 'vue-router'

import mainBox from "./main.vue";

import indexBox from './views/indexBox.vue'
import cityBox from "./views/cityBox.vue"
import youjibox from './views/youji.vue'
import countryBox from "./views/countryBox.vue";
import productBox from "./views/product.vue";
import searchPage from "./views/searchPage.vue";
import adminBox from "./admin/adminBox.vue";
import aboutBox from "./views/aboutBox.vue";
import addToCar from "./views/addToCar.vue";
import shoppingCar from "./views/shoppingCar.vue";

import personalBox from "./admin/personalBox.vue";
import orderBox from "./admin/orderBox.vue";

import loginBox from "./views/loginBox.vue";
import registerBox from "./views/registerBox.vue";
import reviewBox from "./admin/reviewBox.vue";
import wishBox from "./admin/wishBox.vue";
import settingBox from "./admin/settingBox.vue";

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/',
      component: mainBox,
      children: [
        {
          path: '/index',
          component: indexBox
        }, {
          path: '/city/:id',
          component: cityBox,
        }, {
          path: '/youji/:id',
          component: youjibox
        }, {
          path: '/country/:id',
          component: countryBox
        }, {
          path: '/product/:id',
          component: productBox
        }, {
          path: '/search',
          component: searchPage
        },
        {
          path: '/about',
          component: aboutBox
        },
        {
          path: '/admin/',
          redirect: '/admin/personal'
        }, {
          path: '/admin',
          component: adminBox,
          children: [
            {
              path: '/admin/personal',
              component: personalBox
            },
            {
              path: '/admin/order',
              component: orderBox
            },
            {
              path: '/admin/review',
              component: reviewBox
            },
            {
              path: '/admin/wish',
              component: wishBox
            }, {
              path: '/admin/setting',
              component: settingBox
            }

          ]
        }, {
          path: '/toCar',
          component: addToCar
        }, {
          path: '/shoppingCar',
          component: shoppingCar

        }

      ]
    }, {
      path: '/login',
      component: loginBox
    }, {
      path: '/register',
      component: registerBox
    }

  ],
  linkActiveClass: 'active'

})
