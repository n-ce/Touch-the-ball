var b=document.querySelector('button');
var h=document.querySelector('h1');
b.addEventListener('click',()=>{document.querySelector('audio').play();});

var count = 0;
  b.onclick = function () {
    count++;
    if (count==5){
    h.innerHTML="You Won!";}
    else if (count==7){
      h.innerHTML="Level 2";
      b.style.animation = 'move 2s ease-in-out infinite';
    }
    else{h.innerHTML = count;}}