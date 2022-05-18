const test = () => {
  console.log("Testujemy gulp'a"); // komentarz
};

test();

const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('img');

console.log(images);
buttons[0].addEventListener('click', () => {
  for (const image of images) {
    image.setAttribute('src', './dist/img/back-card.png');
  }
});

buttons[1].addEventListener('click', () => {
  images[0].setAttribute('src', './dist/img/queen-diamonds.png');
  images[1].setAttribute('src', './dist/img/queen-spades.png');
  images[2].setAttribute('src', './dist/img/queen-hearts.png');
});
