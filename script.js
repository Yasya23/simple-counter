let number = document.getElementById("number");
let count = 0;
window.addEventListener("click", ({ target }) => {
  switch (target.dataset.id) {
    case "plus":
      {
        count += 1;
      }
      break;
    case "minus":
      {
        count -= 1;
      }
      break;
    case "restart":
      {
        count = 0;
      }
      break;
    case "background":
      {
        changeColors();
      }
      break;
  }
  return (number.innerText = count);
});

function changeColors() {
  const icon = document.querySelector(".material-symbols-outlined");
  icon.classList.toggle("dark");
  if (icon.classList.contains("dark")) {
    icon.textContent = "dark_mode";
    document.body.style.backgroundColor = "#00204a";
    document.body.style.color = "#fdb44b";
  } else {
    icon.textContent = "light_mode";
    document.body.style.backgroundColor = "#22b2da";
    document.body.style.color = "#ffffff";
  }
}
