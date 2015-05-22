'use strict';

var globWatcher = require('glob-watcher');

function watch(opt) {
	opt = opt || {
		['./**/*.js', './**/*.jsx']
	};

	var watcher = globWatcher(opt);
	watcher.on('change', function(e) {

	})
};

function sync() {

}

module.exports = {
	watch: watch,
	sync: sync
}
