// script.js
const container = document.getElementById('puzzle-container');
const message = document.getElementById('message');
const totalPieces = 9;
let currentOrder = [5, 2, 8, 1, 9, 3, 7, 4, 6]; // Ordem embaralhada inicial

function checkWin() {
    const isOrdered = currentOrder.every((val, index) => val === index + 1);
    if (isOrdered) {
        message.style.display = 'block';
        document.querySelectorAll('.piece').forEach(p => p.classList.add('correct'));
    }
}

function renderPuzzle() {
    container.innerHTML = '';
    currentOrder.forEach((num, index) => {
        const div = document.createElement('div');
        div.className = 'piece';
        div.innerText = num;
        
        // Simulação de troca de posição (clique em uma, depois na outra)
        div.onclick = () => handleSwap(index);
        container.appendChild(div);
    });
}

let selectedIndex = null;

function handleSwap(index) {
    if (selectedIndex === null) {
        selectedIndex = index;
        container.children[index].style.border = "3px solid orange";
    } else {
        // Troca os valores no array
        let temp = currentOrder[selectedIndex];
        currentOrder[selectedIndex] = currentOrder[index];
        currentOrder[index] = temp;
        
        selectedIndex = null;
        renderPuzzle();
        checkWin();
    }
}

renderPuzzle();