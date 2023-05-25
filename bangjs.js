const container = document.querySelector('.container');
const allMole = document.querySelectorAll('.item');
const mulaigem = document.getElementById('mulaigem');
const resetgem = document.getElementById('resetgem');
let mulai,waktuMulai,waktu = 20,skor = 0;


const hitungwaktu = document.getElementById('time-count');

const hitungskor = document.getElementById('score-count');

resetgem.addEventListener('click',function(){
skor=0;
hitungskor.innerHTML = skor;
waktu=20;
hitungwaktu.innerHTML = waktu;
clearInterval(mulai);
clearInterval(waktuMulai);
});

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('mole-clicked')) {
    skor++
    hitungskor.innerHTML = skor;

    const bush = e.target.parentElement.previousElementSibling;

    let text = document.createElement('span');
    text.setAttribute('class', 'whack-text');
    text.innerHTML = 'Whack!';
    bush.appendChild(text);

    setTimeout(() => {
      text.remove();
    }, 300);
  }
})

mulaigem.addEventListener('click', () => {
  // total game time is 20 seconds
  resetgem.click();
  waktuMulai = setInterval(() => {
    hitungwaktu.innerHTML = waktu;
    waktu--;
  }, 1000);

  mulai = setInterval(() => {
    showMole();
  }, 600);
});

function showMole() {
  if (waktu <= 0) {
    clearInterval(mulai);
    clearInterval(waktuMulai);
    hitungwaktu.innerHTML = '0';
  }
  let moleToAppear = allMole[getRandomValue()].querySelector('.mole');
  moleToAppear.classList.add('mole-appear');
  hideMole(moleToAppear);
}

function getRandomValue() {
  let rand = Math.random() * allMole.length;
  return Math.floor(rand);
}

// hide Mole
function hideMole(moleToAppear) {
  setTimeout(() => {
    moleToAppear.classList.remove('mole-appear');
  }, 1000);
}
