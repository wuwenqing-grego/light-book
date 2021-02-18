import Vue from 'vue'
import Vuex from 'vuex'
import recordStore from './recordStore'
import tagStore from './tagStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    record: recordStore,
    tag: tagStore
  }
})
