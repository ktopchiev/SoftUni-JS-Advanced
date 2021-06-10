function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultDivElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (e) => {
        let width = gradientElement.offsetWidth - 1;
        let percent = Math.floor((e.offsetX / width) * 100);
        resultDivElement.textContent = percent + '%';
    })
}