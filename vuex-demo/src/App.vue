<template>
  <div id='app'>
    <a-input placeholder='请输入任务' class='my_ipt' 
    :value='inputValue' @change="handleInputChange" />
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <a-list bordered :dataSource="infolist" class="dt_list">
      <a-list-item slot='renderItem' slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked="item.done" @change="(e) => {cbStautsChanged(e,item.id)}">{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="removeItemById(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div class="footer" slot="footer">
        <span>{{unDoneLength}}条剩余</span>
        <a-button-group>
          <a-button :type="viewkey === 'all' ? 'primary' : 'default' " @click="changeList('all')">全部</a-button>
          <a-button :type="viewkey === 'unDone' ? 'primary' : 'default' " @click="changeList('unDone')">未完成</a-button>
          <a-button :type="viewkey === 'done' ? 'primary' : 'default' " @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <a @click="clean">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  computed:{
    ...mapState(['inputValue','viewkey']),
    ...mapGetters(['unDoneLength','infolist'])
  },
  methods:{
    handleInputChange(e){
      this.$store.commit('setInputValue',e.target.value)
    },
    addItemToList(){
      if(this.inputValue.trim().length<=0){
        return this.$message.warning('有问题')
      }this.$store.commit('addItem')
    },
    removeItemById(id){
      this.$store.commit('removeItem',id)
    },
    // 监听复选框状态变化
    cbStautsChanged(e,id){
      const params = {
        id : id,
        status : e.target.checked
      }
      this.$store.commit('statusChanged',params)
    },
    clean(){
      this.$store.commit('cleanDone')
    },
    changeList(key){
      this.$store.commit('changeViewkey',key)
      console.log(key)
    }
  }
}
</script>
<style scoped>
#app {
  padding: 10px;
}
.my_ipt {
  width: 500px;
  margin-right: 10px;
}
.dt_list {
  width: 500px;
  margin-top: 10px;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
