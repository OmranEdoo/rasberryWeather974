<template>
    <div class="page">
        <NavBar actual-page="live" />
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import NavBar from './../../components/NavBar.vue'
import FooterBar from './../../components/FooterBar.vue'


export default {
    name: 'LivePage',
    components: {
        NavBar,
        FooterBar
    }
}
</script>

<style>
.page {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
}
</style>
