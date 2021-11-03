/*
 * own loop
 */

function customLoop(itterateNumber, conditionFn, updateFn, callbackFn) {
	for(; ;) {
		if(!conditionFn(itterateNumber)) break;
		callbackFn(itterateNumber);
		itterateNumber = updateFn(itterateNumber)
	}
	return 0;
}

customLoop(3, n => n > 0 , n => n - 1, console.log);
