const nav = document.querySelector('nav');


nav.innerHTML = `
<div id="homeBtnContainer"><img src="../media/icons/placeholderIcon.svg"><div>Om oss</div></div>
<div id="imageContainer"><img src="../media/icons/title.svg"><li>Limhamn 1900-talet</li></div>
<div id="mapBtnContainer"><img src="../media/icons/iconGlobe.svg"><div>Karta</div>`;

//sätt nav logic här
const mapBtn = document.getElementById('mapBtnContainer');
const overlay = document.getElementById('imageOverlay');


mapBtn.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.classList.remove('hide');
    console.log('click');
});

overlay.addEventListener("click", (event) => {
    event.preventDefault();
    overlay.classList.add('hide');
    console.log('clock');
})