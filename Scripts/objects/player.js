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
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(color, x, y, directions, setNewCooridinates) {
            var _this = _super.call(this) || this;
            _this.leftArrow = false;
            _this.rightArrow = false;
            _this.upArrow = false;
            _this.downArrow = false;
            _this.keyDownHanlder = function (e) {
                switch (e.keyCode) {
                    case _this.directions[2]:
                        _this.leftArrow = true;
                        break;
                    case _this.directions[3]:
                        _this.rightArrow = true;
                        break;
                    case _this.directions[1]:
                        _this.upArrow = true;
                        break;
                    case _this.directions[0]:
                        _this.downArrow = true;
                        break;
                }
                _this.Move();
            };
            _this.keyUpHandler = function (e) {
                switch (e.keyCode) {
                    case _this.directions[2]:
                        _this.leftArrow = false;
                        break;
                    case _this.directions[3]:
                        _this.rightArrow = false;
                        break;
                    case _this.directions[1]:
                        _this.upArrow = false;
                        break;
                    case _this.directions[0]:
                        _this.downArrow = false;
                        break;
                }
            };
            _this.Move = function () {
                if (_this.leftArrow)
                    _this.xCoord += 5;
                if (_this.rightArrow)
                    _this.xCoord -= 5;
                if (_this.upArrow)
                    _this.yCoord -= 5;
                if (_this.downArrow)
                    _this.yCoord += 5;
                _this.newCoordinates(_this.xCoord, _this.yCoord);
                _this.Main();
            };
            _this.xCoord = x;
            _this.yCoord = y;
            _this.color = color;
            _this.directions = directions;
            _this.newCoordinates = setNewCooridinates;
            _this.Main();
            return _this;
        }
        Player.prototype.Main = function () {
            this.graphics.beginFill(this.color);
            this.graphics.drawCircle(this.xCoord, this.yCoord, 25);
            this.graphics.endFill();
        };
        return Player;
    }(createjs.Shape));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map