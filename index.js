'use strict';

module.exports = {

    name: 'sq-ember-normalize',

    included: function(app) {

        this._super.included.apply(this, arguments);

        app.import('vendor/normalize.css');
        app.import('vendor/app.css');

    },

    isDevelopingAddon: function() {
        return true;
    }

};
