/* global Parse, router, alert, _ */

'use strict';

// console.log('sign in page file loaded');

var SignInPage = Parse.View.extend({

	className: 'signInPage',

	template: _.template($('.sign-in-template').text()),

	events: {
		'click .sign-in-btn' : 'userSignIn',
	},

	initialize: function () {
		$('.content').append(this.el);
		this.render();
	},

	render: function () {
		var renderedTemplate = this.template;
		this.$el.html(renderedTemplate);
	},

	userSignIn: function () {
		var userName = $('.user-email-input').val();
		var userPassword = $('.user-password-input').val();

		Parse.User.logIn(userName, userPassword, {
			success: function (user) {
				console.log('Username:', user.get('username'), 'is logged in.');
				router.updateNavView();
				router.navigate('#/dashboard', {trigger:true});
			},
			error: function (user, error) {
				console.log('User not logged in: ' + error.code + ' ' + error.message);
				alert('There was an error signing in. Please try again.');
			}
		});
	},

	enableEnter: function() {
		// if user hits enter in email feild, it triggers the sign in
		$('.user-password-input').keypress(function(key) {
			if (key.which === 13) {
				$('.user-signIn-btn').click();
			}
		});
	},

	userPwdReset: function () {
		router.navigate('#/password-reset', {trigger:true});
	}
});