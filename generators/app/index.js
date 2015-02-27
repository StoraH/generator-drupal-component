'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var DrupalComponentGenerator = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the Drupal Component generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of the component?',
      },
      {
        type: 'confirm',
        name: 'generateJs',
        message: 'JS file?',
        default: true
      },
      {
        type: 'confirm',
        name: 'generateScss',
        message: 'SCSS file?',
        default: true
      },
      {
        type: 'confirm',
        name: 'generateTwig',
        message: 'Twig file?',
        default: true
      },
      {
        type: 'confirm',
        name: 'generateCtools_ContentTypeGenerator',
        message: 'Ctools content type?',
        default: true
      },
      {
        type: 'confirm',
        name: 'generateModule',
        message: 'Drupal module?',
        default: true
      },
    ];

    this.prompt(prompts, function (props) {
      if (props.generateJs) {
        this.composeWith("drupal-component:js", {options: {'ComponentName': props.ComponentName}});
      }
      if (props.generateScss) {
        this.composeWith("drupal-component:scss", {options: {'ComponentName': props.ComponentName}});
      }
      if (props.generateTwig) {
        this.composeWith("drupal-component:twig", {options: {'ComponentName': props.ComponentName}});
      }
      if (props.generateModule) {
        this.composeWith("drupal-component:module", {options: {'ComponentName': props.ComponentName, generateCtools_ContentType: props.generateCtools_ContentTypeGenerator}});
      }
      if (props.generateCtools_ContentTypeGenerator) {
        this.composeWith("drupal-component:ctools-content_type", {options: {'ComponentName': props.ComponentName}});
      }
      done();
    }.bind(this));
  },



});

module.exports = DrupalComponentGenerator;
