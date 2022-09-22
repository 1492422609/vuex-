<template>
  <div>
    <h3>{{showNum}}</h3>
    <button @click="sub1">-1</button>
    <button @click="subN1">-N</button>
    <button @click="subAsync(3)">-N Async</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

  export default{
    data(){
      return{};
    },
    computed:{
      ...mapState(['count']),
      ...mapGetters(['showNum'])
    },
    methods:{
      ...mapMutations(['sub','subN']),
      ...mapActions(['subAsync']),
      sub1(){
        this.sub()
      },
      subN1(){
        this.subN(3)
      },
      // subNA(){
      //   this.subAsync(3)
      // }
    }
  }
</script>