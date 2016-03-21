import _deepMerge from "./deepMerge";

const jsink = {
	deepMerge: _deepMerge
}

export default jsink;

export let deepMerge = _deepMerge;

!function () {
	if (typeof define === "function" && define.amd) {
		this.jsink = jsink;
		define(jsink);
	} else if (typeof module === "object" && module.exports) {
		module.exports = jsink;
	}
	else {
		this.jsink = jsink;
	}

} ();
