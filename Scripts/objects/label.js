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
    var Label = (function (_super) {
        __extends(Label, _super);
        // CONSTRUCTORS
        /**
         *
         * @param labelstring
         * @param labelfontSize
         * @param labelfontFamily
         * @param labelcolor
         * @param x
         * @param y
         * @param isCentered
         */
        function Label(labelstring, labelfontSize, labelfontFamily, labelcolor, x, y, isCentered) {
            var _this = _super.call(this, labelstring, labelfontSize + " " + labelfontFamily, labelcolor) || this;
            if (isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        Object.defineProperty(Label.prototype, "TextString", {
            // PRIVATE INSTANCE VARIABLES
            // PUBLIC PROPERTIES
            get: function () {
                return this.text;
            },
            set: function (text) {
                this.text = text;
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map