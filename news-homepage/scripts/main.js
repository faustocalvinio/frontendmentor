const openResponsiveMenu=document.querySelector('.hamburger-icon')
const closeResponsiveMenu=document.querySelector('.close-responsive-menu')

const containerMenuResponsive=document.querySelector('.responsive-nav-list')


openResponsiveMenu.addEventListener('click',()=>{
    containerMenuResponsive.classList.remove('hide-menu')
    containerMenuResponsive.classList.remove('show-menu')
    containerMenuResponsive.classList.toggle('show-menu')
})
closeResponsiveMenu.addEventListener('click',()=>{

    containerMenuResponsive.classList.toggle('hide-menu')
    // setTimeout(()=>containerMenuResponsive.classList.remove('hide-menu'),1000)
})
