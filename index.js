var fse = require("fs-extra");

module.exports = function(options) {
    const name = "rollup-plugin-copy";
    options = options || {};

    return {
        name: name,
        ongenerate: function(object) {

            for (key in options) {
                const src = key;
                const dst = options[key];

                fse.copy(src, dst)
                .catch( (err) => {
                    console.log(
                        colors.error(name + " (" + src + " -> " + dst + ") " + err.no + " " + err)
                    );
                });
            }

        }
    }
};

