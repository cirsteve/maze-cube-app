var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var mazeActions = {
    initMaze: function () {
        Dispatcher.handleViewAction({
            viewAction: Constants.ActionTypes.INIT_MAZE
        });
    },
    updateConfig: function (dimension, value) {
        value = parseInt(value.target.value, 10);
        Dispatcher.handleViewAction({
            viewAction: Constants.ActionTypes.UPDATE_CONFIG,
            dimension: dimension,
            value: value
        });
    },
    updatePosition: function (e) {
        Dispatcher.handleViewAction({
            viewAction: Constants.ActionTypes.UPDATE_POSITION,
            key: e.keyCode
        });
    }
};

module.exports = mazeActions;
