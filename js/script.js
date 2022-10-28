let fName = document.querySelector('#fName');
let fReq = document.querySelector('#fReq');

let wrongRes = document.querySelector('#wrongRes');

if (fName.value === '' || '' || '' || '') {
  fReq.style.display = 'block';
} else {
  wrongRes.innerHTML = 'Սա մենակ հասուկի համարա պատրաստված'
}

/*let fBtn = document.querySelector("#fBtn");
fBtn.addEventListener("click", () => {
  fBtn.style.display = 'none';
});*/