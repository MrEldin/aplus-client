export const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Avg', 'Sep', 'Okt', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Data One',
            data: [40, 20, 10, 40, 39, 80, 40, 20, 50, 40, 10, 30],
            backgroundColor: '#F0CF93',
            borderRadius: 5,
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
                drawBorder: false,
                display: false,
                drawTicks: false,
                lineWidth: 0,
                drawOnChartArea: false,
                offset: false,
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
