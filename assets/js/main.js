function toggleNavLi(){
    const burgerList = document.querySelector('.burgerList');
    const burgerMenu = document.querySelector('.burgerMenu');
    const spEl1 = document.getElementById('spOne');
    const spEl2 = document.getElementById('spTwo');
    const spEl3 = document.getElementById('spThree');
    const shimmer = document.querySelector('.shimmer');

    if(burgerMenu.classList.contains('navActive')){
        burgerMenu.classList.remove('navActive');
        burgerList.style.display = 'none';
        shimmer.style.display = "none";
        spEl1.style.transform = "rotate(0) translate(0,0)";
        spEl3.style.transform = "rotate(0) translate(0,0)";
        spEl2.style.opacity = "1";
    }else{
        burgerMenu.classList.add('navActive');
        shimmer.style.display = "flex";
        spEl1.style.transform = "rotate(45deg) translate(0px, 11.2px)";
        spEl3.style.transform = "rotate(-45deg) translate(0px, -11.2px)";
        spEl2.style.opacity = "0";
        burgerList.style.display = 'flex';
    }
}