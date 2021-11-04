/*
 *first import SCRIPTS array from script.js module with CommonJs system module
 */

const SCRIPTS = require('./script');

//findDirection FN -> :input<String, Array> -> :output<String>

function findDirection(text, source) {
	let arrChars = text.split('');
	let res = [];

	for(let char of arrChars) {
		let code = char.codePointAt(0);
		let index = source.findIndex( item => item.ranges.some( ([from, to]) => {
			return (code >= from && code < to);
		}));

		if(index === -1) continue;
		let resIndex = res.findIndex( item => item.dir == source[index].direction );
		if( resIndex !== -1 ) res[resIndex].count++;
		else res.push({dir : source[index].direction, count : 1});
	}
	//return result direction
	return res.reduce( (a, b) => {
		return a.count > b.count ? a : b;
	}).dir
}


console.log(findDirection("hey, im milad shiriyan", SCRIPTS))
