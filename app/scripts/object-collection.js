/* global Parse */

'use strict';

// console.log('parse keys loaded');

Parse.initialize("GALoEHmMmowxBPoiHn0HD0VvBME0xot18o3xLIXy", "a3iUHr0DVR9GJ3mFCiQcPLSz7WVSYTeV6x7pgKfY");

// console.log('object-collection file loaded');


// 'Outdoor Wallet' Object (Backbone.Model)

var Documents = Parse.Object.extend({

	className: 'Documents',

	defaults: {
		CardNumber: '',
		CardType: '',
		CourseType: '',
		DateIssued: '',
		DateOfBirth: '',
		Instructor: '',
		StateIssued: ''
	},

});

// 'Outdoor Wallet' Collection (Backbone.Collection)

var DocumentsCollection = Parse.Collection.extend({

	model: Documents

});