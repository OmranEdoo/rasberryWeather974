<template>
    <h1 id="title">Archive Data</h1>
    <div class="containerColumn">
        <div class="containerRow">
            <canvas class="chart" id="chartPre"></canvas>
            <canvas class="chart" id="chartLum"></canvas>
        </div>
        <div class="containerRow">
            <canvas class="chart" id="chartTemp"></canvas>
            <canvas class="chart" id="chartHum"></canvas>
        </div>
    </div>
</template>

<script>

import Chart from 'chart.js'
import chartPre from '../js/chart/pre.js'
import chartLum from '../js/chart/lum.js'
import chartTemp from '../js/chart/temp.js'
import chartHum from '../js/chart/hum.js'
import {creator} from '../js/chart/chart.js'

import { getArchiveData } from '../js/importer/archiveDataImporter.js'


export default {
    name: 'ArchiveContainer',
    data() {
        return {
            archive: getArchiveData,
            value: null,
            chartPre: chartPre,
            chartLum: chartLum,
            chartTemp: chartTemp,
            chartHum: chartHum,
            chartCreator: creator,
            chart: null
        }
    },
    async mounted() {
        this.value = await this.archive();

        this.chart = this.chartCreator(this.value.values, this.value.times, this.value.name)

        const ctxPre = document.getElementById('chartPre');
        new Chart(ctxPre, this.chart);

        const ctxLum = document.getElementById('chartLum');
        new Chart(ctxLum, this.chartLum);

        const ctxTemp = document.getElementById('chartTemp');
        new Chart(ctxTemp, this.chartTemp);

        const ctxHum = document.getElementById('chartHum');
        new Chart(ctxHum, this.chartHum);
    }
}

</script>

<style scoped>
#title {
padding-top: 20px;
}

.containerColumn {
    display: flex;
    flex-direction: column;
}

.containerRow {
    display: flex;
    flex-direction: row;
}

.chart {
    width: 50vw !important;
    height: min-content !important;
    font-weight: 100;
    padding: 1vw;
}
</style>