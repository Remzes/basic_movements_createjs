module store {
    export let currentSate:number = config.START;

    export const getState = ():number => {
      return currentSate;
    };

    export const setState = (newState):void => {
        currentSate = newState;
    }
}