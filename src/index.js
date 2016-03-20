import _deepMerge from "./deepMerge";

const jsink = {
	deepMerge: _deepMerge
}

export default jsink;

export let deepMerge = _deepMerge;

if (window !== undefined) {
	window.jsink = jsink;
}
