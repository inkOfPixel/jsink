const gulp = require("gulp");
const webpack = require("webpack");
const config = require("./webpack.config");
const productionConfig = require("./webpack.config.production");
const gutil = require("gulp-util");

gulp.task("default", ["build:dev"]);

gulp.task("build:production", function () {
	webpack(productionConfig).run(onBuild());
});

gulp.task("build:dev", function () {
	webpack(config).watch(100, onBuild());
});

function onBuild(done) {
	return function (error, stats) {
		if (error) {
			throw new gutil.PluginError("webpack", error);
		}
		if (stats.compilation.errors.length) {
			throw new gutil.PluginError("webpack", stats.toString());
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
