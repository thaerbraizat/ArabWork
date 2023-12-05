<template>
  <div>
    <navbar-nav />
    <div id="app">

      <div v-if="getQuerying">
        <common-loading />
      </div>
      <List />
      <Map />

    </div>

  </div>
</template>

<script>

import List from './components/list.vue';
import Map from './components/map.vue';

export default {
  name: 'App',
  components: {
    List,
    Map,
  },
  computed: {
    getQuerying() {
      return this.$store.getters.getQuerying;
    },
  },
  mounted() {
    console.log(this.$store);
  },



}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {

  display: flex;
  justify-content: space-between;
}
</style>
