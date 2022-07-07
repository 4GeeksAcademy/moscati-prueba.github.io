let valueDisplays = document.querySelectorAll(".metric-counter");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 2;
        valueDisplay.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
});