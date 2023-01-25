//Set button and text display variables
let btnYes = document.getElementById("btn-yes");
let btnNo = document.getElementById("btn-no");
let cntYes = document.getElementById("cnt-yes");
let cntNo = document.getElementById("cnt-no");

let cntBtnClicksYes = 0;
let cntBtnClicksNo = 0;

//Use event listeners to iterate count of button clicks
//Return value to text display variables in webpage
btnYes.addEventListener("click", function() {
    cntBtnClicksYes ++;
    cntYes.innerHTML = cntBtnClicksYes;
  });

  btnNo.addEventListener("click", function() {
    cntBtnClicksNo ++;
    cntNo.innerHTML = cntBtnClicksNo;
  });