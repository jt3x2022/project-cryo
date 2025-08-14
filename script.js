const ctx = document.getElementById('tempChart').getContext('2d');

const tempData = {
    labels: [],
    datasets: [{
        label: 'Temperature (°C)',
        data: [],
        borderColor: 'red',
        backgroundColor: 'rgba(255,0,0,0.1)',
        fill: true,
        tension: 0.3
    }]
};

const config = {
    type: 'line',
    data: tempData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        scales: {
            y: {
                min: 20,
                max: 80
            },
            x: {
                title: {
                    display: true,
                    text: 'Time (s)'
                }
            }
        }
    }
};

const tempChart = new Chart(ctx, config);

// Simulate live data
let time = 0;
setInterval(() => {
    const temp = 30 + Math.random() * 10; // random temp 30-40°C
    time += 1;

    tempData.labels.push(time);
    tempData.datasets[0].data.push(temp);

    if (tempData.labels.length > 50) { // keep last 50 points
        tempData.labels.shift();
        tempData.datasets[0].data.shift();
    }

    tempChart.update();
}, 1000);
