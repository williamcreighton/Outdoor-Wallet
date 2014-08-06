/* global Parse, router, _ */

'use strict';

// console.log('navigation-view file loaded');

var NavigationView = Parse.View.extend({

	className: 'navigationView',

	template: _.template($('.navigation-template').text()),

	events: {
		'click .sign-up-page-btn' : 'toSignUpPage',
		'click .sign-in-page-btn' : 'toSignInPage',
		'click .user-settings-btn' : 'toSettingsPage',
		'click .user-sign-out-btn' : 'userSignOut'
	},

	initialize: function(){
		// Create a model that keeps track of the current user
		this.model = new Parse.Object();
		this.update();
		$('.navbar-right').append(this.el);
	},

	update: function(){
		this.model.set('currentUser', Parse.User.current());
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template(this.model.attributes);
		this.$el.html(renderedTemplate);
	},

	toSignUpPage: function(){
		router.navigate('#/sign-up', {trigger:true});
	},

	toSignInPage: function(){
		router.navigate('#/sign-in', {trigger:true});
	},

	toSettingsPage: function(){
		router.navigate('#/settings', {trigger:true});
	},

	userSignOut: function(){
		Parse.User.logOut();
		this.update();
		router.navigate('', {trigger:true});
	},
});