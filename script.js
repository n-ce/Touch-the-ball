var b=document.querySelector('button');
var count = -1;
b.onclick = function () {
  document.querySelector('audio').play();
  count++;
  document.querySelector('h3').innerHTML=count;
}
window.onload=(event)=>{
  setInterval(function(){
    b.style.transform="translate("+(Math.floor(Math.random()*100)-50)+"vw,"+(Math.floor(Math.random()*100)-50)+"vh)"},750)
}