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


    describe("avg", function () {
        it("should return a number", function (done) {
            setTimeout(function () {
                expect(blockEvent.avg()).to.be.a('number');
                done();
            }, 200);
        });
    });


    describe("max", function () {
        it("should return a number", function (done) {
            setTimeout(function () {
                expect(blockEvent.max()).to.be.a('number');
                done();
            }, 200);
        });
    });

});