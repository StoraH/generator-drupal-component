'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var TwigGenerator = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [
      {
        when: function (response) {
          return (this.options && this.options.ComponentName) ? false : true;
        }.bind(this),
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of the component?'
      },
      {
        type: 'confirm',
        name: 'entityModel',
        message: 'Entity model?',
        default: false
      },
      {
        when: function (response) {
          return response.entityModel;
        },
        type: 'input',
        name: 'entityType',
        message: 'Which entity type?',
        default: 'node'
      },
      {
        when: function (response) {
          return response.entityModel;
        },
        type: 'input',
        name: 'bundle',
        message: 'Which bundle?'
      },
      {
        when: function (response) {
          return response.entityModel;
        },
        type: 'confirm',
        name: 'useViewMode',
        message: 'View mode override?',
        default: false
      },
      {
        when: function (response) {
          return response.useViewMode;
        },
        type: 'input',
        name: 'viewMode',
        message: 'Which view mode?',
        default: 'full'
      }
    ];


    this.prompt(prompts, function (props) {
      if (props.ComponentName){
        this.ComponentName = props.ComponentName;
        this.componentPath = './';
      } else {
        this.ComponentName = this.options.ComponentName;
        this.componentPath = this.options.ComponentName + '/';
      }
      this.useViewMode = props.useViewMode;
      this.entityType = props.entityType;

      if (props.useViewMode) {
        this.bundle = props.bundle;
        this.viewMode = props.viewMode;
      }

      this.entityModel = props.entityModel;

      done();
    }.bind(this));
  },

  writing: function () {
    this.template('ComponentName.html.twig', this.componentPath + this.ComponentName + '.html.twig', this);
  }

});

module.exports = TwigGenerator;
