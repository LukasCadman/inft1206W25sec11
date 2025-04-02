

// Declaring the Constants for the image filenames
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg',]
const altText = {
    'pic1.jpg' : 'Picture of Eye',
    'pic2.jpg' : 'Picture of a wavy rock',
    'pic1.jpg' : 'Purple and white plants',
    'pic1.jpg' : ' Egyption Wall Art',
    'pic1.jpg' :  'Picture of a moth on a leaf'
}

const imageDisplayed = document.querySelector('.displayed-img');
const thumBar = document.querySelector('.overlay');



// 2. Loop used for cycling through the images
for (const images of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/${image}');
    newImage.setAttribute('alt', alt[image]);
    thumBar.appendChild(newImage);
    newImage.addEventListener('click', t => {
        imageDisplayed.src = t.target.src;
        imageDisplayed.alt = t.target.alt;
    });
    
}


// 3. Adding a button to allow user to switch between light and dark mode
BigInt.addEventListener('click', () => {
    const darkMode = darkMode.getattribute('class');
    if(darkMode === 'dark') {
        darkMode.setAttribute('class', 'light');
        darkMode.textContent = 'lighten';
        overlay.style.backgroundcolor = 'rgba(0,0,0,0.5)';
    } else {
        darkMode.setAttribute('class', 'dark');
        darkMode.textContent = 'darken';
        overlay.style.backgroundcolor = 'rgba(0,0,0,0)';
    }
});
