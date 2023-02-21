<template>
  <div id="app">
    <NavBar actual-page="home" />

    <h1 id="title">RASPBERRY WEATHER 974</h1>
        <router-link to="/about">Home</router-link> |


    <div class="flexRow container">
      <MDBBtn @click="goToHome()" class="button" color="danger" rounded>See live data</MDBBtn>
      <MDBBtn @click="archive" class="button" color="primary" rounded>See archive data</MDBBtn>
    </div>

    <FooterBar></FooterBar>
  </div>
</template>

<script>
import NavBar from './../../components/NavBar.vue'
import FooterBar from './../../components/FooterBar.vue'

import { MDBBtn } from 'mdb-vue-ui-kit';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    MDBBtn
  },
  methods: {
    goToHome() {
      console.log(this.$router)
      this.$router.push('/live');
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

#title {
  padding: 20px;
}

.flexColumn {
    display: flex;
    flex-direction: column;
}

.flexRow {
    display: flex;
    flex-direction: row;
}

.center {
    align-items: center;
    justify-content: center;
}

.container {
    width: 100%;
    min-width: 100%;
    margin: 0;
    padding: 0;
    justify-content: space-evenly;
}

.button {
  width: 200px;
}
</style>
