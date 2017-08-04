/* jshint node: true */
'use strict';

var path = require('path');
var map = require('broccoli-stew').map;
var Funnel = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');

module.exports = {

    name: 'sq-ember-normalize',

    included: function(app) {

        this._super.included.apply(this, arguments);

        app.import('vendor/normalize.css');
        app.import('vendor/app.css');
        app.import(this.treePaths.vendor + '/fastclick/fastclick.js');

    },

    treeForVendor: function(vendorTree) {

        var trees = [];

        var fastclickTree = new Funnel(path.join(path.dirname(require.resolve('fastclick'))), {
            destDir: 'fastclick',
            files: ['fastclick.js']
        });

        fastclickTree = map(fastclickTree, (content, relativePath) => {
            if ( relativePath.indexOf('css') !== -1 ) { return content; }
            return `if (typeof FastBoot === 'undefined') { ${content} }`;
        });

        if ( vendorTree !== undefined ) { trees.push(vendorTree); }
        trees.push(fastclickTree);

        return new MergeTrees(trees);

    },

    isDevelopingAddon: function() {
        return true;
    }

};
