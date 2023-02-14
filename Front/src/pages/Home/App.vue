<template>
  <div id="app">
    <NavBar actual-page="home" />
    <GraphContainer></GraphContainer>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import NavBar from './../../components/NavBar.vue'
import FooterBar from './../../components/FooterBar.vue'
import GraphContainer from './../../components/GraphContainer.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    GraphContainer
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
