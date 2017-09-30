module scenes {
    export class Play extends objects.Scene {

        private _assetManager: createjs.LoadQueue;

        private playerLeftSide: objects.Player;
        private playerRightSide: objects.Player;

        constructor(assetManager: createjs.LoadQueue) {
            super();
            this._assetManager = assetManager;
            this.Start();
        }

        public Start(): void {
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {

            const playerOneMovements = [
                movements.KEYCODE_DOWN_PLAYER_ONE,
                movements.KEYCODE_UP_PLAYER_ONE,
                movements.KEYCODE_LEFT_PLAYER_ONE,
                movements.KEYCODE_RIGHT_PLAYER_ONE
            ];

            const playerTwoMovements = [
                movements.KEYCODE_DOWN_PLAYER_TWO,
                movements.KEYCODE_UP_PLAYER_TWO,
                movements.KEYCODE_RIGHT_PLAYER_TWO,
                movements.KEYCODE_LEFT_PLAYER_TWO
            ];

            this.playerLeftSide = new objects.Player(
                "#F00",
                movements.getPlayerOnePosition()[0],
                movements.getPlayerOnePosition()[1],
                playerOneMovements,
                movements.setPlayerOnePosition
            );

            this.playerRightSide = new objects.Player(
                "#F0F",
                movements.getPlayerTwoPosition()[0],
                movements.getPlayerTwoPosition()[1],
                playerTwoMovements,
                movements.setPlayerTwoPosition
            );

            this.addChild(this.playerLeftSide);
            this.addChild(this.playerRightSide);

            window.addEventListener("keyup", this.playerLeftSide.keyUpHandler);
            window.addEventListener("keyup", this.playerRightSide.keyUpHandler);

            window.addEventListener("keydown", this.playerLeftSide.keyDownHanlder);
            window.addEventListener("keydown", this.playerRightSide.keyDownHanlder);

        }
    }
}