function chooseFood(name){
  document.getElementById("popup").style.display="block";
  document.getElementById("text").innerText="你选了 "+name+"，帆帆还想吃什么？";
}

function continueChoose(){
  document.getElementById("popup").style.display="none";
}

function finish(){
  document.getElementById("text").innerText="开吃啦！😋";
}
		
