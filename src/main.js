import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.css'
import './styles/font/iconfont.css'
import * as echarts from 'echarts'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
