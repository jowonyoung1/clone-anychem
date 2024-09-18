window.addEventListener("load", function () {
  AOS.init();
});

// 저작권 안내 팝업창
window.addEventListener("load", function () {
  const closeBt = document.querySelector(".popup-close");
  const popup = document.querySelector(".popup");
  closeBt.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
