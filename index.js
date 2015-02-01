/**
 * Module exports
 */
module.exports = BlockEvent;


var EventEmitter = require('events').EventEmitter;

/**
 * BlockEvent constructor
 * @param {Number}
 */
function BlockEvent(_threshold) {
    var self = this;
    var start = process.hrtime();
    var loopInterval = 100;  //ms
    var threshold = _threshold || 10; //ms

    EventEmitter.call(this);

    this.stop = function stop() {
        clearInterval(this.timer);
        this.emit('watchStopped');
    };

    this.resume = function resume() {
        this.timer = setInterval(watchEvent, loopInterval);
        this.timer.unref();
        this.emit('watchStarted');
    };

    function watchEvent() {
        var diff = process.hrtime(start);
        var nanosec = diff[0] * 1e9 + diff[1];
        var ms = nanosec / 1e6;
        var n = ms - loopInterval;
        start = process.hrtime();
        if (n > threshold) {
            self.emit('blocked', n);
        }
    }

    this.resume();
}
BlockEvent.prototype = EventEmitter.prototype;
