module objects {
   export class Button extends createjs.Bitmap {

       /**
        * @param assetManager
        * @param imageName
        * @param x
        * @param y
        * @param isCentered
        */

        constructor(assetManager:createjs.LoadQueue, imageName:string, x:number, y:number, isCentered:boolean){
            super(assetManager.getResult(imageName));

            if(isCentered){
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;

            //Event listeners
            this.on("mouseover", this._mouseOver);
            this.on("mouseout", this._mouseOut);
        }

        private _mouseOver(event:createjs.MouseEvent):void{
            this.alpha = 0.7;
        };

        private _mouseOut(event:createjs.MouseEvent):void{
            this.alpha = 1.0;
        };
    }
}