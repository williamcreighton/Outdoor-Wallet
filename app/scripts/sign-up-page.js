/* global Parse, router, alert, _ */

'use strict';

// console.log('sign in page file loaded');

var SignUpPage = Parse.View.extend({

	className: 'signUpPage',

	template: _.template($('.sign-up-template').text()),

	events: {
		'click .new-user-btn' : 'createNewUser',
	},

	initialize: function(){
		$('.content').append(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template;
		this.$el.html(renderedTemplate);
	},

	createNewUser: function(){

		var userFirstName = $('.user-firstname-input').val();
		var userLastName = $('.user-lastname-input').val();
		var userName = $('.user-email-input').val();
		var userEmail = $('.user-email-input').val();
		var userPassword = $('.user-password-input').val();
		var userGender = $('.user-gender-input').val();
		var userDateOfBirth = $('.user-dob-input').val();
		var userStateOfResidence = $('.user-stateresidence-input').val();

		var user = new Parse.User();
		user.set('firstname', userFirstName);
		user.set('lastname', userLastName);
		user.set('username', userName);
		user.set('email', userEmail);
		user.set('password', userPassword);
		user.set('gender', userGender);
		user.set('dob', userDateOfBirth);
		user.set('stateresidence', userStateOfResidence);

		user.signUp(null, {
			success: function(user){
				console.log('Username:', user.get('username'), 'is logged in.');
				router.updateNavView();
				router.navigate('#/dashboard', {trigger:true});
			},
			error: function(user, error){
				// Show Error Message to let User try again.
				alert('Error: ' + error.code + '' + error.message);
			}
		});
	},
});