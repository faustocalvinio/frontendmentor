const qs=(param)=>document.querySelector(param);
const qsa=(param)=>document.querySelectorAll(param);
const iconElipsis=qsa('.icon-elipsis')
const daily=qs('#daily');
const weekly=qs('#weekly');
const monthly=qs('#monthly');
const subjectsArray=qsa('.subject');
const arrayHoursText=document.querySelectorAll('.text-hrs')
const lastHoursArr=document.querySelectorAll('.l-w-hours-span')
const url='../data.json'

fetch(url)
.then(response=>response.json())
.then(data=>finalData=data)



daily.addEventListener('click',()=>{
    monthly.classList.toggle('active',false)
    weekly.classList.toggle('active',false)
    daily.classList.toggle('active')
    for (let index = 0; index <=5; index++) {
        subjectsArray[index].innerHTML=finalData[index].title;
        arrayHoursText[index].innerHTML=finalData[index].timeframes.daily.current;
        lastHoursArr[index].innerHTML=finalData[index].timeframes.daily.previous;        
    }
})

weekly.addEventListener('click',()=>{
    daily.classList.toggle('active',false)
    monthly.classList.toggle('active',false)
    weekly.classList.toggle('active')
    for (let index = 0; index <=5; index++) {
        subjectsArray[index].innerHTML=finalData[index].title;
        arrayHoursText[index].innerHTML=finalData[index].timeframes.weekly.current;
        lastHoursArr[index].innerHTML=finalData[index].timeframes.weekly.previous;                
    }
});

monthly.addEventListener('click',()=>{
    daily.classList.toggle('active',false)
    weekly.classList.toggle('active',false)
    monthly.classList.toggle('active')
    for (let index = 0; index <=5; index++) {
        subjectsArray[index].innerHTML=finalData[index].title;
        arrayHoursText[index].innerHTML=finalData[index].timeframes.monthly.current;        
        lastHoursArr[index].innerHTML=finalData[index].timeframes.monthly.previous;        
    }
})


