"use strict";
function byTagName(rootEl, tagName, result = []) {
  if (rootEl.nodeType !== Node.ELEMENT_NODE || typeof tagName !== "string")
    return;
  const children = Array.from(rootEl.children)
  for(let child of children) {
      if(child.nodeName.toLowerCase() === tagName.toLowerCase())
        result.push(child)
        byTagName(child, tagName, result)
  }
  return result;  
}

