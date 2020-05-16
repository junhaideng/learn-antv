import Vue from 'vue'
import App from './App.vue'
import Antv from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import router from "./router/index"
import VueRouter from 'vue-router'
import "./mock/index"
import axios from 'axios'
import G2 from "@antv/g2"

Vue.use(G2)

Vue.prototype.$axios = axios

Vue.use(VueRouter)

Vue.use(Antv)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
