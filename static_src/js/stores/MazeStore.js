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
var mapToArray = function (m) {
    return [m.x, m.y, m.z];
};

var arrayToMap = function (a) {
    return {x: a[0], y: a[1], z: a[2]};
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
                [_maze.walls[z-1][2]] :
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
    updatePosition: function (key) {
        var updatedPosition = _.clone(_position);
        var move = false;
        var positionMap = mapToArray(_position);
        var updatedPositionMap = mapToArray(updatedPosition);
        switch (key) {
            case 37://left arrow
                updatedPositionMap[0]--;
                break;
            case 38://up arrow
                updatedPositionMap[1]++;
                break;
            case 39://right arrow
                updatedPositionMap[0]++;
                break;
            case 40://down arrow
                updatedPositionMap[1]--;
                break;
            case 83://s key
                updatedPositionMap[2]++;
                break;
            case 87://w arrow
                updatedPositionMap[2]--;
                break;
        }
        if (!_maze.evaluateMove(positionMap, updatedPositionMap)) {
            if (_position.z !== updatedPositionMap[2]) {
                _newLevel = true;
            }
            _position = arrayToMap(updatedPositionMap);
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
            MazeStore.updatePosition(action.key);
            break;
    }

    MazeStore.emit('change');
    return true;
});

module.exports = MazeStore;
