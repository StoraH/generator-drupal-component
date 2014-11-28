'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var JsGenerator = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

      var prompts = [{
        when: function (response) {
          return (this.options && this.options.ComponentName) ? false : true;
        }.bind(this),
        type: 'input',
        name: 'ComponentName',
        message: 'What is the name of the component?',
      }];

    this.prompt(prompts, function (props) {
      if (props.ComponentName){
        this.ComponentName = props.ComponentName;
        this.componentPath = './';
      } else {
        this.ComponentName = this.options.ComponentName;
        this.componentPath = this.options.ComponentName + '/';
      }
      done();
    }.bind(this));
  },

  writing: function () {
    this.template('ComponentName.js', this.componentPath + this.ComponentName + '.js', this);
  },

});

module.exports = JsGenerator;
