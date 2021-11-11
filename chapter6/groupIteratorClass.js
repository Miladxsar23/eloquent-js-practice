/* 
 * create Group class like Set data sctructure
 * */

class Group {
	constructor() {
		this.values = [];	
	}

	add(value) {
		if(!this.has(value)) this.values.push(value);
		return this;
	}

	delete(value) {
		this.values = this.values.filter( item => item !== value);
		return this
	}
	
	has(value) {
		if(this.values.some( item => item === value)) return true;
		else return false;
	}


	static from(obj) {
		if(!obj[Symbol.iterator] || !obj[Symbol.iterator]().next) throw new Error("this object is not iterable");
		else {
			let res = new Group();
			for(let item of obj) {
				res.add(item);
			}
			return res;
		}
	}
}

//making Group iterable
class GroupIterator {
	constructor(group) {
		this.group = group;
	}
	
	next() {
		if(this.group.values.length === 0) return {done : true}
		let value = this.group.values.shift();
		return {value, done : false}
	}
}


Group.prototype[Symbol.iterator] = function() {
	return new GroupIterator(this);
}


//////////////////////////////////////////////test///////////////////////////////////////////////////////////////////

for(let value of Group.from(['a', 'b', 'c'])) {
	console.log(value)
}
