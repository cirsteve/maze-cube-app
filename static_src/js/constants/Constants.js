var keymirror = require('keymirror');

module.exports = {
    ActionTypes: keymirror({
        INIT_MAZE: null,
        UPDATE_CONFIG: null,
        UPDATE_POSITION: null
    })
};
