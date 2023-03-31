import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createImageGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// galleryContainer.addEventListener('click', onGalleryClick);

function createImageGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
            <a class="gallery__link" href="${original}">
               <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            </li> 
            `;
        })
        .join('');
};
// function onGalleryClick(evt) {
//     evt.preventDefault();
//     if (evt.target.nodeName !== "IMG") {
//         return;
//     }
//     const instance = basicLightbox.create(`
// <img src="${evt.target.dataset.source}"
// />
// `)
//     instance.show()
// };

const gallery = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250,
});



