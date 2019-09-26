import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    baseUrl:'http://192.168.195.1:8080/car/server/api/app'
  }
})
export default store;
