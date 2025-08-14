const tempDiv = document.getElementById('tempValue');

// Simulate live temperature updates
setInterval(() => {
    const temp = (30 + Math.random() * 10).toFixed(2); // random 30-40°C
    tempDiv.textContent = `${temp} °C`;
}, 1000); // update every second
