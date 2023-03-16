<template>
  <div id="app">
    <NavBar actual-page="home" />
    <div class="containerRow">
      <MDBCard class="card">
        <a v-mdb-ripple="{ color: 'light' }">
          <MDBCardImg src="https://mdbootstrap.com/img/new/standard/nature/184.webp" top alt="..." />
        </a>
        <MDBCardBody>
          <MDBCardTitle>Live Data</MDBCardTitle>
          <MDBCardText>
            Look at the data captured by the rasberrypy probes in real time !
          </MDBCardText>
          <MDBBtn tag="a" href="live" color="primary">Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard class="card">
        <a v-mdb-ripple="{ color: 'light' }">
          <MDBCardImg src="https://mdbootstrap.com/img/new/standard/nature/191.webp" top alt="..." />
        </a>
        <MDBCardBody>
          <MDBCardTitle>Archive Data</MDBCardTitle>
          <MDBCardText>
            See older data taken by the rasberry's !
          </MDBCardText>
          <MDBBtn tag="a" href="archive" color="primary">Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, mdbRipple } from "mdb-vue-ui-kit";

import NavBar from './../../components/NavBar.vue'
import FooterBar from './../../components/FooterBar.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
    MDBBtn
  },
  directives: {
    mdbRipple
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

.containerRow {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.card {
  width: 48vw;
}
</style>
