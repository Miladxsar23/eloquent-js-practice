function buildGraph(roads) {
	let res = {}
	function addNode(from, to) {
		if(res[from]) res[from].push(to)
		else res[from] = [to]
	}
	for(let [from, to] of roads.map(item => {return item.split("-")})){
		addNode(from, to)
		addNode(to, from)
	}
	return res;
}
module.exports.buildGraph = buildGraph;
