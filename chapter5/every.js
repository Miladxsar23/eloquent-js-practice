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


//everySome fn
function everySome(array, conditionFn) {
	if(array.some(item => !conditionFn(item) )) return false;
	else return true;
}


console.log('every function: ' +  every([1, 2, 6], n => n < 10) );
console.log('everySome function: ' + everySome([1, 2, 6], n => n < 10) );




