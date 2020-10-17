import Vue from 'vue'
import App from '../src/App.vue'
import router from '../src/router/index.js'
import store from '../src/store/index.js'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')