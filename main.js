import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

// 引入全局uView
const app = new Vue({
    ...App
})
app.$mount()
