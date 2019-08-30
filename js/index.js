
var hashChange = function(){
  var active = document.querySelector('.active')
  if ( active ){
    active.classList.remove('active')
  }
  var newItem = document.querySelector(`a.navi[href="${window.location.hash}"]`)
  if ( newItem ){
    newItem.classList.add('active')
  } else {
    document.querySelector(`a.navi[href="#history"]`)
  }
}

window.addEventListener('DOMContentLoaded', (event) => {

  if ( ! window.location.toString().match('#') ){
    window.location = window.location + '#overview'
  } else {
    hashChange()
  }

  window.addEventListener('hashchange',hashChange)

  document.querySelector('.prev').addEventListener('click',()=>{
    var list   = Array.from(document.querySelectorAll("a.navi"))
    var active = document.querySelector("a.navi.active")
    var index  = list.indexOf(active)
    var length = list.length
    var prev = ( index - 1 + length ) % length
    var skipTo = list[prev]
    window.location = skipTo.href
  })

  document.querySelector('.next').addEventListener('click',()=>{
    var list   = Array.from(document.querySelectorAll("a.navi"))
    var active = document.querySelector("a.navi.active")
    var index  = list.indexOf(active)
    var length = list.length
    var prev = ( index + 1 + length ) % length
    var skipTo = list[prev]
    window.location = skipTo.href
  })
})
