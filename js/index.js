
function hashChange(){
  var active = document.querySelector('.active')
  if ( active ){
    active.classList.remove('active')
  }
  var newItem = document.querySelector(`a.navi[href="${window.location.hash}"]`)
  if ( !newItem ){
    newItem = document.querySelector(`a.navi[href="#history"]`)
  }
  newItem.classList.add('active')
}

function nextSlide() {
  var list   = Array.from(document.querySelectorAll("a.navi"))
  var active = document.querySelector("a.navi.active")
  var index  = list.indexOf(active)
  var length = list.length
  var prev = ( index + 1 + length ) % length
  var skipTo = list[prev]
  window.location = skipTo.href
}

function prevSlide() {
  if ( window.location.hash.match(/job/) ){
    window.location = '#history'
    return
  }
  var list   = Array.from(document.querySelectorAll("a.navi"))
  var active = document.querySelector("a.navi.active")
  var index  = list.indexOf(active)
  var length = list.length
  var prev = ( index - 1 + length ) % length
  var skipTo = list[prev]
  window.location = skipTo.href
}

window.addEventListener('DOMContentLoaded', (event) => {
  if ( ! window.location.toString().match('#') ){
    window.location = window.location + '#overview'
  } else hashChange()
  window.addEventListener('hashchange',hashChange)
  document.querySelector('.prev').addEventListener('click',prevSlide)
  document.querySelector('.next').addEventListener('click',nextSlide)
  document.addEventListener('keydown',(e)=>{
    if (e.key == 'space') nextSlide()
  })
})
