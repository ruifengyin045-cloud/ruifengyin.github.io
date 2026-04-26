function chooseFood(name) {
  const popup = document.getElementById("popup");
  const text = document.getElementById("text");

  text.innerText = "你选了 " + name + " 🍱\n帆帆还想吃什么？";

  popup.classList.add("show");
}

function continueChoose() {
  document.getElementById("popup").classList.remove("show");
}

function finish() {
  const text = document.getElementById("text");
  text.innerText = "好嘞，开吃啦！😋💗";
}
		
