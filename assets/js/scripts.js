const mario = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe-obstacle');

const jump = () => {
  mario.classList.add('jump-mario');

  setTimeout(() => {
    mario.classList.remove('jump-mario');
  }, 500);
}

document.body.addEventListener('keydown', jump);
document.body.addEventListener('click', jump);