let SIZE = 16
let user_size = null

function displayGraph(size=SIZE) {
    const area = document.querySelector("#grid-container");
    area.style.gridTemplateColumns = "repeat("+size+", 1fr)";
    size = size**2
    for (i=0;i<size;i++) {
        const cell = document.createElement("div")
        cell.textContent = i + 1
        // cell.id = i + 1
        cell.classList = 'cell'
        area.appendChild(cell)
    }
}

function clearGraph() {
    const area = document.querySelector("#grid-container")
    for (i=area.childElementCount;i>0;i--) {
        console.log('C:' + area.lastChild)
        area.removeChild(area.lastChild)
    }
}

document.querySelector('#size').addEventListener('click', (e) => {
    user_size = prompt('Enter a number between 1 and 100: ')
    if (user_size > 0 && user_size < 101) {
        clearGraph()
        displayGraph(user_size)
    } else
        alert('Invalid number.')
})

displayGraph()