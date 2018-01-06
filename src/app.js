var VendingMachine;
(function (VendingMachine_1) {
    var App = /** @class */ (function () {
        function App(appRootElement, logOutputElement) {
            this.appRootElement = appRootElement;
            this.logger = new Logger(logOutputElement);
        }
        App.prototype.boot = function () {
            var _this = this;
            var promise = Http.get('/data/config.json');
            promise.then(function (config) {
                console.log(config);
                var VendingMachine = new VendingMachine(config);
                VendingMachine.render(_this.appRootElement);
            });
        };
        return App;
    }());
    VendingMachine_1.App = App;
})(VendingMachine || (VendingMachine = {}));
