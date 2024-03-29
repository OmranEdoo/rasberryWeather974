export const getArchiveData = async function getArchiveData(url, periode, feature) {
    return fetch(url + periode + '/' + feature, { //'http://piensg027:3000/archive/'
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {

            switch (feature) {
                case 'lum':
                    return response.measurements.lum;
                case 'temp':
                    return response.measurements.temp;
                case 'hum':
                    return response.measurements.hum;
                case 'pre':
                    return response.measurements.pre;
                case 'rain':
                    return response.measurements.rain;
                case 'wind_speed':
                    return response.measurements.wind_speed;
                case 'wind_dir':
                    return response.measurements.wind_dir;
                case 'gps':
                    return response.location;
                default:
                    return "";
            }
        }).catch((error) => {
            console.log(error);
        });
}

