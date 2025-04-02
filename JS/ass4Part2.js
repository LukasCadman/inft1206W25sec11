// Select DOM elements
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["../images/pic1.jpg", "../images/pic2.jpg", "../images/pic3.jpg", "../images/pic4.jpg", "../images/pic5.jpg"];

/* Declaring the alternative text for each image file */
const altText = {
    "../images/pic1.jpg": 'Picture of Eye',
    "../images/pic2.jpg": 'Picture of a wavy rock',
    "../images/pic3.jpg": 'Purple and white plants',
    "../images/pic4.jpg": 'Egyptian Wall Art',
    "../images/pic5.jpg": 'Picture of a moth on a leaf'
};

/* Looping through images */
images.forEach(image => {
    const newImage = document.createElement('img'); // Create a new img element
    newImage.setAttribute('src', `../images/${image}`); // Set the src to the image file
    newImage.setAttribute('alt', altText[image]); // Set the alt text to the corresponding value
    thumbBar.appendChild(newImage); // Append the new image to the thumb-bar
});

/* Adding a click event listener to each thumbnail image */
thumbBar.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {  // Ensure the clicked element is an image
        displayedImage.src = event.target.src;  // Set the large image to the clicked thumbnail
        displayedImage.alt = event.target.alt;  // Set the alt text for the large image
    }
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.classList.contains('dark')) {
        btn.classList.remove('dark');
        btn.classList.add('light');
        btn.textContent = 'Lighten'; // Change button text
        overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; // Apply dark overlay
    } else {
        btn.classList.remove('light');
        btn.classList.add('dark');
        btn.textContent = 'Darken'; // Change button text
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; // Remove overlay
    }
});
