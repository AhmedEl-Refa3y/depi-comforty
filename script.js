document.addEventListener("DOMContentLoaded", function () {
  const productRow = document.querySelector(".product-row");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");

  leftArrow.addEventListener("click", () => {
    productRow.scrollBy({ left: -270, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    productRow.scrollBy({ left: 270, behavior: "smooth" });
  });
});
