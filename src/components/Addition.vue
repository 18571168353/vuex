<template>
  <div>
    <!-- <h3>当前最新的count值为:{{ $store.state.count }}</h3> -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnHandle1">+1</button>
    <button @click="btnHandle2">+N</button>
    <button @click="btnHandle3">+1 Async</button>
    <button @click="btnHandle4">+N Async</button>
    <button
      @click="
        $store.commit({
          type: 'addCount',
          num: 5,
          count: 8
        })
      "
    >
      +num
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    btnHandle1() {
      this.$store.commit('add')
    },
    btnHandle2() {
      // commit的作用,就是强调某个mutation函数
      this.$store.commit('addN', 3)
    },
    btnHandle3(){
      // 异步的让count自增+1
      // 这里的dispatch函数,专门用来触发action
      this.$store.dispatch('addAsync')
    },
     btnHandle4(){
      this.$store.dispatch('addNAsync',5)
    }
  }
}
</script>
