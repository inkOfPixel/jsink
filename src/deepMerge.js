export default _deepMerge;

function _deepMerge(a, b) {
	if (a === undefined) {
		return clone(b);
	}
	if (b === undefined) {
		return clone(a);
	}
	if (isPrimitiveType(a)) {
		if (isArray(b)) {
			return b.concat(a);
		}
		return clone(a);
	}
	if (isObject(a)) {
		if (isObject(b)) {
			return mergeObject(a, b);
		}
		if (isArray(b)) {
			return b.concat(a);
		}
		return clone(a);
	}
	if (isArray(a)) {
		return a.concat(b);
	}
	throw "Not handled type!";
}

function clone(a) {
	if (isObject(a)) {
		return _deepMerge({}, a);
	}
	if (isArray(a)) {
		return _deepMerge([], a);
	}
	return a;
}

function mergeObject(a, b) {
	var propsSet = getPropsSet(a, b);
	return propsSet.reduce((merge, prop) => {
		if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop)) {
			merge[prop] = _deepMerge(a[prop], b[prop]);
		} else if (a.hasOwnProperty(prop)) {
			merge[prop] = a[prop];
		} else {
			merge[prop] = b[prop];
		}
		return merge;
	}, {});
}

function getPropsSet(a, b) {
	var aProps = Object.getOwnPropertyNames(a);
	var bProps = Object.getOwnPropertyNames(b);
	var propsSetMap = {};
	aProps.forEach(prop => {
		propsSetMap[prop] = true;
	});
	bProps.forEach(prop => {
		propsSetMap[prop] = true;
	});
	return Object.getOwnPropertyNames(propsSetMap);
}

function isObject(a) {
	return typeof a === "object" && a !== null && !Array.isArray(a);
}

function isArray(a) {
	return Array.isArray(a);
}

function isPrimitiveType(a) {
	return !isObject(a) && !isArray(a);
}
