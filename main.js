window.onload = () => {
  let scrollThreshold = 300;
  let toggle = false
  let btnScrollTop = document.getElementById("scrollup");
  let btnMenuBar = document.getElementById("btnBurger");
  let menuLinks = document.getElementById("menu-links");
  window.addEventListener('scroll',onWindowScroll)
  btnMenuBar.addEventListener('click',toggleMenu)
  btnScrollTop.addEventListener('click',scrollToTop);

  function onWindowScroll() {
    let showScrollButton = window.scrollY > scrollThreshold;
    btnScrollTop.style.display = showScrollButton ? "block" : "none";
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  function toggleMenu(){
    
    if(toggle==true) {
      menuLinks.classList.remove("side-bar");
      btnMenuBar.classList.remove("active");
      toggle = false;
    }else{
      menuLinks.classList.add("side-bar");
      btnMenuBar.classList.add("active");
      toggle = true;
    }
  
  }



};
