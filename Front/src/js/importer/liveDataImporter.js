const lum = null;
const hum = null;
const temp = null;
const pre = null;
const rain = null;
const wind_speed = null;
const wind_dir = null;
let data = {}

function getLiveData() {
    fetch('http://localhost.com:3000', {
        method: 'GET'/*,
        headers: {
            'Accept': 'application/json',
        },*/
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            const values = response.Live.properties.measurements.properties;

            lum = values.lum.properties.value.example;
            hum = values.hum.properties.value.example;
            temp = values.temp.properties.value.example;
            pre = values.pre.properties.value.example;
            rain = values.rain.properties.value.example;
            wind_speed = values.wind_speed.properties.value.example;
            wind_dir = values.wind_dir.properties.value.example;

            data["lum"] = lum;
            data["hum"] = lum;
            data["temp"] = lum;
            data["pre"] = lum;
            data["rain"] = lum;
            data["wind_speed"] = lum;
            data["wind_dir"] = lum;
            return data;
        })
}

function getLumLiveData() {
    fetch('path', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.Live_Lum.properties.measurements.properties.lum.properties.value.example;
        })
}

function getHumLiveData() {
    fetch('path', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.Live_Hum.properties.measurements.properties.hum.properties.value.example;
        })
}

function getTempLiveData() {
    fetch('path', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.Live_Temp.properties.measurements.properties.temp.properties.value.example;
        })
}

function getPreLiveData() {
    fetch('path', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.Live_Pre.properties.measurements.properties.pre.properties.value.example;
        })
}

function getRainLiveData() {
    fetch('path', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.Live_Rain.properties.measurements.properties.rain.properties.value.example;
        })
}

function getWindSLiveData() {
    fetch('path', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.Live_WindS.properties.measurements.properties.wind_speed.properties.value.example;
        })
}

function getWindDLiveData() {
    fetch('path', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.Live_WindD.properties.measurements.properties.wind_dir.properties.value.example;
        })
}
