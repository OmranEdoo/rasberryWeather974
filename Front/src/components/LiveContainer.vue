<template>
    <div>
        <h1 id="title">Live Data</h1>
        <MDBCarousel :interval="slideInterval" data-interval="100" style="font-size: 5rem;" v-model="carousel1"
            :items="items1" fade innerClass="shadow-4-strong" />
    </div>
</template>

<script>
import { getLumLiveData, getHumLiveData, getPreLiveData, getTempLiveData, getRainLiveData, getWindSLiveData, getWindDLiveData, getGpsLiveData } from '../js/importer/liveDataImporter.js'
import { ref } from "vue";
import { MDBCarousel } from "mdb-vue-ui-kit";
//import { threadId } from 'worker_threads';


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
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(4).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(14).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(18).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).webp",
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
            rainLive: getRainLiveData,
            windSLive: getWindSLiveData,
            windDLive: getWindDLiveData,
            gpsLive: getGpsLiveData,
            value: null,
            slideInterval: 100
        }
    },
    async mounted() {
        //this.allValue = await this.allLive();
        this.value = await this.lumLive();
        this.items1[0].caption = "Luminosity : " + this.value.value.toString() + " " + this.value.unit.toString();
        this.value = await this.humLive();
        this.items1[1].caption = "Humidity : " + this.value.value.toString() + " " + this.value.unit.toString();
        this.value = await this.preLive();
        this.items1[2].caption = "Pressure : " + this.value.value.toString() + " " + this.value.unit.toString();
        this.value = await this.tempLive();
        this.items1[3].caption = "Temperature : " + this.value.value.toString() + " " + this.value.unit.toString();
        this.value = await this.rainLive();
        this.items1[4].caption = "Rain : " + this.value.value.toString() + " " + this.value.unit.toString();
        this.value = await this.windSLive();
        this.items1[5].caption = "Wind speed : " + this.value.value.toString() + " " + this.value.unit.toString();
        this.value = await this.windDLive();
        this.items1[6].caption = "Wind direction : " + this.value.value.toString() + " " + this.value.unit.toString();
        this.value = await this.gpsLive();
        this.items1[7].caption = "GPS : " + "(" + this.value.lat.toString() + ", " + this.value.long.toString() + ")";
        
        this.slideInterval = 3000;
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