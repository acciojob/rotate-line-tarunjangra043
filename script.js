let angle = 0;
const line = document.getElementById('line');

function rotateLine() {
    angle += 2;
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    requestAnimationFrame(rotateLine);
}

rotateLine();
