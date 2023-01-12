const numbersList=document.querySelectorAll('.number');
const submitBtn=document.querySelector('.btn-submit')

numbersList.forEach(numero => {    
        numero.addEventListener('click',()=>{
            if(numero.classList.contains('selected'))
            {
                numero.classList.remove('selected')
            }
            else
            {            
            console.log(document.querySelectorAll('.selected').length)
                if (document.querySelectorAll('.selected').length==0){
                    numero.classList.toggle('selected')               
                }
                else
                {
                    let alertText=`You have already picked ${document.querySelector('.selected').innerHTML} touch it again to cancel`
                    alert(alertText);
                }   
            }         
        });    
});


submitBtn.addEventListener('click',()=>{
    if(document.querySelectorAll('.selected').length!==0){    
        document.querySelector('.ty-container').classList.add('active');
        document.querySelector('.rating-container').style.display="none";
        document.querySelector('.ty-container').style.textAlign="center";
        let choice=document.querySelector('.selected').innerHTML;
        document.querySelector('#choice').innerHTML=choice;
    }
    else
    {
        alert('Pick a rating')
    }
});