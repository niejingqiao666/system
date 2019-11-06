import Vue from 'vue';
import App from './App.vue';
import vuelidate from 'vuelidate';

Vue.use(vuelidate);


import '../../assets/reset.min.css';

new Vue({
    render: h=>h(App)
}).$mount('#app');