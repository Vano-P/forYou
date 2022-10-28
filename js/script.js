let fName = document.querySelector('#fName');
let fReq = document.querySelector('#fReq');

let wrongRes = document.querySelector('#wrongRes');

if (fName.value === 'Հասմիկ' || 'հասուկ' || 'Հասուկի' || 'Հասո') {
  fReq.style.display = 'block';
} else {
  wrongRes.innerHTML = 'Սա մենակ հասուկի համարա պատրաստված, էնպես, որ ՀԱՋՈՂՈՒԹՅՈՒՆ ' + fName;
}

/*let fBtn = document.querySelector("#fBtn");
fBtn.addEventListener("click", () => {
  fBtn.style.display = 'none';
});*/