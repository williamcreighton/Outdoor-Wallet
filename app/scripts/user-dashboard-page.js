/* global Parse, router, _ */

'use strict';

// console.log('user dashboard page file loaded');

var UserDashboardPage = Parse.View.extend({

	// className: 'userDashboardPage',

	template: _.template($('.user-dashboard-template').text()),

	// events: {
	// 	'click .add-document-btn' : 'addDocument',
	// },

	initialize: function(){
		$('.content').append(this.el);
		var that = this;
		Parse.User.current().relation('documents').query().find().done(function(documents){
			that.collection = new Parse.Collection(documents);
			that.render();
		});
	},

	render: function(){
		var renderedTemplate = this.template({collection: this.collection.toJSON()});
		this.$el.html(renderedTemplate);
	},

	// addDocument: function(){
	// 	router.navigate('#/document-upload', {trigger:true});
	// }
});