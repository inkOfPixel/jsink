const jsink = {
	deepMerge: require("./deepMerge").default,
	uuid: require("./uuid").default
}

export default jsink;

export let deepMerge = jsink.deepMerge;
export let uuid = jsink.uuid;
