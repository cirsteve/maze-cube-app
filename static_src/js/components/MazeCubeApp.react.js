var React = require('react');
var MazeStore = require('../stores/MazeStore');
var ConfigureComponent = require('./ConfigureMaze.react');
var MazeComponent = require('./Maze.react');

var getAppState = function () {
    return MazeStore.getRenderData();
};


var AppComponent = React.createClass({
    getInitialState: function () {
        return getAppState();
    },

    render: function () {
        var appState = getAppState();
        return (
            <div>
                <h1>Maze Cube</h1>
                <ConfigureComponent app={appState} />
                <MazeComponent app={appState} />
            </div>
            );
    },

    componentDidMount: function () {
        MazeStore.addListener('change', this.onChange);
    },

    componentWillUnmount: function () {
        MazeStore.removeListener('change');
    },

    onChange: function () {
        getAppState(getAppState());
    }
});

React.render(
        (<div>
             <AppComponent />
        </div>),
        document.getElementById('react')
        );
