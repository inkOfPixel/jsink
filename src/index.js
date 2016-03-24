const jsink = {
	deepMerge: require("./deepMerge").default,
	uuid: require("./uuid").default,
	date: require("./date/date").default
}

export default jsink;

export let deepMerge = jsink.deepMerge;
export let uuid = jsink.uuid;
export let date = jsink.date;
