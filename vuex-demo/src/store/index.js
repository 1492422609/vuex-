import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    inputValue:'aaa',
    nextId:5
  },
  getters: {
  },
  mutations: {
    initList(state,list){
      state.list = list
    },
    setInputValue(state,inputValue){
      state.inputValue = inputValue
      console.log(inputValue)
    },
    addItem(state){
      const obj = {
        id: state.nextId,
        info:state.inputValue.trim(),
        done:'false',
      }
      state.list.push(obj)
      state.nextId++
      state.inputValue = ''
    }
  },
  actions: {
    getList(context){
      axios.get('/list.json').then(({data})=>{
        context.commit('initList',data)
      })
    }
  },
  modules: {
  }
})
