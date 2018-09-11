window.onscroll = function() {
  navbar_transparent();
};

function navbar_transparent() {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    document.getElementById("Navigation").className = "nav solid";
  } else {
    document.getElementById("Navigation").className = "nav";
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
