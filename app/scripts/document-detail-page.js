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
    // see the initialize function for user-dashboard-page as well
    // as the notecard from JS regarding the get method here.
    // Parse.User.current().relation('documents').query().find().done(function(documents){
    //   that.collection = new Parse.Collection(documents);
    //   that.render();
    // }); --> use get instead of find.
    $('.content').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.template;
    this.$el.html(renderedTemplate);
  },

  deleteDocument: function(){
    this.model.destroy();
    this.model = new Parse.Object();
    this.render();
  }
});