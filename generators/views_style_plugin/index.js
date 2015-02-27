'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var viewsStylePluginGenerator = yeoman.generators.Base.extend({
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
    this.template('ComponentName.tpl.php', this.componentPath + this.ComponentName + '.tpl.php', this);
    this.template('ComponentName.views.inc', this.componentPath + this.ComponentName + '.views.inc', this);
  },

});

module.exports = viewsStylePluginGenerator;
