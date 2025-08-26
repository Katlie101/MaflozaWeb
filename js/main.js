window.onload = () => {
  let scrollThreshold = 300;
  let toggle = false
  let btnScrollTop = document.getElementById("scrollup");
  let btnMenuBar = document.getElementById("btnBurger");
  let sideNav = document.getElementById("menu-links");

  // events
  window.addEventListener('scroll',onWindowScroll);
  window.addEventListener('resize',toggleSideNav);
  btnMenuBar.addEventListener('click',toggleMenu);
  btnScrollTop.addEventListener('click',scrollToTop);


  // Defined Functions

  function toggleSideNav(e){
    var viewPortWidth = e.target.innerWidth
    if(viewPortWidth>700){
      if(toggle==true){
        sideNav.classList.remove("side-navbar");
        btnMenuBar.classList.remove("active");
        toggle=false;
      }
    }
  }

  // window scroll event
  function onWindowScroll() {
    let showScrollButton = window.scrollY > scrollThreshold;
    btnScrollTop.style.display = showScrollButton ? "block" : "none";
  }

  // scrool to top of window function
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  // toggle nav sidebar
  function toggleMenu(){
    if(toggle==true) {
      sideNav.classList.remove("side-navbar");
      btnMenuBar.classList.remove("active");
      toggle = false;
    }else{
      sideNav.classList.add("side-navbar");
      btnMenuBar.classList.add("active");
      toggle = true;
    }
  }


};
