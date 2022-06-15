//constans
const codeField = document.querySelector("textarea")
const runButton = document.querySelector("button")
const result = document.querySelector(".app-code-editor-footer-result")

//functionality
function runCode(codeString) {
  const runner = Function("", codeString)
  return runner();
}

function changeTextContentOfDOMNode(textContent, DOMNodeEl) {
  DOMNodeEl.textContent = String(textContent)
}
//event handlers
runButton.addEventListener("click", function(evt) {
  let code = codeField.value
  try {
    const runResult = runCode(code)
    changeTextContentOfDOMNode(runResult, result)
  } catch (err) {
    console.log(err)
    changeTextContentOfDOMNode(err, result)
  }
})

