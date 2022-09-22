<template>
  <div>
    <h3>当前最新的count值为：{{count}}</h3>
    <button @click="sub1">-1</button>
    <button @click="subN1">-N</button>
  </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'

  export default{
    data(){
      return{};
    },
    computed:{
      ...mapState(['count'])
    },
    methods:{
      ...mapMutations(['sub','subN']),
      sub1(){
        this.sub()
      },
      subN1(){
        this.subN(3)
      }
    }
  }
</script>