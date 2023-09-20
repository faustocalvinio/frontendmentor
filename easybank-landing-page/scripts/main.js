const responsiveMenu = document.querySelector('#responsive-menu-container');
const anchorNav=document.querySelectorAll('.nav-a');    
const itemSvgIcon=document.getElementById('svg-container');
const hamburgerIcon= document.getElementById('svg-hamburger');
const crossIcon= document.getElementById('svg-cross');
let hiddenMenu=true;

itemSvgIcon.addEventListener('click',()=>{
    console.log('clicked')
    if(hiddenMenu){
    crossIcon.style.display='block';
    hamburgerIcon.style.display='none';
    responsiveMenu.classList.add('show-responsive');
    responsiveMenu.classList.remove('hide-responsive');
    hiddenMenu=false

    }
    else if (!hiddenMenu){
    crossIcon.style.display='none';
    hamburgerIcon.style.display='block';
    responsiveMenu.classList.remove('show-responsive');
    responsiveMenu.classList.add('hide-responsive');
    hiddenMenu=true;
    }
})


anchorNav.forEach(anchor=>{
    anchor.addEventListener('mouseenter',()=>{
    const line=anchor.getElementsByTagName('hr')
    console.log(line)
    line[0].classList.add('show-opacity')
    })
})
anchorNav.forEach(anchor=>{
    anchor.addEventListener('mouseleave',()=>{
    const line=anchor.getElementsByTagName('hr')
    console.log(line)
    line[0].classList.remove('show-opacity')
    })
})