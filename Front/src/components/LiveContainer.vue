<template>
    <div>
        <h1 id="title">Live Data</h1>
        <div class="boxContainer containerRow marg">
            <div v-for="(value, key) in urls" :key="value">
                <input type="radio" :value="value" v-model="url" @change="changeFeatures"/>
                <label style="margin-left: 10px;" for="">{{ key }}</label>
            </div>
        </div>
        <MDBCarousel :interval="slideInterval" data-interval="100" style="font-size: 5rem;" v-model="carousel1"
            :items="items1" fade innerClass="shadow-4-strong" />
    </div>
</template>

<script>
import { getLiveData } from '../js/importer/liveDataImporter.js'
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
            getLiveData: getLiveData,
            lumValue: null,
            humValue: null,
            preValue: null,
            tempValue: null,
            slideInterval: 100,
            urls: {
                "Rasberry 25": "http://piensg025:3000/archive/",
                "Rasberry 26": "http://piensg026:3000/archive/",
                "Rasberry 27": "http://piensg027:3000/archive/",
                "Rasberry 28": "http://piensg028:3000/archive/",
                "Rasberry 29": "http://piensg029:3000/archive/",
                "Rasberry 30": "http://piensg030:3000/archive/"
            },
            url: 'http://piensg025:3000/archive/'
        }
    },
    async mounted() {
        this.changeFeatures();
    },
    methods: {
        async changeFeatures() {
            this.lumValue = await this.getLiveData(this.url, "lum");
            this.items1[0].caption = "Luminosity : " + this.lumValue.toString() + " lux";
            this.humValue = await this.getLiveData(this.url, "hum");
            this.items1[1].caption = "Humidity : " + this.humValue.toString() + "%";
            this.preValue = await this.getLiveData(this.url, "pre");
            this.items1[2].caption = "Pressure : " + this.preValue.toString() + " hPa";
            this.tempValue = await this.getLiveData(this.url, "temp");
            this.items1[3].caption = "Temperature : " + this.tempValue.toString() + "°C";
            this.tempValue = await this.getLiveData(this.url, "windS");
            this.items1[3].caption = "Wind Speed : " + this.tempValue.toString() + "";
            this.tempValue = await this.getLiveData(this.url, "windD");
            this.items1[3].caption = "Wind Direction : " + this.tempValue.toString() + "";
            this.tempValue = await this.getLiveData(this.url, "gps");
            this.items1[3].caption = "Gps : " + this.tempValue.toString() + "";
            this.slideInterval = 2000;
        }
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

.containerRow {
    display: flex;
    flex-direction: row;
}

.boxContainer {
    justify-content: space-around;
}

.marg {
    margin: 30px;
}
</style>