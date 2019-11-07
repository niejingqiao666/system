import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';

import vuelidate from 'vuelidate';

Vue.use(vuelidate);

import '../../assets/reset.min.css';
import '../../assets/iconfont/iconfont.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');