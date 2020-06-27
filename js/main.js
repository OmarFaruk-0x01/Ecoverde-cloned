
let nav = document.querySelector("nav");
window.addEventListener('scroll', (e) => {
  var wY = window.pageYOffset
  var tmp = wY
  if (1){
    if (wY > 450){
      if (!nav.classList.contains("toggole-open")){
        nav.classList.add('toggole-open')
      }
      if (nav.classList.contains("toggole-close")){
        nav.classList.remove('toggole-close')
      }
    }
  
    if (wY < 450){
      if (!nav.classList.contains("toggole-close")){
        nav.classList.add('toggole-close')
      }
    }

    if (wY < 150){
      nav.classList.remove('toggole-open')
      nav.classList.remove('toggole-close')
    }
  } 
  
})