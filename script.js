var b=document.querySelector('button');
var w=document.querySelector('html');
var h=document.querySelector('h1');
b.addEventListener('click',()=>{document.querySelector('audio').play();});

var count = -1;
  b.onclick = function () {
    count++;
    if (count==0){
    h.innerHTML="Level 1";
    b.style.animation='One 2s linear infinite';
    }
    else if (count==2){
      h.innerHTML="Level 2";
      b.style.animation = 'move 2s ease-in-out infinite';
      w.style.backgroundImage="url('https://media3.giphy.com/media/l1J9z9csFxtbkGfXG/giphy.webp?cid=6c09b95278a228bc7d33f89f7d94b9984d6acf8e5312a643&rid=giphy.webp&ct=g')";
    }
    else if (count==14){
    h.innerHTML="Level 3";
    b.style.animationDirection='reverse';
    }
    else{h.innerHTML = count;}}