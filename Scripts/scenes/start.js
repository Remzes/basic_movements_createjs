var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // Public properties
        // Constructor
        function Menu(assetManager) {
            var _this = _super.call(this) || this;
            _this._assetManager = assetManager;
            _this.Start();
            return _this;
        }
        // Private methods
        // Public methods
        Menu.prototype.Start = function () {
            this._helloLabel = new objects.Label("Tanks Game mane screen", "40px", "Consolas", "#000", 320, 140, true);
            this._clickButton = new objects.Button(this._assetManager, "cloud", 320, 280, true);
            this.Main();
        };
        Menu.prototype.Update = function () {
        };
        Menu.prototype.Main = function () {
            this.addChild(this._helloLabel);
            this.addChild(this._clickButton);
            this._clickButton.on("click", function () {
                store.setState(config.PLAY);
                console.log(store.getState());
            });
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map