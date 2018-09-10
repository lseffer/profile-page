window.onscroll = function() {
  myFunction();
};

function myFunction() {
  if (
    document.body.scrollTop > window.innerHeight - 1 ||
    document.documentElement.scrollTop > window.innerHeight - 1
  ) {
    document.getElementById("nav").className = "nav solid";
  } else {
    document.getElementById("nav").className = "nav";
  }
}

document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
