module objects {
    export class Player extends createjs.Shape {

        public leftArrow: boolean = false;
        public rightArrow: boolean = false;
        public upArrow: boolean = false;
        public downArrow: boolean = false;
        public xCoord:number;
        public yCoord:number;
        public color:string;
        public directions:Array<number>;
        public newCoordinates:Function;

        constructor(color: string,
                    x: number,
                    y: number,
                    directions:Array<number>,
                    setNewCooridinates:Function
        ) {
            super();
            this.xCoord = x;
            this.yCoord = y;
            this.color = color;
            this.directions = directions;
            this.newCoordinates = setNewCooridinates;
            this.Main();
        }

        public Main(){
            this.graphics.beginFill(this.color);
            this.graphics.drawCircle(this.xCoord, this.yCoord, 25);
            this.graphics.endFill();
        }

        public keyDownHanlder = (e) => {
            switch (e.keyCode) {
                case this.directions[2]:
                    this.leftArrow = true;
                    break;

                case this.directions[3]:
                    this.rightArrow = true;
                    break;

                case this.directions[1]:
                    this.upArrow = true;
                    break;

                case this.directions[0]:
                    this.downArrow = true;
                    break;
            }
            this.Move();
        };

        public keyUpHandler = (e) => {
            switch (e.keyCode) {
                case this.directions[2]:
                    this.leftArrow = false;
                    break;

                case this.directions[3]:
                    this.rightArrow = false;
                    break;

                case this.directions[1]:
                    this.upArrow = false;
                    break;

                case this.directions[0]:
                    this.downArrow = false;
                    break;
            }
        };

        public Move = () =>  {
            if (this.leftArrow) this.xCoord += 5;
            if (this.rightArrow) this.xCoord -= 5;
            if (this.upArrow) this.yCoord -= 5;
            if (this.downArrow) this.yCoord += 5;
            this.newCoordinates(this.xCoord, this.yCoord);
            this.Main();
        }
    }
}