const webpack = require("webpack");
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require("path");
const libraryName = "jsink";
const outputFile = libraryName + ".min.js";

module.exports = {
	entry: {
		jsink: __dirname + "/src/index.js"
	},
	output: {
		path: __dirname + "/lib",
		filename: outputFile,
		library: libraryName,
		libraryTarget: "umd",
		umdNamedDefine: true
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
		root: path.resolve("./src"),
		extensions: ["", ".js"]
	},
	plugins: [
		new UglifyJsPlugin({minimize: true})
	]
};
