var _ = require('lodash');
var eventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dispatcher = require('../dispatcher/Dispatcher');
var MazeCube = require('maze-cube');

var _config = {
    x: 10,
    y: 10,
    z: 4
};

var _position = {
    x: 0,
    y: 0,
    z: 0
};

var _maze = {walls:[]};

var MazeStore = assign({}, eventEmitter.prototype, {
    initMaze: function () {
        _maze =  new MazeCube(_config);
    },
    getRenderData: function () {
        var z = _position.z;
        return {
            walls: _maze.walls[z],
            marker: _position,
            config: _config,
            level: z
        };
    },
    getConfig: function () {
        return _config;
    },
    getMaze: function () {
        return _maze;
    },
    updateConfig: function (dimension, value) {
        _config[dimension] = value;
    },
    updateMarkerPosition: function (dimension, direction) {
        var updated_position = _.clone(_position);
        var updated_value = updated_position[dimension];
        if (direction === '+') {
            updated_value++;
        } else {
            updated_value--;
        }
        updated_position[dimension] = updated_value;
        if (_maze.evaluateMove(_position, updated_position)) {
            _position = updated_position;
        }
    }
});

MazeStore.dispatchToken = dispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.viewAction) {
        case 'INIT_MAZE':
            MazeStore.initMaze();
            break;
        case 'UPDATE_CONFIG':
            MazeStore.updateConfig(action.dimension, action.value);
        case 'UPDATE_POSITION':
            MazeStore.updateMarkerPosition(action.dimension, action.direction);
            break;
    }

    MazeStore.emit('change');
    return true;
});

module.exports = MazeStore;
