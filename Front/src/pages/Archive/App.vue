<template>
    <div class="page">
        <NavBar actual-page="archive" />
        <ArchiveContainer></ArchiveContainer>
        <FooterBar></FooterBar>
    </div>
</template>

<script>
import NavBar from './../../components/NavBar.vue'
import FooterBar from './../../components/FooterBar.vue'
import ArchiveContainer from './../../components/ArchiveContainer.vue'



export default {
    name: 'ArchivePage',
    components: {
        NavBar,
        FooterBar,
        ArchiveContainer
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
