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
    },
    subN(state,step){
        state.count -= step
    }
};
const actions = {
    addAsync(context){
        setTimeout(() => {
            context.commit('add',3)
            console.log('niaho')
        }, 1000);
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions
})
