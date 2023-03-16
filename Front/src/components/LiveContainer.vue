<template>
    <div>
        <h1 id="title">Live Data</h1>
        <div class="boxContainer containerRow marg">
            <div v-for="(value, key) in urls" :key="value">
                <input type="radio" :value="value" v-model="url" @change="changeFeatures" />
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
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(16).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(17).webp",
                alt: "...",
                caption: ""
            },
            {
                src: "https://mdbootstrap.com/img/Photos/Slides/img%20(18).webp",
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
            windSValue: null,
            windDValue: null,
            gpsValue: null,
            slideInterval: 1000,
            urls: {
                "Rasberry 25": "http://piensg025:3000/live/",
                "Rasberry 26": "http://piensg026:3000/live/",
                "Rasberry 27": "http://piensg027:3000/live/",
                "Rasberry 28": "http://piensg028:3000/live/",
                "Rasberry 29": "http://piensg029:3000/live/",
                "Rasberry 30": "http://piensg030:3000/live/"
            },
            url: 'http://piensg027:3000/live/'
        }
    },
    mounted() {
        this.changeFeatures();
    },
    methods: {
        async changeFeatures() {
            this.lumValue = await this.getLiveData(this.url, "lum");
            this.items1[0].caption = "Luminosity : " + this.lumValue.value.toString() + " " + this.lumValue.unit;
            this.humValue = await this.getLiveData(this.url, "hum");
            this.items1[1].caption = "Humidity : " + this.humValue.value.toString() + " " + this.humValue.unit;
            this.preValue = await this.getLiveData(this.url, "pre");
            this.items1[2].caption = "Pressure : " + this.preValue.value.toString() + " " + this.preValue.unit;
            this.tempValue = await this.getLiveData(this.url, "temp");
            this.items1[3].caption = "Temperature : " + this.tempValue.value.toString() + " " + this.tempValue.unit;
            this.windSValue = await this.getLiveData(this.url, "wind_speed");
            this.items1[4].caption = "Wind Speed : " + this.windSValue.value.toString() + " " + this.windSValue.unit;
            this.windDValue = await this.getLiveData(this.url, "wind_dir");
            this.items1[5].caption = "Wind Direction : " + this.windDValue.value.toString() + " " + this.windDValue.unit;
            this.gpsValue = await this.getLiveData(this.url, "gps");
            this.items1[6].caption = "Lat : " + this.truncateFloat(this.gpsValue.lat, 2) + " Long : " + this.truncateFloat(this.gpsValue.long, 2);
            this.slideInterval = 2000;
        },
        truncateFloat(number, decimalIndex) {
            let res = "";
            let entier = number.toString().split('.')[0];
            let decimal = number.toString().split('.')[1];
            res = entier + '.' + decimal.slice(0, decimalIndex);
            return res;
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