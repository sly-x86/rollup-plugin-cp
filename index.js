var fse = require('fs-extra');
var colors = require('colors');

function logError(message) {
    console.log(message.red);
}

module.exports = function(options) {
    const name = 'rollup-plugin-copy';
    options = options || {};

    return {
        name: name,
        ongenerate: function(object) {

            for (key in options) {
                const src = key;
                const dst = options[key];

                fse.copy(src, dst)
                .catch( (err) => {
                    logError(name + ' (' + src + ' -> ' + dst + ') ' + err.no + ' ' + err);
                });
            }

        }
    }
};

