const MOUNTAINS = [{
    name: "Kilimanjaro",
    height: 5895,
    place: "Tanzania"
},
{
    name: "Everest",
    height: 8848,
    place: "Nepal"
},
{
    name: "Mount Fuji",
    height: 3776,
    place: "Japan"
},
{
    name: "Vaalserberg",
    height: 323,
    place: "Netherlands"
},
{
    name: "Denali",
    height: 6168,
    place: "United States"
},
{
    name: "Popocatepetl",
    height: 5465,
    place: "Mexico"
},
{
    name: "Mont Blanc",
    height: 4808,
    place: "Italy/France"
}
];
/* create dome element*/
function elt(type, props, ...children) {
    let elm = document.createElement(type)
    if (props) Object.assign(elm, props)
    for (let child of children) {
        if (typeof child === "string")
            elm.appendChild(document.createTextNode(child))
        else
            elm.appendChild(child)
    }
    return elm
}
/* mounting dom element */
function mountDOM(elm, mountPoint) {
    if (elm && mountPoint &&
        elm.nodeType && mountPoint.nodeType === Node.ELEMENT_NODE) {
        mountPoint.appendChild(elm)
    }
}
/* create target table called -> mountain table */
const titles = Object.keys(MOUNTAINS[0])
//table header
const tHeader = elt("tr", {}, ...titles.map(title => {
    return elt("th", {}, title)
}))
//table body
const tBody = MOUNTAINS.map(({ name, height, place }) => {
    let nameTd = elt("td", {}, name)
    let heightTd = elt("td", { style: "text-align : right;" }, String(height))
    let placeTd = elt("td", {}, place)
    return elt("tr", {}, nameTd, heightTd, placeTd)
})


//table element
const table = elt("table", {}, tHeader, ...tBody)
mountDOM(table, document.querySelector("#root"))
