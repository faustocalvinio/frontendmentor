const idAdvice=document.querySelector('#advice-number');
const headerAdvice=document.querySelector('#advice-content');
const diceButton=document.querySelector('.dice-cont')

const url = 'https://api.adviceslip.com/advice';

const getAdvice=async()=>{
  try{
    const resp=await fetch(url);
    const data=await resp.json();
    const answerId=data.slip.id;
    const answerAdvice=data.slip.advice;
    idAdvice.innerHTML=answerId;
    headerAdvice.innerHTML=answerAdvice;
  } catch (err){
    console.log(`Something went wrong! ${err}`)
  }
};

getAdvice();

diceButton.addEventListener('click',getAdvice);