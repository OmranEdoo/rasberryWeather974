export const getArchiveData = async function getArchiveData() {
    return fetch('http://localhost:3000/mock/archive', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))

            return response[0].measurements.feature;
        })
}
