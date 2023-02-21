
export const getLiveData = async function getLiveData() {
    return fetch('http://localhost:3000/mock/live', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log("test");
            console.log(JSON.stringify(response))

            const values = response.measurements;

            const lum = values.lum;
            const hum = values.hum;
            const temp = values.temp;
            const pre = values.pre;
            const rain = values.rain;
            const wind_speed = values.wind_speed;
            const wind_dir = values.wind_dir;
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
    return fetch('http://localhost:3000/mock/live/lum', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)

            return response.measurements.lum;
        }).catch((error) => {
            console.log(error);
        });
}

export const getHumLiveData = async function getHumLiveData() {
    return fetch('http://localhost:3000/mock/live/hum', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.hum;
        })
}

export const getPreLiveData = async function getTempLiveData() {
    return fetch('http://localhost:3000/mock/live/pre', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.pre;
        })
}

export const getTempLiveData = async function getPreLiveData() {
    return fetch('http://localhost:3000/mock/live/temp', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.temp;
        })
}

export const getRainLiveData = async function getRainLiveData() {
    return fetch('http://localhost:3000/mock/live/rain', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.rain;
        })
}

export const getWindSLiveData = async function getWindSLiveData() {
    return fetch('http://localhost:3000/mock/live/windS', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.wind_speed;
        })
}

export const getWindDLiveData = async function getWindDLiveData() {
    return fetch('http://localhost:3000/mock/live/windD', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.measurements.wind_dir;
        })
}

export const getGpsLiveData = async function getGpsLiveData() {
    return fetch('http://localhost:3000/mock/live/gps', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response.location;
        })
}