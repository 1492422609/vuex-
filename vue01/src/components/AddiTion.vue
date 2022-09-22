<template>
  <div>
    <h3>当前最新的count值为：{{$store.state.count}}</h3>
    <button @click="add">+1</button>
    <button @click="add3">+3</button>
  </div>
</template>
<script>
  export default{
    data(){
      return{};
    },
    methods:{
      add(){
        this.$store.commit('add',1)
      },
      add3(){
        this.$store.commit('add',3)
      }
    }
  }
</script>