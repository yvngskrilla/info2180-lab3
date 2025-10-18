document.addEventListener('DOMContentLoaded', function () {
    var squares = document.querySelectorAll('#board > div');
    var currentPlayer = 'X'; 
    var gameState = Array(9).fill(null); 
    var statusDiv = document.getElementById('status');
    var newGameButton = document.querySelector('.btn'); // Select the New Game button

    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(function (sq, index) {
        sq.classList.add('square');

        
        sq.addEventListener('mouseenter', function () { sq.classList.add('hover'); });
        sq.addEventListener('mouseleave', function () { sq.classList.remove('hover'); });

        
        sq.addEventListener('click', function () {
            if (!gameState[index] && !statusDiv.classList.contains('you-won')) { 
                gameState[index] = currentPlayer; 
                sq.textContent = currentPlayer; 
                sq.classList.add(currentPlayer); 

                if (checkWinner(currentPlayer)) {
                    statusDiv.textContent = 'Congratulations! Player ' + currentPlayer + ' wins!';
                    statusDiv.classList.add('you-won');
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';                
                }
            }
        });
    });

    
    newGameButton.addEventListener('click', function () {
        gameState.fill(null);
        currentPlayer = 'X';
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');

        squares.forEach(function (sq) {
            sq.textContent = '';
            sq.classList.remove('X', 'O');
        });
    });

    function checkWinner(player) {
        return winningCombinations.some(function (combination) {
            return combination.every(function (index) {
                return gameState[index] === player;
            });
        });
    }
});