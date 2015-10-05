import Ember from 'ember';

export function initialize() {

    Ember.run.schedule('afterRender', function() {

          window.FastClick.attach(document.body);

    });

}

export default {
    name: 'fastclick',
    initialize: initialize
};
