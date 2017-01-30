const hamburger = document.getElementById('ham')
const mainMenu = document.getElementsByClassName('main-menu')[0];
const menuPage = document.getElementsByClassName('menu-page')[0];
const introSection = document.getElementsByClassName('intro-section')[0];
const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');
const menuButtons = document.getElementsByClassName('button-group');

console.log(mainMenu);
console.log(introSection);

hamburger.addEventListener("click", clickedMenu);

for (var i = 0; i < menuButtons.length; i++) {
      menuButtons[i].addEventListener("click", clickedMenu);
}

function clickedMenu () {
  if (mainMenu.style.display == "block") {
    mainMenu.style.display = "none";
    menuPage.style.display = "none";
    introSection.style.display = "flex";
    line1.style.transform = "rotate(180deg)";
    line1.style.top = "0px";
    line3.style.transform = "rotate(180deg)";
    line2.style.display = "block"

  } else {
    mainMenu.style.display = "block";
    menuPage.style.display = "flex";
    introSection.style.display = "none";
    line1.style.transform = "rotate(45deg)";
    line1.style.top = "9px";
    line3.style.transform = "rotate(135deg)";
    line2.style.display = "none"
  }
}
