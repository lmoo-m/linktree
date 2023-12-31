const body = document.body;

const backgroundParticles = () => {
    const square = document.createElement("div");
    body.appendChild(square);
    square.className = "border-2 border-[#F4CE14] absolute particle";
    // square.style.boxShadow = "0 0 15px white, 0 0 30px white ";

    const min = 1;
    const max = 3;

    const size = Math.random() * (max - min) + min;
    const positionX = (Math.random() * innerWidth) / 1.2;

    square.style.left = positionX + "px";
    square.style.width = `${size}rem`;
    square.style.height = `${size}rem`;

    setTimeout(() => {
        body.removeChild(square);
    }, 30000);
};

setInterval(() => {
    backgroundParticles();
}, 1500);
