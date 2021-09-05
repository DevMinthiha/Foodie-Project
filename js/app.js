let navbar = document.querySelector(".navbar");
let scrollToTop = document.querySelector(".scroll-to-top");

let navbarControl = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
     if(direction === "down") {
         navbar.classList.add("shadow")
         navbar.classList.add("animate__slideInDown")
         scrollToTop.style.display = "block";
         scrollToTop.classList.add("animate__slideInUp");
     } else {
        navbar.classList.remove("shadow")
        navbar.classList.remove("animate__slideInDown")
        scrollToTop.style.display = "none";
        scrollToTop.classList.remove("animate__slideInUp");
     }
    },
    offset: '75%'
  });


  ScrollReveal({
      origin: "top",
      distance: "30px",
      duration: 1000,
      reset: true
  }).reveal('.content', {
      interval: 200
  });