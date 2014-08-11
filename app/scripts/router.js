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
		// 'my-account' : 'userSettings'
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
		if (Parse.User.current()){
	    router.navigate('#/dashboard', {trigger: true});
	  } else {
	    $('.content').html('');
	    new LandingPage();
	  }  
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
		if (Parse.User.current()){
	    $('.content').html('');
	    new UserDashboardPage();
	  } else {
	    router.navigate('', {trigger: true});
	  } 
	},

	documentUpload: function(){
		if (Parse.User.current()){
	    $('.content').html('');
	    new DocumentUploadPage();
	  } else {
	    router.navigate('', {trigger: true});
	  }
	},

	documentDetail: function(id){
		if (Parse.User.current()){
			$('.content').html('');
	    new DocumentDetailPage({id: id});
	  } else {
	    router.navigate('', {trigger: true});
	  }
	},

	// userSettings: function(){
	// 	if (Parse.User.current()){
	// 		$('.content').html('');
	//     new UserSettingsPage();
	//   } else {
	//     router.navigate('', {trigger: true});
	//   }
	// },
});

var router = new AppRouter();

Parse.history.start();