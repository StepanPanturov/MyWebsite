document.getElementById('colorChangeButton').addEventListener('click', function() {
    const colors = ['#bf20c7', '#2020c7', '##c72068', '#0b9629', '#ced10a'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});