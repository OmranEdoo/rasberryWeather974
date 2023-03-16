export const fillChartData = function fillChartData(labels, data, feature) {
    return {
        type: "line",
        data: {
            labels: labels,
            datasets: [
                {
                    label: feature,
                    type: "line",
                    data: data,
                    backgroundColor: "rgba(54,73,93,.5)",
                    borderColor: "#36495d",
                    borderWidth: 5,
                }
            ]
        },
        options: {
            responsive: true,
            lineTension: 1,
            legend: {
                labels: {
                    fontSize: 30
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            padding: 25,
                            fontSize: 30
                        }
                    }
                ],
                xAxes: [
                    {
                        ticks: {
                            fontSize: 30
                        }
                    }
                ]
            }
        }
    }
};

export default fillChartData;
