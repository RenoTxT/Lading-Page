let variableA = 0;
let variableB = 0;
let variableC = 0;
let variableD = 0;

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Home', 'Portofolio', 'About', 'Contact'],
        datasets: [{
            label: 'Website Track',
            data: [variableA, variableB, variableC, variableD],
            borderColor: [
                'rgba(255, 99, 132, 1)', 
                'rgba(54, 162, 235, 1)', 
                'rgba(255, 206, 86, 1)', 
                'rgba(75, 192, 192, 1)'
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', 
                'rgba(54, 162, 235, 0.2)', 
                'rgba(255, 206, 86, 0.2)', 
                'rgba(75, 192, 192, 0.2)'
            ],
            borderWidth: 3,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: 'white'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                    max: 100,
                    color: 'white'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
                    }
                },
                titleColor: 'white',
                bodyColor: 'white'
            }
        }
    }
});

function aClick() {
    variableA += 1;
    updateChart();
}

function bClick() {
    variableB += 1;
    updateChart();
}

function cClick() {
    variableC += 1;
    updateChart();
}

function dClick() {
    variableD += 1;
    updateChart();
}

function updateChart() {
    myChart.data.datasets[0].data = [variableA, variableB, variableC, variableD];
    myChart.update();
}

document.getElementById('btnA').addEventListener('click', aClick);
document.getElementById('btnB').addEventListener('click', bClick);
document.getElementById('btnC').addEventListener('click', cClick);
document.getElementById('btnD').addEventListener('click', dClick);
