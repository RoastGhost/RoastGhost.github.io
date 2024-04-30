const div1_info_m = "This is the first div.";
const div2_info_m = "This is the second div.";
const div3_info_m = "This is the third div.";


const squares_m = document.querySelectorAll('.preview-button-m');
const circles_m = document.querySelectorAll('.circle-m');
const divs_m = document.querySelectorAll('.info-div-m'); // Get all info-divs_m
const tags_m = document.querySelectorAll('.machine-tag-m'); // Get all info-divs_m
const names_m = document.querySelectorAll('.machine-name-m'); // Get all info-divs_m
const descriptions_m = document.querySelectorAll('.machine-description-m'); // Get all info-divs_m



squares_m.forEach((square, index) => {
    square.addEventListener('click', () => {
        // Remove 'selected' class from all squares_m
        squares_m.forEach(s => s.classList.remove('selected-m'));
        // Add 'selected' class to the clicked square
        square.classList.add('selected-m');
        // Add 'selected' class to the corresponding circle
        circles_m.forEach((c, cIndex) => {
            if (cIndex === index) {
                c.classList.add('selected-m');
            } else {
                c.classList.remove('selected-m');
            }
        });

        // Show the corresponding div based on the selected index
        divs_m.forEach((div, divIndex) => {
            if (divIndex === index) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        });

        // Show the corresponding tag based on the selected index
        tags_m.forEach((tag, tagIndex) => {
            if (tagIndex === index) {
                tag.style.display = 'block';
            } else {
                tag.style.display = 'none';
            }
        });

        // Show the corresponding name based on the selected index
        names_m.forEach((name, nameIndex) => {
            if (nameIndex === index) {
                name.style.display = 'block';
            } else {
                name.style.display = 'none';
            }
        });

        // Show the corresponding descr based on the selected index
        descriptions_m.forEach((description, descriptionIndex) => {
            if (descriptionIndex === index) {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });

    });
});