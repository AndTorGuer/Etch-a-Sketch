const container = document.getElementById('grid');

function makeRows(rows,cols) {
    // creates a custom CSS property by --customName
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols',cols);
    // creates the grid by looping
    for(c = 0; c < (rows * cols); c++)
    {
        let cell = document.createElement('div');
        cell.innerText = (c + 1);
        grid.appendChild(cell).className = 'grid-item';
    }; 
};

makeRows(16,16);

function clearGrid(){
    $(".grid").remove();
};  









