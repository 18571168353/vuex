import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    addCount(state, { num, count }) {
      console.log(count)
      state.count = state.count + num
    },
    subCountN(state, step) {
      state.count -= step
    },
    subCount(state) {
      state.count--
    }
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在actions中,不能直接修改state中的数据;
        // 必须通过context.commit()触发某个mutation才行
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('subCount')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subCountN', step)
      }, 1000)
    }
  },
  getters:{
    showNum(state){
      return '当前最新的数量是['+ state.count +']'
    }
  },
  modules: {}
})
