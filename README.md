# block-event
block-event is an event loop watcher. It alert you with a blocked event if the eventloop stopped more time then the treshold given.

## Installation

```
$ npm install block-event
```

## How to use

```javascript

var threshold = 10;  //ms
var BlockEvent = require('block-event');
var blockEvent = new BlockEvent(threshold);

blockEvent.on('blocked',function(lagtime){
    console.log("Your eventloop blocked for:"+lagtime+" ms");
});

// For stop the watcher, use stop(). It emit a watchStopped event.

blockEvent.stop();

// For resulme the watcher use resume(). It emit a watchStarted event.

blockEvent.resume();

```

The default lag threshold is 10 ms.

