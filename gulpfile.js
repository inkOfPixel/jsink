const gulp = require("gulp");
const webpack = require("webpack");
const config = require("./webpack.config");
const gutil = require("gulp-util");

gulp.task("default", ["build:dev"]);

gulp.task("build:dev", function () {
	webpack(config).watch(100, onBuild());
});

function onBuild(done) {
	return function (error, stats) {
		if (error) {
			throw new gutil.PluginError("webpack", error);
		} else {
			gutil.log("[webpack]", stats.toString({
				// output options
			}));
		}
		if (typeof done === "function") {
			done();
		}
	}
}
