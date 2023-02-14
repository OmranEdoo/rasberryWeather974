<template>
    <div class="page">
        <NavBar actual-page="about" />
        <div>
            <p>
                This site is the realization of a student project as part of an advanced Web programming course in the
                third year of engineering school.
            </p>
        </div>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import NavBar from './../../components/NavBar.vue'
import FooterBar from './../../components/FooterBar.vue'


export default {
    name: 'AboutPage',
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
