const quest1 = document.getElementById('quest1');
function questOne() {
  document.getElementById('ans1').classList.toggle('visual');
}
function questTwo() {
  document.getElementById('ans2').classList.toggle('visual');
}
function questThree() {
  document.getElementById('ans3').classList.toggle('visual');
}
function questFour() {
  document.getElementById('ans4').classList.toggle('visual');
}
function questFive() {
  document.getElementById('ans5').classList.toggle('visual');
}

window.addEventListener('scroll', (event) => {
  let scroll = this.scrollY;
  if (scroll > 100) {
    document.getElementById('header').classList.add('bg');
  }
  if (scroll <= 100) {
    document.getElementById('header').classList.remove('bg');
  }
});

function modalFunc() {
  const modal = document.getElementById('modal');
  modal.classList.toggle('hidden');
}
