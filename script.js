var b=document.querySelector('button');
var w=document.querySelector('html');
var h=document.querySelector('h3');
b.addEventListener('click',()=>{document.querySelector('audio').play();});

var count = -1;
  b.onclick = function () {
    count++;
    if (count==0){
    h.innerHTML="Level 1";
    b.style.animation='One 2s linear infinite';
    }
    else if (count==5){
      h.innerHTML="Level 2";
      b.style.animation = 'Two 2s Linear infinite';
      b.style.backgroundColor='black';
      w.style.backgroundColor='red';
    }
    else if (count==14){
    h.innerHTML="Level 3";
    b.style.animationDirection='reverse';
    }
    else{h.innerHTML = count;}}