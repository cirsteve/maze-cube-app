var Dispatcher = require('../dispatcher/Dispatcher');
var Constants = require('../constants/Constants');

var mazeActions = {
    initMaze: function () {
        Dispatcher.handleViewAction({
            viewAction: Constants.ActionTypes.INIT_MAZE
        });
    },
    updateConfig: function (dimension, value) {
        Dispatcher.handleViewAction({
            viewAction: Constants.ActionTypes.UPDATE_CONFIG,
            dimension: dimension,
            value: value
        });
    },
    updatePosition: function (dimension, direction) {
        Dispatcher.handleViewAction({
            viewAction: Constants.ActionTypes.UPDATE_POSITION,
            dimension: dimension,
            direction: direction
        });
    }
};

module.exports = mazeActions;
