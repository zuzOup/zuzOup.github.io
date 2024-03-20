const header = document.getElementById("header");

window.addEventListener("scroll", async () => {
  if (this.scrollY > 2) {
    header.classList.add("headerActive");
  } else if (this.scrollY === 0) {
    header.classList.remove("headerActive");
  }
});
