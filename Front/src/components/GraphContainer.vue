<template>
    <div class="containerColumn">
        <div class="boxContainer containerRow marg">
            <div v-for="(value, key) in urls" :key="value">
                <input type="radio" :value="value" v-model="url" @click="changeFeatures" />
                <label style="margin-left: 10px;" for="">{{ key }}</label>
            </div>
        </div>
        <div class="boxContainer containerRow margBottom">
            <div v-for="(value, key) in featureNames" :key="key">
                <input class="substituted" type="checkbox" :value="key" v-model="features" @change="changeFeatures"
                    aria-hidden="true" />
                <label style="margin-left: 10px;" for="">{{ value }}</label>
            </div>
            <select id="select" v-model="period" @change="changeFeatures">
                <option v-for="periodName in periods" :value="periodName" :key="periodName">
                    {{ periodName }}
                </option>
            </select>
        </div>
        <div class="center" v-if="isMap">
            <MapContainer :coordinates="gps"></MapContainer>
        </div>
        <div id="chartContainer" class="containerRow" v-else>
            <canvas v-for="feature in features" class="chart" :key="feature"></canvas>
        </div>
    </div>
</template>

<script>

import Chart from 'chart.js'
import fillChartData from '../js/chart/chart.js'

import { getArchiveData } from '../js/importer/archiveDataImporter.js'
import MapContainer from './MapContainer.vue'


export default {
    name: 'GraphContainer',
    components: {
        MapContainer
    },
    data() {
        return {
            featureNames: {
                "lum": "Luminosity",
                "temp": "Temperature",
                "hum": "Humidity",
                "pre": "Pressure",
                "rain": "Rain",
                "wind_speed": "Wind Speed",
                "wind_dir": "Wind Direction",
                "gps": "Gps"
            },
            gps: {
                lat: 0,
                long: 0
            },
            isMap: false,
            periods: ["day", "week", "month"],
            fillChartData: fillChartData,
            archiveData: getArchiveData,
            period: "day",
            features: [],
            data: null,
            urls: {
                "Rasberry 27": "http://piensg027:3000/archive/",
                "Rasberry 28": "http://piensg028:3000/archive/",
                "Rasberry 30": "http://piensg030:3000/archive/",
                "Rasberry 31": "http://piensg031:3000/archive/",
                "Rasberry 32": "http://piensg032:3000/archive/",
            },
            url: 'http://piensg027:3000/archive/'
        }
    },
    methods: {
        changeFeatures() {
            let index = 0;

            if (this.features.includes("gps")) {
                this.isMap = true;
            } else {
                this.isMap = false;
            }

            this.features.forEach(feature => {

                if (feature == "gps") {
                    getArchiveData(this.url, this.period, feature).then(res => {
                        this.gps = res;
                    });
                } else {
                    getArchiveData(this.url, this.period, feature).then(res => {
                        const data = res;

                        const ctx = document.getElementsByClassName('chart')[index];
                        //const ctx = document.getElementById('chart');
                        new Chart(ctx, this.fillChartData(data.times, data.values, this.featureNames[feature]));

                        index += 1;
                    })
                }
            });
        }
    }
}

</script>

<style scoped>
.containerColumn {
    display: flex;
    flex-direction: column;
}

.containerRow {
    display: flex;
    flex-direction: row;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
}

.chart {
    width: 48vw !important;
    height: min-content !important;
    font-weight: 100;
}

#chartContainer {
    flex-wrap: wrap;
}

.boxContainer {
    justify-content: space-around;
}

.marg {
    margin: 30px;
}

.margUp {
    margin: 30px 30px 0px 30px;
}

.margBottom {
    margin: 0px 30px 30px 30px;
}

#select {
    width: 100px;
}

/* Checkbox */
</style>