

  /**let a=document.querySelector(".counter");  
  let b=document.querySelector(".increment");
  let c=document.querySelector(".derement");   
  let number=0;  
  a.innerHTML=number;
  b.addEventListener("click",function(){
    number=number+1; 
 a.innerHTML=number;
                  });
c.addEventListener("click",function(){
    number=number-1; 
 a.innerHTML=number;
                  });**/

 let a=document.querySelector(".counter");
 let b=document.querySelector(".increment");
 let d=document.querySelector(".reset");
 let c=document.querySelector(".decrement");
 let number=0;
 a.innerHTML=number;
 b.addEventListener("click",function(){
    number=number+1;
    a.innerHTML=number;
 }) 
 d.addEventListener("click",function(){
    number=0
    a.innerHTML=number;
 }); 
 c.addEventListener("click",function(){
    number=number-1;
    a.innerHTML=number;
 });     