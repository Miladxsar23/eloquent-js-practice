/*
 * create a function like Array.prototype.some
 */
 function every(array, conditionFn) {
	for (let arr of array) {
		if(!conditionFn(arr)) {
			return false;
			break;
		}
	}
	 return true;
 
 }

console.log( every([1, 2, 11], n => n < 10) );
