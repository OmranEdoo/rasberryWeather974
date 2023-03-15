export const getArchiveData = async function getArchiveData(periode, feature) {
    return fetch('http://piensg027:3000/archive/' + periode + '/' + feature, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log("uuuuu");

            switch (feature) {
                case 'lum':
                    console.log(response.measurements.lum);
                    return response.measurements.lum;
                case 'temp':
                    console.log("yyy");
                    return response.measurements.temp;
                case 'hum':
                    console.log(response.measurements.hum);
                    return response.measurements.hum;
                case 'pre':
                    console.log(response.measurements.pre);
                    return response.measurements.pre;
                default:
                    return "";
            }
        }).catch((error) => {
            console.log(error);
        });
}

