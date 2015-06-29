'use strict';

var globWatcher = require('glob-watcher');

function watch(opt) {
    var socket;
    var io = require('socket.io')(3080);

    io.of('/watch').on('connection', function(s) {
        socket = s;
    });

    opt = opt || ['./*.js']
    var watcher = globWatcher(['./*.js', '!./something.js']);
    watcher.on('change', function(e) {
      s.emit('changes', {e:e});
    });
};

function sync(cb) {
    var io = require('socket.io-client')('http://localhost:3080/watch');
    var watch = io.connect();

    watch.on('connect', function() {
        console.log('connect');
    });

    watch.on('event', function(data) {
        cb(data);
    });
}

module.exports = {
    watch: watch,
    sync: sync
}
