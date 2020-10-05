<template>
  <div id="app">
    <Search/>
    <Loading v-if="showProgressIndicator == true" />
    <List/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'
import Loading from './components/Loading.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Search,
    List,
    Loading
  },

  data() {
    return {
        showProgressIndicator: false
    }
  },

  computed: {
    ...mapGetters(['isLoading'])
  },

  watch: {
    isLoading(val) {
        this.showProgressIndicator = val
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
