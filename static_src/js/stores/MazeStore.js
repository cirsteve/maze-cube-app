var _ = require('lodash');
var eventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dispatcher = require('../dispatcher/Dispatcher');
var MazeCube = require('maze-cube');

var _config = {
    x: 10,
    y: 10,
    z: 4,
    render: '3d'
};

var _position = {
    x: 0,
    y: 0,
    z: 0
};


var _newLevel = false;//true if the current position represents a new z level from the previous position and used in rendering

var _maze = {walls:[[]]};

var MazeStore = assign({}, eventEmitter.prototype, {
    initMaze: function () {
        _maze =  new MazeCube(_config);
        _newLevel = true;//trigger the render in the view
    },
    getRenderData: function () {
        var z = _position.z;
        var walls = _maze.walls[z].concat(z > 0 ?
                _maze.walls[z-1][2] :
                []);
        return {
            walls: walls,
            position: _position,
            config: _config,
            level: z,
            newLevel: _newLevel
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
        var updatedPosition = _.clone(_position);
        var updatedValue = updatedPosition[dimension];
        if (direction === '+') {
            updatedValue++;
        } else {
            updatedValue--;
        }
        updatedPosition[dimension] = updatedValue;
        if (_maze.evaluateMove(_position, updatedPosition)) {
            if (_position.z === updatedPosition.z) {
                _newLevel = false;
            } else {
                _newLevel = true;
            }
            _position = updatedPosition;
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
            break;
        case 'UPDATE_POSITION':
            MazeStore.updateMarkerPosition(action.dimension, action.direction);
            break;
    }

    MazeStore.emit('change');
    return true;
});

module.exports = MazeStore;
