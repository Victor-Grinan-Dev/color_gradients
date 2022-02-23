let form = document.querySelector("form");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let direction = document.querySelectorAll("#direction");

const gradient = () => {
    let selectedDirection;
    console.log(direction)

    for (const selection of direction) {
        if (selection.checked) {
            selectedDirection = selection.value;
        }
    }

    document.body.style.backgroundImage = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`

}

form.addEventListener("change", gradient);