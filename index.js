const refreshButton = document.querySelector('.btn');
const images = document.querySelectorAll('.image-container img');

refreshButton.addEventListener('click', () => {
  images.forEach((img, index) => {
    img.src = `https://picsum.photos/300?random=${Math.random()}`;
  });
});