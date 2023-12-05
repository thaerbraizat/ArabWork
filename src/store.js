import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    querying:false,
    location:{ lat: 31.958090, lng:35.945808},
};

const mutations = {
   QUERYING(state, payload) {
    state.querying=payload;
  },
  LOCATION(state, payload) {
    console.log("paload", payload);
    state.location=payload;
  }
};

const actions = {
  changeQuerying(context, value) {
    context.commit("QUERYING", value);
  },
  setLocation(context, value) {
    context.commit("LOCATION", value);
  }
};

const getters = {
  getQuerying(state) {
    return state.querying;
  },
  getLocations(state) {
    return state.location;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
