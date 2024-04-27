// Placeholder info for the three divs
const div1_info = "This is the first div.";
const div2_info = "This is the second div.";
const div3_info = "This is the third div.";

// JavaScript code snippet
const squares = document.querySelectorAll('.preview-button');
const circles = document.querySelectorAll('.circle');
const divs = document.querySelectorAll('.info-div'); // Get all info-divs
const tags = document.querySelectorAll('.machine-tag'); // Get all info-divs
const names = document.querySelectorAll('.machine-name'); // Get all info-divs
const descriptions = document.querySelectorAll('.machine-description'); // Get all info-divs

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

        // Show the corresponding div based on the selected index
        divs.forEach((div, divIndex) => {
            if (divIndex === index) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });

        // Show the corresponding tag based on the selected index
        tags.forEach((tag, tagIndex) => {
            if (tagIndex === index) {
                tag.style.display = 'block';
            } else {
                tag.style.display = 'none';
            }
        });

        // Show the corresponding name based on the selected index
        names.forEach((name, nameIndex) => {
            if (nameIndex === index) {
                name.style.display = 'block';
            } else {
                name.style.display = 'none';
            }
        });

        // Show the corresponding descr based on the selected index
        descriptions.forEach((description, descriptionIndex) => {
            if (descriptionIndex === index) {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });

    });
});
