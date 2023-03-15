<template>
    <div class="containerColumn">
        <div class="containerRow">
            <div v-for="(value, key) in featureNames" :key="key">
                <input type="checkbox" :value="key" v-model="features" @change="changeFeatures"><label for="">{{ value
                }}</label>

            </div>
        </div>
        <div class="containerRow">
            <select v-model="period" @change="changeFeatures">
                <option v-for="periodName in periods" :value="periodName" :key="periodName">
                    {{ periodName }}
                </option>
            </select>
        </div>
        <div id="chartContainer" class="containerRow">
            <canvas v-for="feature in features" class="chart" :key="feature"></canvas>
        </div>
    </div>
</template>

<script>

import Chart from 'chart.js'
import fillChartData from '../js/chart/chart.js'

import { getArchiveData } from '../js/importer/archiveDataImporter.js'


export default {
    name: 'GraphContainer',
    components: {

    },
    data() {
        return {
            featureNames: {
                "lum": "Luminosity",
                "temp": "Temperature",
                "hum": "Humidity",
                "pre": "Precipitation",
                "rain": "Rain",
                "wind_speed": "Wind Speed",
                "wind_dir": "Wind Direction",
                "gps": "Gps"
            },
            periods: ["day", "week", "month"],
            fillChartData: fillChartData,
            archiveData: getArchiveData,
            period: "day",
            features: [],
            data: null,
        }
    },
    mounted() {

    },
    methods: {
        changeFeatures() {
            let index = 0;

            this.features.forEach(feature => {
                getArchiveData(this.period, feature).then(res => {
                    const data = res;

                    const ctx = document.getElementsByClassName('chart')[index];
                    //const ctx = document.getElementById('chart');
                    new Chart(ctx, this.fillChartData(data.times, data.values, this.featureNames[feature]));

                    index += 1;
                })
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

.chart {
    width: 48vw !important;
    height: min-content !important;
    font-weight: 100;
}

#chartContainer {
    flex-wrap: wrap;
}
</style>