window.onload = () => {
  let scrollThreshold = 300;
  let btnScrollTop = document.getElementById("scrollup");
  window.addEventListener('scroll',onWindowScroll)

  btnScrollTop.addEventListener('click',scrollToTop);

  function onWindowScroll() {
    let showScrollButton = window.scrollY > scrollThreshold;
    btnScrollTop.style.display = showScrollButton ? "block" : "none";
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
};
