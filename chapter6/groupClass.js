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

//////////////////////////////////////////////test///////////////////////////////////////////////////////////////////

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// -> false
