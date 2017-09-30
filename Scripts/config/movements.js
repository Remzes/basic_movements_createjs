var movements;
(function (movements) {
    var player_one_x = 100;
    var player_two_x = 540;
    var player_one_y = 240;
    var player_two_y = 240;
    movements.KEYCODE_RIGHT_PLAYER_ONE = 37;
    movements.KEYCODE_LEFT_PLAYER_ONE = 39;
    movements.KEYCODE_UP_PLAYER_ONE = 38;
    movements.KEYCODE_DOWN_PLAYER_ONE = 40;
    movements.KEYCODE_RIGHT_PLAYER_TWO = 68;
    movements.KEYCODE_LEFT_PLAYER_TWO = 65;
    movements.KEYCODE_UP_PLAYER_TWO = 87;
    movements.KEYCODE_DOWN_PLAYER_TWO = 83;
    function getPlayerOnePosition() {
        return [
            player_one_x, player_one_y
        ];
    }
    movements.getPlayerOnePosition = getPlayerOnePosition;
    function setPlayerOnePosition(x, y) {
        player_one_x = x;
        player_one_y = y;
    }
    movements.setPlayerOnePosition = setPlayerOnePosition;
    function getPlayerTwoPosition() {
        return [
            player_two_x, player_two_y
        ];
    }
    movements.getPlayerTwoPosition = getPlayerTwoPosition;
    function setPlayerTwoPosition(x, y) {
        player_two_x = x;
        player_two_y = y;
    }
    movements.setPlayerTwoPosition = setPlayerTwoPosition;
})(movements || (movements = {}));
//# sourceMappingURL=movements.js.map