export const data = {
    labels: ['Pon', 'Uto', 'Sre', 'Cet', 'Pet', 'Sub', 'Ned', 'Pon', 'Uto', 'Sre', 'Cet'],
    datasets: [
        {
            label: 'Data One',
            data: [40, 39, 10, 40, 39, 80, 40, 20, 50, 40, 10],
            fill: false,
            borderColor: 'rgba(235,163,108,0.66)',
            tension: 0.1
        }
    ],
}

export const options = {
    plugins: {
        legend: {
            display: false,
        },
        colors: {
            enabled: true
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            border: {
                display: false,
            },
            grid: {
                display: true,
                lineWidth: 1,
            },
            ticks: {
                padding: 20,
                color: 'rgba(0,0,0,0.4)',
            }
        },
        y: {
            border: {
                display: false,
            },
            ticks: {
                display: false
            },
            grid: {
                display: false
            }
        }
    }
}
