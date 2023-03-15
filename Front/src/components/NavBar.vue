<template>
  <MDBNavbar expand="lg" light bg="light" container>
    <MDBNavbarBrand href="#">RW 974</MDBNavbarBrand>
    <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent"></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-2 mb-lg-0">
        <MDBNavbarItem href="home" :disabled="actualPage == 'home'">
          Home
        </MDBNavbarItem>
        <MDBNavbarItem href="about" :disabled="actualPage == 'about'">
          About
        </MDBNavbarItem>
        <MDBNavbarItem href="#" onmousedown="window.scrollTo(0, document.body.scrollHeight);">
          Contact
        </MDBNavbarItem>
        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown1">
            <MDBDropdownToggle tag="a" class="nav-link" @click="dropdown1 = !dropdown1">Data</MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
              <MDBDropdownItem href="live" :disabled="actualPage == 'live'">Live</MDBDropdownItem>
              <MDBDropdownItem href="archive" :disabled="actualPage == 'archive'">Archive</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
      </MDBNavbarNav>
      <!-- Search form -->
      <form class="d-flex input-group w-auto">
        <input type="search" class="form-control" placeholder="Type query" aria-label="Search" />
        <MDBBtn outline="primary">
          Search
        </MDBBtn>
      </form>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  },
  props: {
    actualPage: String
  },
  mounted() {
    console.log(this.actualPage);
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    //const page = ref(props.actualPage);
    return {
      collapse1,
      dropdown1
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
