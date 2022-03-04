const runApp = () => {
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const yellow = document.getElementById('yellow');
    const blue = document.getElementById('blue');

    const colors = [red, green, yellow, blue];

    const click = (color) => {
        let selected = colors[color];

        selected.classList.add("selected");

        setTimeout(() => {
            selected.classList.remove("selected");
        }, 500);
    }

    for (let i in colors) {
        colors[i].addEventListener('click', click(i));
    }

    
}