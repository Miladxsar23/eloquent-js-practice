/* helper function to create element */
function createElement(type, props, ...children) {
  let elt = document.createElement(type)
  if (props) Object.assign(elt, props)
  for (let child of children) {
    if (typeof child === "string")
      elt.appendChild(document.createTextNode(child))
    else
      elt.appendChild(child)
  }
  return elt;
}
/* loop for initial create trails and mount to dom */
for (let i = 0; i < 10; i++)
  document.body.appendChild(createElement("div", {
    className: "trail"
  }))

/* event handler function to mousemove */
const trailList = Array.from(document.querySelectorAll(".trail"))
let current = 0
function cometMode(event) {
  let trail = trailList[current]
  trail.style.top = `${event.pageY}px`
  trail.style.left = `${event.pageX}px`
  current = (current + 1) % trailList.length
}

window.addEventListener("mousemove", cometMode)

