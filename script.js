let SIZE = 16
let COLOR = '#8a2be2'
let user_size = SIZE
let user_color = COLOR

function displayGraph(size=SIZE) {
    const area = document.querySelector("#grid-container");
    area.style.gridTemplateColumns = "repeat("+size+", 1fr)";
    size = size**2
    for (i=0;i<size;i++) {
        const cell = document.createElement("div")
        // cell.textContent = i + 1
        // cell.id = i + 1
        cell.classList = 'cell'
        area.appendChild(cell)
    }
    play()
}

function clearGraph() {
    const area = document.querySelector("#grid-container")
    deleted = area.childElementCount
    for (i=area.childElementCount;i>0;i--) {
        // console.log('C:' + area.lastChild)
        area.removeChild(area.lastChild)
    }

    return deleted
}

function play() {
    let picker = document.querySelector('#color-picker')
    picker.value = user_color

    const cells = document.querySelectorAll('.cell')
    // console.log(cells)
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            rgb_color = hexToRGB(user_color.slice(1))
            // console.log("Cell " + cell.style.backgroundColor)
            // console.log("User " + user_color)
            // console.log("selected " + rgb_color)
            if (cell.style.backgroundColor != rgb_color) {
                cell.style.backgroundColor = user_color
            } else
                cell.style.backgroundColor = 'white'
        })
    })
}

function colorButtons() {
    buttons = document.querySelectorAll('BUTTON')

    buttons.forEach((button) => button.style.backgroundColor = user_color)
}

function reset() {
    colorButtons()
    clearGraph()
    displayGraph(user_size)
}

function hexToRGB(user_hex) {
    // console.log('user rgb ' + user_rgb)
    aRgbHex = user_hex.match(/.{1,2}/g)
    aRgb = "rgb("+
        parseInt(aRgbHex[0], 16)+ ", " +
        parseInt(aRgbHex[1], 16)+ ", " +
        parseInt(aRgbHex[2], 16)+
        ")"
    return aRgb
}

function rgbToHEX(user_rgb) {
    let rgb = user_rgb.split("(")[1].split(")")[0];

    rgb = rgb.split(",");

    let hex = rgb.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
    });

    hex = "#"+hex.join("");

    return hex
}

document.querySelector('#size').addEventListener('click', (e) => {
    user_size = prompt('Enter a number between 1 and 100: ')
    if (user_size > 0 && user_size < 101) {
        reset()
    } else
        alert('Invalid number.')
})

document.querySelector('#clear').addEventListener('click', (e) => {
    previous_board = clearGraph()
    displayGraph(Math.sqrt(previous_board))
})

document.querySelector('#color-button').addEventListener('mouseup', (e) => {
    color_selected = document.querySelector('#color-picker').value
    console.log(color_selected)

    if (color_selected != user_color){
        user_color = color_selected
    }

    reset()
})



displayGraph()