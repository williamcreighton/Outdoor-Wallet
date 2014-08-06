/* global Parse, alert, _ */

'use strict';

// console.log('user dashboard page file loaded');

var DocumentUploadPage = Parse.View.extend({

  // className: 'docUploadPage',

  template: _.template($('.document-upload-template').text()),

  events: {
    'click .add-document-btn' : 'addDocument',
    'click .delete-document-btn' : 'deleteDocument'
  },

  initialize: function () {
    $('.content').append(this.el);
    this.render();
  },

  render: function () {
    var data = this.model || {};
    var renderedTemplate = this.template(data.attributes);
    this.$el.html(renderedTemplate);
  },

  addDocument: function(){
    var fileUploadControl = $('.document-upload')[0];
    if (fileUploadControl.files.length > 0) {
      var file = fileUploadControl.files[0];
      var name = 'documentImage.jpg'; // WOULD THIS WORK IF PDF OR OTHER FILE TYPE?
      var parseFile = new Parse.File(name, file);
      var cardNumber = $('.card-number-input').val();
      var cardType = $('.card-type-input').val();
      var courseType = $('.course-type-input').val();
      var dateIssued = $('.date-issued-input').val();
      var dateOfBirth = $('.dob-input').val();
      var instructor = $('.instructor-input').val();
      var stateIssued = $('.state-issued-input').val();
    }
    
    var that = this;
    parseFile.save().then(function(){
      console.log('I\'ve been saved!');

      var documents = new Documents();
      documents.set('CardNumber', cardNumber);
      documents.set('CardType', cardType);
      documents.set('CourseType', courseType);
      documents.set('DateIssued', dateIssued);
      documents.set('DateOfBirth', dateOfBirth);
      documents.set('Instructor', instructor);
      documents.set('StateIssued', stateIssued);
      documents.set('documentRef', parseFile);
      documents.set('docURL', parseFile.url());
      documents.save().done(function(){
        that.render();
        Parse.User.current().relation('documents').add(documents);
        Parse.User.current().save();
      });
      that.model = documents;
    }, function(error) {
      // The file either could not be read, or could not be saved to Parse.
          alert('Failed to create new object, with error code: ' + error.description);
        });
  },

  deleteDocument: function(){
    this.model.destroy();
    this.model = new Parse.Object();
    this.render();
  }
});