SIZE = 16

function displayGraph(size=SIZE) {
    const area = document.querySelector("#grid-container")
    for (i=0;i<size;i++) {
        const cell = document.createElement("div")
        cell.textContent = i + 1
        area.appendChild(cell)
    }
}

displayGraph()