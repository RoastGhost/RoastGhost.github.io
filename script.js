const squares = document.querySelectorAll('.preview-button');
const circles = document.querySelectorAll('.circle');

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        // Remove 'selected' class from all squares
        squares.forEach(s => s.classList.remove('selected'));
        // Add 'selected' class to the clicked square
        square.classList.add('selected');
        // Add 'selected' class to the corresponding circle
        circles.forEach((c, cIndex) => {
            if (cIndex === index) {
                c.classList.add('selected');
            } else {
                c.classList.remove('selected');
            }
        });
    });
});
