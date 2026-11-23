// The change header image button
const imgBtn = document.querySelector('#imageBtn'); 

// The header image
const headerImg = document.querySelector('#headerImage');

// Our image paths
const firstImage = '../assets/members/rei/IMG_6131.jpg';
const secondImage = '../assets/members/rei/scaryRei.png';

imgBtn.addEventListener('click', function(){

    if (headerImg.getAttribute('src') === firstImage){
        headerImg.src = secondImage;
    } else {
        headerImg.src = firstImage;
    }

});

// Overlay
const overlay = document.querySelector('#overlay');
// overlay img
const overlayImg = document.querySelector('#overlayImg');

headerImg.addEventListener('click', function(){
    overlayImg.src = headerImg.src;
    overlay.classList.remove('hidden');
});

overlay.addEventListener('click', function(){
    overlay.classList.add('hidden');
});
