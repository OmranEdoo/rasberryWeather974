export const getLiveData = async function getLiveData() {
    return fetch('http://piensg028:3000/live', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log("test");
            console.log(JSON.stringify(response))

            const values = response.measurements;

            const lum = values.lum.value;
            const hum = values.hum.value;
            const temp = values.temp.value;
            const pre = values.pre.value;
            const rain = values.rain.value;
            const wind_speed = values.wind_speed.value;
            const wind_dir = values.wind_dir.value;
            const gps = response.location;

            let data = {
                "lum": lum,
                "hum": hum,
                "temp": temp,
                "pre": pre,
                "rain": rain,
                "wind_speed": wind_speed,
                "wind_dir": wind_dir,
                "gps": gps
            }

            return data;
        })
}

export const getLumLiveData = async function getLumLiveData() {
    return fetch('http://piensg028:3000/live/lum', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)

            return response.measurements.lum.value;
        }).catch((error) => {
            console.log(error);
        });
}

export const getHumLiveData = async function getHumLiveData() {
    return fetch('http://piensg028:3000/live/hum', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.hum.value;
        })
}

export const getPreLiveData = async function getTempLiveData() {
    return fetch('http://piensg028:3000/live/pre', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.pre.value;
        })
}

export const getTempLiveData = async function getPreLiveData() {
    return fetch('http://piensg028:3000/live/temp', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.temp.value;
        })
}

export const getRainLiveData = async function getRainLiveData() {
    return fetch('http://piensg028:3000/live/rain', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.rain.value;
        })
}

export const getWindSLiveData = async function getWindSLiveData() {
    return fetch('http://piensg028:3000/live/windS', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.wind_speed.value;
        })
}

export const getWindDLiveData = async function getWindDLiveData() {
    return fetch('http://piensg028:3000/live/windD', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.wind_dir.value;
        })
}

export const getGpsLiveData = async function getGpsLiveData() {
    return fetch('http://piensg028:3000/live/gps', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.location;
        })
}