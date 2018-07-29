const listfa = document.querySelectorAll("#other h5");
 listfa.forEach(item=>{
    item.addEventListener("click",()=>{
        let cla = item.children[0].children[0];
        
        if(cla.className === "fa fa-sort-down"){
            cla.className = 'fa fa-sort-up'
        }else if(cla.className === "fa fa-sort-up"){
            cla.className = 'fa fa-sort-down'
        }
        
        
        
       
    })
})
// slider

const person = document.querySelectorAll('.person');
const rightChevron = document.querySelector('.slid-right');
const LeftChevron  = document.querySelector('.slid-left');

let index = 0;

const reset = ()=>{
    person.forEach(slider=>{
        slider.style.display="none"
    })
    
    
}

const firstImage = ()=>{
    reset();
    person[0].style.display = 'block';
    person[0].classList.add('fade-in');
   
}
const slidRight  =()=>{
    person[index +1].style.display = 'block';
    
    index++
    person[index ].classList.add('fade-in');
 
}
rightChevron.addEventListener("click",()=>{
   reset();
   if(index === person.length -1){
       index = -1
   }
  
   slidRight()
 
})
const slidLeft  =()=>{
    person[index -1].style.display = 'block'
    index--
    person[index ].classList.add('fade-in');
    
}
LeftChevron.addEventListener("click",()=>{
   reset();
   if(index === 0){
       index = person.length 
   }
   slidLeft()
 
})


firstImage()



//scroll 
const up = document.querySelector('#fixed');
document.addEventListener('scroll',()=>{
    console.log(document.documentElement.scrollTop)
  if(window.pageYOffset >850){
     up.style.opacity = '1'
  }else{
      up.style.opacity = '0'
  }

})


//scroll animaton

document.querySelector('#button').addEventListener('click',()=>{
    scrollTo(document.documentElement, 0, 1250);   
})
     
const scrollTo = (element, to, duration)=> {
    let start = element.scrollTop,
         change = to - start,
         currentTime = 0,
         increment = 20;
         
     const animateScroll = ()=>{        
         currentTime += increment;
         let val = Math.easeInOutQuad(currentTime, start, change, duration);
         element.scrollTop = val;
         if(currentTime < duration) {
             setTimeout(animateScroll, increment);
         }
     };
     animateScroll();
 }
 
 
 Math.easeInOutQuad = function (t, b, c, d) {
   t /= d/2;
     if (t < 1) return c/2*t*t + b;
     t--;
     return -c/2 * (t*(t-2) - 1) + b;
 };

