import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    count:0
};
const mutations = {
    add(state,step){
        state.count+=step
    },
    sub(state){
        state.count--
    }
};
const actions = {};
export default new Vuex.Store({
    state,
    mutations,
    actions
})
