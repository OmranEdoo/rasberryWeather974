function getArchiveData() {
    fetch('http://localhost.com:3000', {
        method: 'GET'/*,
        headers: {
            'Accept': 'application/json',
        },*/
    })
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))
            return response.Archive.properties.measurements.properties.values.example;
        })
}
