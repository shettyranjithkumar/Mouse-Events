//Mouseover Event
let content1=document.getElementById('content1');
var count1=0;

content1.addEventListener('mouseover',()=>{
    let num1=document.getElementById('num-1');
    count1 += 1;
    num1.innerHTML=count1;
})
//Mouseenter Event
let content2=document.getElementById('content2');
var count2=0;
content2.addEventListener('mouseenter',()=>{
    let num2=document.getElementById('num-2');
    count2 +=1;
    num2.innerHTML= count2;
})
//Mousemove Event
let content3=document.getElementById('content3');
var count3=0;
content3.addEventListener('mousemove',()=>{
    let num3=document.getElementById('num-3');
    count3 +=1;
    num3.innerHTML= count3;
})