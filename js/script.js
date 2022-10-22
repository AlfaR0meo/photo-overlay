const pageWrapper = document.querySelector('.page-wrapper');

const galleryBoxElement = document.createElement('div');
galleryBoxElement.classList.add('gallery');

pageWrapper.appendChild(galleryBoxElement);


const imageSrcPath = './img/';

const imageSrcs = [
    "1.jpg","2.jpg","3.jpg",
    "4.jpg","5.jpg","6.jpg",
    "7.jpg","8.jpg","9.jpg"
];
const imageTitles = [
    "image 1","image 2","image 3",
    "image 4","image 5","image 6",
    "image 7","image 8","image 9"
];


for (let i = 0; i < 9; i++) {
    const galleryItemElement = document.createElement('div');
    galleryItemElement.classList.add('gallery__item');
    galleryBoxElement.appendChild(galleryItemElement);

    const imageElement = document.createElement('img');
    imageElement.src = imageSrcPath + imageSrcs[i];
    imageElement.title = imageTitles[i];
    galleryItemElement.appendChild(imageElement);
}

galleryBoxElement.addEventListener('click', function(e) {
    const targetElement = e.target;
    if (targetElement.closest('.gallery__item')) {
        openPhoto(targetElement);
    }
});

function openPhoto(targetElement){
    const overlayBox = document.createElement('div');
    overlayBox.classList.add('overlay');
    document.body.appendChild(overlayBox);

    const overlayPhoto = document.createElement('img');
    overlayPhoto.classList.add('overlay__photo');
    overlayPhoto.src = targetElement.src;

    overlayBox.appendChild(overlayPhoto);

    overlayBox.addEventListener('click', (e) => {
        if (!e.target.closest('.overlay__photo')) {
            overlayBox.remove();
        }
    });
};





