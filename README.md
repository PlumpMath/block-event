# block-event
block-event is an event loop watcher for nodejs. It alerts you with a blocked event when the eventloop stopped more times then the given threshold.

## Installation

```
$ npm install block-event
```

## How to use

```javascript

var threshold = 10;  //ms
var BlockEvent = require('block-event');
var blockEvent = new BlockEvent(threshold);

blockEvent.threshold === 10; // true


blockEvent.on('blocked',function(lagtime){
    console.log("Your eventloop blocked for:"+lagtime+" ms");
});

// To stop the watcher, use stop(). It emits a watchStopped event.

blockEvent.stop();

// To resume the watcher use resume(). It emits a watchStarted event.

blockEvent.resume();

// To get the average cicyle time use avg():

var avg = blockEvent.avg();


// To get the maximum cicyle time use max():

var max = blockEvent.max();



```

The default lag threshold is 10 ms.

## Test

```
$ npm test
```


