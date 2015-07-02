var React = require('react');
var MazeRenderer = require('./3dMazeMixin.react');

var mazeComponent = React.createClass({
    render: function () {
        var mazeComponent = this.props.app.walls ? 
            <MazeRenderer app={this.props.app} /> :
            null;
        return (
            <div className="maze">
                <div className="current-level">
                  Current Level {this.props.app.level}
                </div>
                { mazeComponent }
            </div>
            );
    }
});

module.exports = mazeComponent;
