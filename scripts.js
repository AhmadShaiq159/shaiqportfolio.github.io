// ======typed========
var typed = new Typed('.typed', {
  strings: ['Frontend Developer', 'Worked In IT'],
  typeSpeed: 150,
  backSpeed: 50,
  loop: true
});



// ======hamburger========
myFunction = () => {
  var nav = document.querySelector('.nav');
  if (nav.style.display == 'flex') {
    nav.style.display = 'none';
  }
  else {
    nav.style.display = 'flex';
  }
}

// ===========menu=========
var open = document.querySelector('.bx-menu');
open.onclick = () => {
  open.classList.toggle('bx-x');
}

