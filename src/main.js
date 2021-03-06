import Vue from 'vue'
import App from './App.vue'
import '@/plugins/axios'
import vuetify from '@/plugins/vuetify'
import { store } from '@/store'

Vue.config.productionTip = false
Vue.use({ vuetify })

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app')
