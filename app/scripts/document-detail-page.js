/* global Parse, _ */

'use strict';

// console.log('user dashboard page file loaded');

var DocumentDetailPage = Parse.View.extend({

  // className: 'documentDetailPage',

  template: _.template($('.document-detail-template').text()),

  events: {
    'click .delete-document-btn' : 'deleteDocument'
  },

  initialize: function(options){
    var id = options.id;
    
    $('.content').append(this.el);
    var that = this;
    Parse.User.current().relation('documents').query().get(id).done(function(doc){
      that.model = doc || new Parse.Object();
      that.render();
    });
  },

  render: function(){
    var renderedTemplate = this.template(this.model.attributes);
    this.$el.html(renderedTemplate);
  },

  deleteDocument: function(){
    this.model.destroy();
    this.model = new Parse.Object();
    this.render();
  }
});