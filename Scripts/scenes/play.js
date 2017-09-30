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
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play(assetManager) {
            var _this = _super.call(this) || this;
            _this._assetManager = assetManager;
            _this.Start();
            return _this;
        }
        Play.prototype.Start = function () {
            this.Main();
        };
        Play.prototype.Update = function () {
        };
        Play.prototype.Main = function () {
            var playerOneMovements = [
                movements.KEYCODE_DOWN_PLAYER_ONE,
                movements.KEYCODE_UP_PLAYER_ONE,
                movements.KEYCODE_LEFT_PLAYER_ONE,
                movements.KEYCODE_RIGHT_PLAYER_ONE
            ];
            var playerTwoMovements = [
                movements.KEYCODE_DOWN_PLAYER_TWO,
                movements.KEYCODE_UP_PLAYER_TWO,
                movements.KEYCODE_RIGHT_PLAYER_TWO,
                movements.KEYCODE_LEFT_PLAYER_TWO
            ];
            this.playerLeftSide = new objects.Player("#F00", movements.getPlayerOnePosition()[0], movements.getPlayerOnePosition()[1], playerOneMovements, movements.setPlayerOnePosition);
            this.playerRightSide = new objects.Player("#F0F", movements.getPlayerTwoPosition()[0], movements.getPlayerTwoPosition()[1], playerTwoMovements, movements.setPlayerTwoPosition);
            this.addChild(this.playerLeftSide);
            this.addChild(this.playerRightSide);
            window.addEventListener("keyup", this.playerLeftSide.keyUpHandler);
            window.addEventListener("keyup", this.playerRightSide.keyUpHandler);
            window.addEventListener("keydown", this.playerLeftSide.keyDownHanlder);
            window.addEventListener("keydown", this.playerRightSide.keyDownHanlder);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map