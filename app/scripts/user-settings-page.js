/* global Parse, _ */

'use strict';

// console.log('user dashboard page file loaded');

var UserSettingsPage = Parse.View.extend({

  className: 'userSettingsPage',

  template: _.template($('.user-settings-template').text()),

  events: {
    
  },

  initialize: function(){
    $('.content').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.template;
    this.$el.html(renderedTemplate);
  }
});