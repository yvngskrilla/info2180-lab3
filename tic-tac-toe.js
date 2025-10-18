document.addEventListener('DOMContentLoaded', function () {
    var squares = document.querySelectorAll('#board > div');
    var currentPlayer = 'X'; 
    var gameState = Array(9).fill(null); 

    squares.forEach(function (sq, index) {
        sq.classList.add('square');

        
        sq.addEventListener('mouseenter', function () { sq.classList.add('hover'); });
        sq.addEventListener('mouseleave', function () { sq.classList.remove('hover'); });

        
        sq.addEventListener('click', function () {
            if (!gameState[index]) { 
                gameState[index] = currentPlayer; 
                sq.textContent = currentPlayer; 
                sq.classList.add(currentPlayer); 

                
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});