class MulticiplatorUnitFailure extends Error {}
function primitiveMultiple(a, b) {
	if(Math.random() < 0.2) {
		return a * b;
	}else {
		throw new MulticiplatorUnitFailure("klunk");
	}
}


function reliableMultiply(a, b) {
	for(;;) {
		try {
			return primitiveMultiple(a, b)
		}catch (e) {
			if(!(e instanceof MulticiplatorUnitFailure)) {
				throw e;
				break;
			}
		}
	}
}

console.log(reliableMultiply(8, 8));
