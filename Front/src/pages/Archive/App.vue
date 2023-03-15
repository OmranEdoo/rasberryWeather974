<template>
    <div class="page">
        <NavBar actual-page="archive" />
        <GraphContainer></GraphContainer>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import NavBar from './../../components/NavBar.vue'
import GraphContainer from './../../components/GraphContainer.vue'
import FooterBar from './../../components/FooterBar.vue'


export default {
    name: 'ArchivePage',
    components: {
        NavBar,
        FooterBar,
        GraphContainer
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
