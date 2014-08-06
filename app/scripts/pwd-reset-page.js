/* global Parse, router, alert, _ */

'use strict';

// console.log('pwd reset page file loaded');

var PwdResetPage = Parse.View.extend({

	className: 'pwdResetPage',

	template: _.template($('.pwd-reset-template').text()),

	events: {
		'click .pwd-reset-btn' : 'userPwdReset'
	},

	initialize: function(){
		$('.content').append(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template;
		this.$el.html(renderedTemplate);
	},

	userPwdReset: function(){
		var userEmail = $('.lookup-email-input').val();

		Parse.User.requestPasswordReset(userEmail, {
			success: function(){
				router.navigate('#/sign-in', {trigger:true});
			},
			error: function(error){
				// Show Error Message
				alert('Error: ' + error.code + '' + error.message);
			}
		});
	}
});