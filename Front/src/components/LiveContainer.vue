<template>
    <div>
        <h1 id="title">Live Data</h1>
        <MDBCarousel :interval="slideInterval" data-interval="100" style="font-size: 5rem;" v-model="carousel1"
            :items="items1" fade innerClass="shadow-4-strong" />
    </div>
</template>

<script>
import { getLumLiveData, getHumLiveData, getPreLiveData, getTempLiveData } from '../js/importer/liveDataImporter.js'
import { ref } from "vue";
import { MDBCarousel } from "mdb-vue-ui-kit";


export default {
    name: 'LiveContainer',
    components: {
        MDBCarousel
    },
    setup() {
        const items1 = [
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(10).webp",
                alt: "...",
                caption: ""
            }
        ];
        const carousel1 = ref(0);
        return {
            items1: items1,
            carousel1
        };
    },
    data() {
        return {
            lumLive: getLumLiveData,
            humLive: getHumLiveData,
            preLive: getPreLiveData,
            tempLive: getTempLiveData,
            lumValue: null,
            humValue: null,
            preValue: null,
            tempValue: null,
            slideInterval: 100
        }
    },
    async mounted() {
        this.lumValue = await this.lumLive();
        this.items1[0].caption = "Luminosity : " + this.lumValue.toString() + " lux";
        this.humValue = await this.humLive();
        this.items1[1].caption = "Humidity : " + this.humValue.toString() + "%";
        this.preValue = await this.preLive();
        this.items1[2].caption = "Pressure : " + this.preValue.toString() + " hPa";
        this.tempValue = await this.tempLive();
        this.items1[3].caption = "Temperature : " + this.tempValue.toString() + "°C";
        this.slideInterval = 2000;
    }
}

</script>

<style scoped>
.box {
    width: 10%;
    height: 10%;
    border-radius: 2%;
    border: 1px solid rgb(88, 88, 88);
}

#title {
    padding: 20px;
}
</style>