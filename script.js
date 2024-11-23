document.addEventListener("DOMContentLoaded", function () {
  const productRows = document.querySelectorAll(".product-row");

  productRows.forEach((productRow) => {
    const leftArrow = productRow.parentElement.querySelector(".arrow-left");
    const rightArrow = productRow.parentElement.querySelector(".arrow-right");

    if (leftArrow && rightArrow) {
      leftArrow.addEventListener("click", () => {
        productRow.scrollBy({ left: -270, behavior: "smooth" });
      });

      rightArrow.addEventListener("click", () => {
        productRow.scrollBy({ left: 270, behavior: "smooth" });
      });
    }
  });
});

//

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
