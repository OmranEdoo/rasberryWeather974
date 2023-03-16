export const getAllLiveData = async function getAllLiveData(url) {
    return fetch(url, { //'http://piensg028:3000/live'
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            
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

export const getLiveData = async function getLiveData(url, feature) {
    return fetch(url + feature, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {

            switch (feature) {
                case 'lum':
                    return response.measurements.lum.value;
                case 'temp':
                    return response.measurements.temp.value;
                case 'hum':
                    return response.measurements.hum.value;
                case 'pre':
                    return response.measurements.pre.value;
                case 'windS':
                    return response.measurements.wind_speed.value;
                case 'windD':
                    return response.measurements.wind_dir.value;
                case 'gps':
                    return response.location;
                default:
                    return "";
            }
        }).catch((error) => {
            console.log(error);
        });
}

