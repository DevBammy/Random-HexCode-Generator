const hex = document.getElementById("hex");
const btn = document.getElementById("generate");
const count = document.querySelector(".count");

const generateHex = () => {
  const random = Math.random().toString(16).substring(2, 8);
  hex.innerHTML = "#" + random;
  document.body.style.backgroundColor = "#" + random;
};

btn.addEventListener("click", generateHex);

generateHex();
