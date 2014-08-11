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
    Parse.User.current().relation('documents').query().get(id).then(function(doc){
      that.model = doc;
      that.render();
    });
  },

  render: function(){
    var renderedTemplate = this.template(this.model.attributes);
    this.$el.html(renderedTemplate);
  },

  deleteDocument: function(){
    this.model.destroy();
    router.navigate('#/document-upload', {trigger:true});
   }
});