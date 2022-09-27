import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    inputValue:'aaa',
    nextId:5,
    viewkey:'all'
  },
  getters: {
    unDoneLength(state){
      return state.list.filter( x => x.done===false).length
    },
    infolist(state){
      if(state.viewkey == 'all'){
        return state.list
      }else if(state.viewkey == 'unDone'){
        return state.list.filter(x => x.done == false)
      }else if(state.viewkey == 'done'){
        return state.list.filter(x => x.done == true)
      }
      return state.list
    }
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
    },
    removeItem(state,id){
      //根据id查询对应索引
      const i = state.list.findIndex( x => x.id===id )
      console.log(i)
      if( i !== -1){
        state.list.splice(i,1)
      }
    },
    statusChanged(state,params){
      const i = state.list.findIndex( x => x.id===params.id)
      if(i!==-1){
        state.list[i].done = params.status
      }
    },
    cleanDone(state){
      state.list =state.list.filter(x => x.done==false)
    },
    changeViewkey(state,key){
      state.viewkey = key
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
