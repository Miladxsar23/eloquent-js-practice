class Vec {
	constructor(x, y) {
		this.x = x, this.y = y;
	}
	get length() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
	}

	plus(other) {
		return new Vec(this.x + other.x, this.y + other.y);
	}

	mines(other) {
		return new Vec(this.x - other.x, this.y - other.y);
	}
}

//test
let vec = new Vec(2, 3);
let anotherVec = new Vec(-1, -2);
console.log("length : " + vec.length);
console.log("(2, 3) + (-1, -2) = " , vec.plus(anotherVec))
console.log("(2, 3) - (-1, -2) = " , vec.mines(anotherVec))
