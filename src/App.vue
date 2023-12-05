<template>
  <div>
    <b-overlay :show="getQuerying" rounded="sm">
    <navbar-nav />
    <div id="app">
      <List />
      <Map />
    </div>
  </b-overlay>
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
