/* global Parse, _ */

'use strict';

// console.log('landing page file loaded');

var LandingPage = Parse.View.extend({

	className: 'landingPage',

	template: _.template($('.landing-page-template').text()),

	initialize: function(){
		$('.content').append(this.el);
		this.render();
	},

	render: function(){
		var renderedTemplate = this.template;
		this.$el.html(renderedTemplate);
	},
});