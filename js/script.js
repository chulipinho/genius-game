const runApp = () => {
    let colorQueue = [];
    let clickedOrder = [];
    let time = 500;
    let score = 0;

    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const yellow = document.getElementById('yellow');
    const blue = document.getElementById('blue');

    const colors = [red, green, yellow, blue];

    const click = (colorIndex) => {
        clickedOrder.push(colorIndex);
        highlightColor(colorIndex);
        processUserInput();
    }

    const highlightColor = (colorIndex) => {
        let selected = colors[colorIndex];

        selected.classList.add("selected");

        setTimeout(() => {
            selected.classList.remove("selected");
        }, 250);

        return selected;
    }

    for (let i in colors) {
        colors[i].addEventListener('click', () => {
            click(i);
        });
    }
    
    const runLevel = async () => {
        const delay = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
        clickedOrder = [];

        await delay(1000);
        
        for(let color of colorQueue) {
            highlightColor(color);
            await delay(time);
        }
        
        let selected = Math.floor(Math.random() * 4);
        highlightColor(selected);

        colorQueue.push(selected);
    }

    const processUserInput = () => {
        if (clickedOrder[clickedOrder.length - 1] != colorQueue[clickedOrder.length - 1]) {
            gameOver();
            return;
        }
        if (clickedOrder.length === colorQueue.length) runLevel();

        score++;
    }

    const gameOver = () => {
        alert(`Game over!\nYour score was: ${score}\nPress OK to play again`);
        colorQueue = [];
        score = 0;
        runLevel();
    }

    alert('Welcome to Genius\nPress OK to begin.');
    runLevel();
}

runApp();