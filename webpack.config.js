module.exports = {
	entry: {
		jsink: "./src/index.js"
	},
	output: {
		path: "./lib",
		filename: "jsink.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["babel"]
			},
			{
				test: /\.json$/,
				exclude: /node_modules/,
				loaders: ["json"]
			}
		]
	},
	resolve: {
		extensions: ["", ".js"]
	},
	debug: true
};
