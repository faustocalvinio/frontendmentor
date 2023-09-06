const featuresLink=document.getElementById('features');
const featuresDropdown=document.querySelector('.features-dropdown')


featuresLink.addEventListener('mouseover',()=>{
    featuresDropdown.classList.toggle('hide')
})