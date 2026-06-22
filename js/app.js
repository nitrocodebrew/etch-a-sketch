// Query selector shortcut
const $ = q => document.querySelector(q);

// UI elements
const sketchGridContainer = $('.sketch-grid-container');

// Dynamically generate a custom sized sketch grid
const generateSketchGrid = size => {
    // First, clear any existing content in the container
    sketchGridContainer.innerHTML = '';

    let i = 0;
    for(; i < (size * size);) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('sketch-grid-cell');
        gridCell.style.height = `calc(100% / ${size})`;
        gridCell.style.width = `calc(100% / ${size})`;
        sketchGridContainer.appendChild(gridCell);
        i++;
    }
}

// Initialize default 16 by 16 grid
generateSketchGrid(16);