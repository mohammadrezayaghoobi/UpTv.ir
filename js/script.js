let navbar = document.querySelector(".menu-bars");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};
document.querySelector("#x").onclick = () => {
    navbar.classList.remove("active");
  };
