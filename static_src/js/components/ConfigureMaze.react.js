var React = require('react');
var MazeActions = require('../actions/MazeActions');

var configureMaze = React.createClass({
    render: function () {
        var app = this.props.app;
        var config = app.config;
        return (
            <div className="configure">
                Height: <input type="text" value={config.y} onChange={MazeActions.updateConfig.bind(this, 'y')} /> <br />
                Width: <input type="text" value={config.x} onChange={MazeActions.updateConfig.bind(this, 'x')} /> <br />
                Levels: <input type="text" value={config.z} onChange={MazeActions.updateConfig.bind(this, 'z')} /> <br />
                Renderer: <select type="text" value={config.render} onChange={MazeActions.updateConfig.bind(this, 'render')}>
                             <option value="3d">3D</option>
                             <option value="2d">2D</option>
                          </select> <br />
                <input type="button" onClick={MazeActions.initMaze} value="Create Maze" />
            </div>
            );
    }
});
module.exports = configureMaze;
