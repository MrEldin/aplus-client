export const data = {
    labels: ['Pon', 'Uto', 'Sre', 'Cet', 'Pet', 'Sub', 'Ned', 'Pon', 'Uto', 'Sre', 'Cet'],
    datasets: [
        {
            label: 'Data One',
            data: [40, 39, 10, 40, 39, 80, 40, 20, 50, 40, 10],
            backgroundColor: '#EBA36C',
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
            grid: {
                display: true
            }
        },
        y: {
            ticks: {
                display: false
            },
            grid: {
                display: false
            }
        }
    }
}
