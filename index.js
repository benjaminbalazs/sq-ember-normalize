/* jshint node: true */
'use strict';

module.exports = {
  name: 'sq-ember-normalize',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/normalize.css');
    app.import('vendor/app.css');
  },
  isDevelopingAddon: function() {
    return true;
  }
};
