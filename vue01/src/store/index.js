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
    addAsync(context,step){
        setTimeout(() => {
            context.commit('add',step)
            console.log('niaho')
        }, 1000);
    },
    subAsync(context,step){
        setTimeout(() => {
            context.commit('subN',step)
        }, 1000);
    },
};
const getters = {
    showNum(state){
        return '当前最新的数量【'+state.count+'】'
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
