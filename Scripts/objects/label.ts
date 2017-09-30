module objects {
    export class Label extends createjs.Text{
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES

        get TextString():string {
            return this.text;
        }

        set TextString(text:string){
            this.text = text;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
        }
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

        constructor(labelstring:string,
                    labelfontSize:string,
                    labelfontFamily:string,
                    labelcolor:string,
                    x:number,
                    y:number,
                    isCentered:boolean){
            super(labelstring, labelfontSize + " " + labelfontFamily, labelcolor);

            if (isCentered){
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }

            this.x = x;
            this.y = y;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
    }
}