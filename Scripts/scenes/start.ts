module scenes {
    export class Menu extends objects.Scene {
        // Private instance
        private _assetManager:createjs.LoadQueue;

        private _helloLabel: objects.Label;
        private _clickButton: objects.Button;
        // Public properties

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super();
            this._assetManager = assetManager;
            this.Start();
        }

        // Private methods

        // Public methods
        public Start(): void {
            this._helloLabel = new objects.Label("Tanks Game mane screen", "40px", "Consolas", "#000", 320, 140, true);
            this._clickButton = new objects.Button(this._assetManager, "cloud", 320, 280, true);
            this.Main();
        }

        public Update(): void {

        }

        public Main(): void {

            this.addChild(this._helloLabel);
            this.addChild(this._clickButton);

            this._clickButton.on("click", () => {
                store.setState(config.PLAY);
                console.log(store.getState());
            });
        }
    }
}