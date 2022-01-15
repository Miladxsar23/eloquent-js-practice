function Promise_all(promises) {
	return new Promise((resolve, reject) => {
		let result = [];
		let pending = promises.length;
		for(let i = 0; i < promises.length; i++) {
			promises[i].then(data => {
				result[i] = data
				pending--;
				if(pending === 0 ) resolve(result)
			}).catch(failure => reject(failure))
		}
		if(promises.length === 0) resolve(result)
	});
}
