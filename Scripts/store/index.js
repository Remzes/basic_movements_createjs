var store;
(function (store) {
    store.currentSate = config.START;
    store.getState = function () {
        return store.currentSate;
    };
    store.setState = function (newState) {
        store.currentSate = newState;
    };
})(store || (store = {}));
//# sourceMappingURL=index.js.map