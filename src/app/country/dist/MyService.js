"use strict";
exports.__esModule = true;
exports.MyService = void 0;
var MyService = /** @class */ (function () {
    function MyService() {
        this.counter = 0;
        // alert('MyService constructor');
    }
    MyService.prototype.increment = function () {
        this.counter += 1;
        alert(this.counter);
    };
    MyService.prototype.decrement = function () {
        this.counter -= 1;
        alert(this.counter);
    };
    return MyService;
}());
exports.MyService = MyService;
