let fName = document.querySelector('#fName');
let fBtn = document.querySelector('#fBtn');
let body = document.querySelector('body');
let fReq = document.querySelector('#fReq');
let sBtn = document.querySelector('#sBtn');
let sReq = document.querySelector('#sReq');
let tBtn = document.querySelector('#tBtn');
let h2 = document.querySelector('h2');
let h2T = document.querySelector('.inText');

function fBtnF(){
  if (
      fName.value === 'Հասմիկ'
      ||
      fName.value === 'Հասո'
      ||
      fName.value === 'Հասուկի'
      ||
      fName.value === 'Հասուկ'
    )
  {
    fName.style.display = 'none';
    fBtn.style.display = 'none';
    fReq.style.display = 'block';
    sBtn.style.display = 'block';
  } else if (fName.value === '') {
    fBtnF();
  } else {
    body.style.display = 'none';
    window.close();
    alert('Սա մենակ հասուկի համարա պատրաստված, էնպես, որ ՀԱՋՈՂՈՒԹՅՈՒՆ');
  }
}

function sBtnF(){
  if (
      fReq.value === 'Վանոին'
      ||
      fReq.value === 'Վանուշին'
      ||
      fReq.value === 'Վանուկիին'
      ||
      fReq.value === 'Վանին'
    )
  {
    fReq.style.display = 'none';
    sBtn.style.display = 'none';
    sReq.style.display = 'block';
    tBtn.style.display = 'block';
  } else if (fReq.value === '') {
    sBtnF();
  } else {
    body.style.display = 'none';
    window.close();
    alert('Ուրեմն սաղ անիմաստա, ՀԱՋՈՂՈՒԹՅՈՒՆ');
  }
}

function tBtnF(){
  if (
      sReq.value === 'Այո'
      ||
      sReq.value === 'Հա'
    )
  {
    sReq.style.display = 'none';
    tBtn.style.display = 'none';
    h2.innerHTML='❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️';
    h2T.innerHTML='❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️';
  } else if (sReq.value === '') {
    tBtnF();
  } else {
    body.style.display = 'none';
    window.close();
    alert('Ուրեմն սաղ անիմաստա, ՀԱՋՈՂՈՒԹՅՈՒՆ');
  }
}