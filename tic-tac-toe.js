document.addEventListener('DOMContentLoaded', function () {
    var squares = document.querySelectorAll('#board > div');
    squares.forEach(function (sq) {
        sq.classList.add('square');

        // optional: visual hover state (matches CSS .hover rules)
        sq.addEventListener('mouseenter', function () { sq.classList.add('hover'); });
        sq.addEventListener('mouseleave', function () { sq.classList.remove('hover'); });
    });
});