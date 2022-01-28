import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },

  router,
  render: h => h(App)
}).$mount('#app')
