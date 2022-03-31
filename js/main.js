

const colors = ['#EBF2BF', '#FF8BCA', '#5561CA', '#F1CE46']
const numFaces = 5000
const pad = 10
let sizeMin
let sizeMax
let dfaceMin
let dfaceMax
let logoSize
let frameW
let frameH
let n
let occupated = []

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function changeSVGColor(circle, color) {
  var ob = circle.querySelector(".face")
  console.log(ob)
  let w;
  let h;
  if (createHat(circle) || (createItem(circle))) {
    h = 0.6 * circle.clientHeight
    w = 0.6 * circle.clientWidth
    ob.style.left = '20%'
    createSepal(circle, 'sepal')
    createStalk(circle, 'stalk')

  } else {
h = circle.clientHeight
w = circle.clientWidth
createEyes(circle, 'eyes')
createEyeBrows(circle, 'eyeBrows')
createNose(circle, 'nose')
createMouth(circle, 'mouth')
}
let svg;
ob.addEventListener("load", function () {
svg = ob.contentDocument;
console.log(svg);

let svgTag = svg.querySelector("svg")
svgTag.setAttribute("width", w)
svgTag.setAttribute("height", h)
svgTag.querySelector("path").setAttribute("fill", color)
}, false);
console.log('changed')
}



document.querySelector(".but").onclick = function (event) {
  event.stopPropagation()
  frame.innerHTML = '';
  occupated = []
  frameW = frame.clientWidth;
  frameH = frame.clientHeight;
  sizeMin = 0.14 * frameW
  sizeMax = 0.2 * frameW
  dfaceMin = 0.24 * frameW
  dfaceMax = 0.30 * frameW
  n = drawLogo(frame)
  generateLogo()
  for (var i = 0; i < numFaces; i++) {
    createCircle(frame, n)
  }
}

window.addEventListener('resize', function () {
  frame.innerHTML = ''
  occupated = []

})

document.addEventListener('DOMContentLoaded', () => {
  container = document.getElementsByClassName('Garden')[0]
  frame = document.createElement('div')

  frame.classList.add('frame')
  container.appendChild(frame)

  frameW = frame.clientWidth
  frameH = frame.clientHeight
  sizeMin = 0.14 * frameW
  sizeMax = 0.20 * frameW
  dfaceMin = 0.24 * frameW
  dfaceMax = 0.30 * frameW
  console.log(sizeMin, sizeMax)

})
