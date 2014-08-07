/* global Parse, UserRegistrationView, UserLoginView, DocumentsView */

'use strict';

// console.log('router file loaded');

var AppRouter = Parse.Router.extend({

	routes: {
		'' : 'landingPage',
		'sign-up' : 'userSignUp',
		'sign-in' : 'userSignIn',
		'password-reset' : 'userPwdReset',
		'dashboard' : 'userDashboard',
		'document-upload' : 'documentUpload',
		'document/:id' : 'documentDetail',
		'my-account' : 'userSettings'
	},

	initialize: function(){
		// console.log('router initialized');
		this.navView = new NavigationView();
		this.currentView = null;
	},

	// this is not connected to a route, but it should be
	// globally available, so it's stuck in the router
	updateNavView: function(){
		this.navView.update();
	},

	landingPage: function(){
		$('.content').html('');
		new LandingPage();
	},

	userSignUp: function(){
		$('.content').html('');
		new SignUpPage();
	},

	userSignIn: function(){
		$('.content').html('');
		new SignInPage();
	},

	userPwdReset: function(){
		$('.content').html('');
		new PwdResetPage();
	},

	userDashboard: function(){
		$('.content').html('');
		new UserDashboardPage();
	},

	documentUpload: function(){
		$('.content').html('');
		new DocumentUploadPage();
	},

	documentDetail: function(id){
		$('.content').html('');
		console.log(id);
		new DocumentDetailPage({id: id});
	},

	userSettings: function(){
		$('.content').html('');
		new UserSettingsPage();
	}
});

var router = new AppRouter();

Parse.history.start();