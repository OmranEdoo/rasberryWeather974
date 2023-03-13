export const chartPre = {
    type: "line",
    data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [
            {
                label: "Number of Moons",
                type: "line",
                data: [0, 0, 1, 2, 79, 82, 27, 14],
                backgroundColor: "rgba(54,73,93,.5)",
                borderColor: "#36495d",
                borderWidth: 5,
            },
            {
                label: "Planetary Mass (relative to the Sun x 10^-6)",
                data: [0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514],
                backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#47b784",
                borderWidth: 5
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
};

export default chartPre;
