// Query selector shortcut
const $ = q => document.querySelector(q);

// UI elements
const sketchGridContainer = $('.sketch-grid-container');
const newSketchGridBtn = $('.new-grid-btn');

/**
 * Use event delegation rather than attaching an event listener to 
 * every single grid cell in the for loop. A 100 x 100 grid would 
 * have thousands and thousands of event listeners! There's a better 
 * way. 
 */

sketchGridContainer.addEventListener('mouseover', e => {
    if(e.target.classList.contains('sketch-grid-cell'))
        e.target.classList.add('filled');
});

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