
const leftColorCode = document.getElementById("leftColor");
const rightColorCode = document.getElementById("rightColor");
const paragraphText = document.getElementById("gradient");

leftColorCode.addEventListener("input", updateColor);

rightColorCode.addEventListener("input", updateColor);

function updateColor() {
    const leftValue = leftColor.value;
    const rightValue = rightColor.value;
    const newGradient = `linear-gradient(to right, ${leftValue}, ${rightValue})`;

    document.body.style.background = newGradient;
    paragraphText.innerText = newGradient;
}