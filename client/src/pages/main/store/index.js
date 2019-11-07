import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cache: [],
        searchData: []
    },
    mutations: {
        addToCache(state, payload){
            if (state.cache.map(item=>item.id).indexOf(payload.id) === -1){
                state.cache.push(payload);
            }
        },
        injection(state, payload){
            state.searchData = payload;
        }
    }

})