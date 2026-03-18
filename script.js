let arr = [];

function generateArray() {
    arr = [];
    const container = document.getElementById("array");
    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        let value = Math.floor(Math.random() * 100) + 1;
        arr.push(value);

        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = value + "px";

        container.appendChild(bar);
    }
}

async function bubbleSort() {
    let bars = document.getElementsByClassName("bar");

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                bars[j].style.height = arr[j] + "px";
                bars[j + 1].style.height = arr[j + 1] + "px";

                await new Promise(res => setTimeout(res, 100));
            }
        }
    }
}
