<template>
    <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";


export default {
    name: 'MapContainer',
    props: {
        coordinates: Object
    },
    data() {
        return {
            map: null,
            marker: null,
            gps: this.coordinates
        }
    },
    watch: {
        coordinates(oldGps, newGps) {
            this.marker.setLatLng(new L.LatLng(newGps.lat, newGps.long)).addTo(this.map);
        }
    },
    mounted() {
        this.map = L.map("mapContainer").setView([46.05, 11.05], 5);
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
            iconUrl: require("leaflet/dist/images/marker-icon.png"),
            shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    },
    created() {
        this.marker = L.marker([this.gps.lat, this.gps.long]);
    }
}

</script>

<style scoped>
#mapContainer {
    width: 50vw;
    height: 50vh;
}
</style>