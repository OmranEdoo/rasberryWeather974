export const getArchiveData = async function getLumArchiveData(periode, feature) {
    return fetch('http://piensg028:3000/archive/' + periode + '/' + feature, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)

            return response.measurements.values;
        }).catch((error) => {
            console.log(error);
        });
}

