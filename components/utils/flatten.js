const flatten = function (originArr) {
	return function (arr) {
		for (let item of arr) {
			if (Array.isArray(item)) {
				arguments.callee(item);
			} else {
				originArr.push(item);
			}
		}
		return originArr;
	};
};

export default flatten;
