let scrollThreshold = 300;
let toggle = false;

let btnScrollTop = document.getElementById("scrollup");
let btnMenuBar = document.getElementById("btnBurger");
let btnCloseSideNav = document.getElementById("btnCloseSideNav");
let sideNav = document.getElementById("menu-links");

// events
window.onscroll = onWindowScroll;
window.onresize = toggleSideNav;
btnMenuBar.onclick = toggleMenu;
btnCloseSideNav.onclick = closeSideMenu;
btnScrollTop.onclick = () =>
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

// Defined Functions

function toggleSideNav(e) {
  var viewPortWidth = window.innerWidth;
  if (viewPortWidth >= 850) {
    if ( toggle==true) {
      sideNav.classList.remove("sideNav");
       btnMenuBar.classList.remove("menubar-active");
       toggle=false
    }
  }
}

// window scroll event
function onWindowScroll() {
  let showScrollButton = window.scrollY > scrollThreshold;
  if (showScrollButton === true) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
}

// scrool to top of window function
function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

// toggle nav sidebar
function toggleMenu() {
  
    btnMenuBar.classList.add("menubar-active");
     sideNav.classList.add("sideNav","slide-in");
    toggle=true
  
}

function closeSideMenu(){
  btnMenuBar.classList.remove("menubar-active");
     sideNav.classList.remove("sideNav","slide-in");

    toggle=false
}


// --- Smooth scroll function ---
function smoothScrollTo(targetId, duration = 350) {
  const target = document.getElementById(targetId);

  if (!target) return;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY;
  const diff = targetY - startY;
  let start;


  function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);

    // Ease in-out
    const easing =
      percent < 0.5 ? 2 * percent * percent : -1 + (4 - 2 * percent) * percent;

    window.scrollTo(0, startY + diff * easing-50);

    if (time < duration) {
      requestAnimationFrame(step);
    } else {
      // Update hash so :target works
      history.pushState(null, "", "#" + targetId);
    }
  }

  requestAnimationFrame(step);
}

// --- Attach smooth scroll to nav links ---
const navLinks = document.querySelectorAll("ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href").substring(1);
    smoothScrollTo(id, 350);
  });
});

// --- IntersectionObserver for active nav highlight ---
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {
      
      if (entry.isIntersecting) {
   
        navLinks.forEach((link) => {
         link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.2 }
); // 60% visibility = active

sections.forEach((section) => observer.observe(section));