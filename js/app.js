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

// Let the user define a custom grid size
newSketchGridBtn.addEventListener('click', clickEvent => {
    clickEvent.stopPropagation();

    const gridSizeInput = prompt(
        "Enter a number between 1 and 100. This will create a square sketch grid to work on with those dimensions.",
        16
    );

    // If the user clicks cancel, immediately exit the listener to prevent errors
    if(null === gridSizeInput) return;

    const gridCellSize = +gridSizeInput.trim();

    // Input is not numeric
    if(Number.isNaN(gridCellSize)) {
        alert('Please enter a valid number (1 - 100).');
        return;
    }

    if(!gridCellSize) gridCellSize = 16;
    else if(gridCellSize < 1) gridCellSize = 1;
    else if(gridCellSize > 100) gridCellSize = 100;

    generateSketchGrid(gridCellSize);
    
});