const BASE_URL = "https://eloquentjavascript.net/author"
//Accept : json
fetch(BASE_URL, {
  method: "GET",
  headers: {
    "Accept": "application/json"
  }
}).then(resp => resp.json()).then(console.log).catch(console.log)

// Accept : text
fetch(BASE_URL, {
  method: "GET",
  headers: {
    "Accept": "text/plain"
  }
}).then(resp => resp.text()).then(console.log).catch(console.log)

//Accept : html
fetch(BASE_URL, {
  method: "GET",
  headers: {
    "Accept": "text/html"
  }
}).then(resp => resp.text()).then(htmlText => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlText, "text/html")
  console.log(doc)
}).catch(console.log)

