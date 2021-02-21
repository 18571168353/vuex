<template>
  <div>
    <!-- <h3>当前最新的count值为:{{ count }}</h3> -->
    <h3>{{showNum}}</h3>

    <!-- <h3>当前最新的count值为:{{ countAlias }}</h3>
    <h3>当前最新的count值为:{{ countState }}</h3> -->
    <button @click="subCount">-1</button>
    <button @click="subCountN(3)">-N</button>
    <button @click="subAsync">-1 Async</button>
    <button @click="subNAsync(9)">-N Async</button>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState,mapGetters } from 'vuex'
export default {
  data() {
    return {
      // localCount: 8
    }
  },
  // 1.
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },

  // 2/
  // computed:mapState(['count'])

  // 3.
  // computed: mapState({
  //   count: state => state.count
  // 4.
  // countAlias: 'count',
  // 5.
  // countState(state) {
  //   return state.count + this.localCount
  // }
  // })

  methods: {
    ...mapMutations(['subCountN', 'subCount']),
    ...mapActions(['subAsync', 'subNAsync'])
  }
}
</script>
