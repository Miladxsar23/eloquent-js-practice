let text = "'I'm the cook,' he said, 'it's my job.'"
let ptr = /(^|\W)'|'($|\W)/g;
console.log(text.replace(ptr, '$1"$2'))

