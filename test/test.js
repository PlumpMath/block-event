var BlockEvent = require('../index.js');
var expect = require('expect.js');


describe('BlockEvent', function () {

    var threshold = 10;
    var blockEvent = new BlockEvent();


    function blockerFunction() {
        var a;
        for (var i = 0; i < 1000000; i++) {
            var a = " " + i * i;
        }
    }

    beforeEach(function () {
        blockEvent = new BlockEvent();
    });

    afterEach(function () {
        blockEvent.stop();
    });


    it("should call emit the blocked event with a number", function (done) {
        blockEvent.on("blocked", function (milis) {
            expect(milis).to.be.a('number');
            done();
        });
        blockerFunction();
    });

});