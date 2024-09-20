// Update clock function
function updateClock() {
    const now = new Date();

    // Update digital clock
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Update date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString(undefined, options);

    // Update analog clock hands
    const secondDeg = ((now.getSeconds() / 60) * 360) + 90;
    const minuteDeg = ((now.getMinutes() / 60) * 360) + ((now.getSeconds() / 60) * 6) + 90;
    const hourDeg = ((now.getHours() / 12) * 360) + ((now.getMinutes() / 60) * 30) + 90;

    document.querySelector('.hand.second').style.transform = `rotate(${secondDeg}deg)`;
    document.querySelector('.hand.minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.hand.hour').style.transform = `rotate(${hourDeg}deg)`;
}

// Change clock color from color picker
document.getElementById('colorPicker').addEventListener('input', (event) => {
    const color = event.target.value;
    document.querySelector('.clock.digital').style.color = color;
    document.querySelector('.clock.analog .hand').style.backgroundColor = color;
});

// Create a color palette for quick selection
const colors = ['#61dafb', '#ff4500', '#32cd32', '#ffec40', '#9370db', '#00bfff'];
const paletteContainer = document.getElementById('colorPalette');
colors.forEach(color => {
    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener('click', () => {
        document.getElementById('colorPicker').value = color;
        document.querySelector('.clock.digital').style.color = color;
        document.querySelector('.clock.analog .hand').style.backgroundColor = color;
    });
    paletteContainer.appendChild(colorDiv);
});

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display clock immediately
