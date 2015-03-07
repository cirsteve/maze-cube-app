var React = require('react');

var mazeComponent = React.createClass({
    render: function () {
        return (
            <div className="maze">
                Current Level {this.props.app.level}
            </div>
            );
    }
});

module.exports = mazeComponent;
