const elem = document.querySelector('input');
console.log(elem.value);
console.log('test');

const emin = document.querySelector('.e-min').innerHTML;
const esec = document.querySelector('.e-sec').innerHTML;

const calcMusicTime = (emin, esec) => {
  return Number(emin) * 60 + Number(esec);
};

elem.setAttribute('max', calcMusicTime(emin, esec));

const rangeValue = () => {
  const nowValue = Number(elem.value);
  const smin = document.querySelector('.s-min');
  const ssec = document.querySelector('.s-sec');
  let newRemain = calcMusicTime(emin, esec) - nowValue;
  smin.innerHTML = Math.floor(newRemain / 60);
  ssec.innerHTML = Math.floor(newRemain % 60);
};

elem.addEventListener('input', rangeValue);
