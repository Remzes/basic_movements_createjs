module movements {
    let player_one_x = 100;
    let player_two_x = 540;

    let player_one_y = 240;
    let player_two_y = 240;

    export const KEYCODE_RIGHT_PLAYER_ONE = 37;
    export const KEYCODE_LEFT_PLAYER_ONE = 39;
    export const KEYCODE_UP_PLAYER_ONE = 38;
    export const KEYCODE_DOWN_PLAYER_ONE = 40;

    export const KEYCODE_RIGHT_PLAYER_TWO = 68;
    export const KEYCODE_LEFT_PLAYER_TWO = 65;
    export const KEYCODE_UP_PLAYER_TWO = 87;
    export const KEYCODE_DOWN_PLAYER_TWO = 83;


    export function getPlayerOnePosition() {
        return [
            player_one_x, player_one_y
        ]
    }

    export function setPlayerOnePosition(x, y) {
        player_one_x = x;
        player_one_y = y;
    }

    export function getPlayerTwoPosition() {
        return [
            player_two_x, player_two_y
        ]
    }

    export function setPlayerTwoPosition(x, y) {
        player_two_x = x;
        player_two_y = y;
    }
}