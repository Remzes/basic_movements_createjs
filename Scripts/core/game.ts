(function(){
    let stage:createjs.Stage;
    let canvas:HTMLElement;
    let assetManager:createjs.LoadQueue;

    let assetManifest = [
        {
            id: "cloud",
            src: "../../Assets/images/cloud.png"
        }
    ];

    let currentScene:objects.Scene;

    function Init(){
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.on("complete", Start);
        assetManager.loadManifest(assetManifest);
    }

    function Start(){
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);

        currentScene = new scenes.Menu(assetManager);
        store.setState(config.START);
        Main();
    }

    function Update(){
        currentScene.Update();
        stage.update();

        //To change the scene;
        Main();
    }

    function Main(){

        switch(store.getState()) {
            case config.START:
                stage.addChild(currentScene);
                break;

            case config.PLAY:
                //Remove start screen and move to the play scene
                stage.removeChild(currentScene);
                currentScene = new scenes.Play(assetManager);
                stage.addChild(currentScene);
                break;

            case config.END:
                //currentScene = new scenes.END(assetManager)
                break;
        }
    }

    window.onload = Init;

})();