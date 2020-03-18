import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    state: { //vuex 的使用
        city: '',
        hot: [],
    }
})

export default store