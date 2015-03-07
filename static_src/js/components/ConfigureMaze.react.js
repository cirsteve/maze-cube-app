var React = require('react');
var MazeActions = require('../actions/MazeActions');

var configureMaze = React.createClass({
    render: function () {
        var app = this.props.app || {config:{}};
        var config = app.config;
        return (
            <div className="configure">
                Height: <input type="text" value={config.y} onChange={MazeActions.updateConfig.bind(this, 'y')} /> <br />
                Width: <input type="text" value={config.x} onChange={MazeActions.updateConfig.bind(this, 'x')} /> <br />
                Levels: <input type="text" value={config.z} onChange={MazeActions.updateConfig.bind(this, 'z')} /> <br />
                <input type="button" onClick={MazeActions.initMaze} value="Create Maze" />
            </div>
            );
    }
});
module.exports = configureMaze;
