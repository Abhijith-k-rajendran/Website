const burgerList = document.querySelector('.burgerList');
const burgerMenu = document.querySelector('.burgerMenu');
const spEl1 = document.getElementById('spOne');
const spEl2 = document.getElementById('spTwo');
const spEl3 = document.getElementById('spThree');
const shimmer = document.querySelector('.shimmer');
const burgerLi = document.querySelector('.burgerList');
const bodyEl = document.querySelector('body');

function toggleNavLi() {
    if (burgerMenu.classList.contains('navActive')) {
        burgerMenu.classList.remove('navActive');
        burgerList.style.display = 'none';
        shimmer.style.display = "none";
        spEl1.style.transform = "rotate(0) translate(0,0)";
        spEl1.style.background = "#000";
        spEl3.style.transform = "rotate(0) translate(0,0)";
        spEl3.style.background = "#000";
        spEl2.style.opacity = "1";
    } else {
        burgerMenu.classList.add('navActive');
        shimmer.style.display = "flex";
        spEl1.style.transform = "rotate(45deg) translate(0px, 11.2px)";
        spEl1.style.background = "#fff";
        spEl3.style.transform = "rotate(-45deg) translate(0px, -11.2px)";
        spEl3.style.background = "#fff";
        spEl2.style.opacity = "0";
        burgerList.style.display = 'flex';
    }
}

shimmer.addEventListener('click', () => {
    shimmer.style.display = "none";
    shimmer.style.transition = '0.8s ease-in-out';
    burgerLi.style.display = 'none';
    spEl1.style.transform = "rotate(0) translate(0,0)";
    spEl1.style.background = "#000";
    spEl3.style.transform = "rotate(0) translate(0,0)";
    spEl3.style.background = "#000";
    spEl2.style.opacity = "1";
});

const colorArr = ['#ffe3e3', '#3ffeded', '#ecf1ff', '#eff5e4', '#f7fded']

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

function changeBg(color) {
    bodyEl.style.background = color;
    bodyEl.style.transition = '0.8s ease-in-out 0.4s'
};

setInterval(()=>{
    changeBg(getRandomItem(colorArr))
},3000)

