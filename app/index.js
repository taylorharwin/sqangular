'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var SqangularGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the Sqangular generator. Pronunciation: "skway--ngular". Start your MySQL Angular projects more quickly!'));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'This generator has no options, as we wanted to provide the best implementations of Sass, MySql, and Angular',
      default: true
    }, {
      type: 'input',
      name: 'name',
      message: 'What is the name of your application?',
      default: 'APP'
    }];

    this.prompt(prompts, function (prop) {
        
      this.name = prop.name;
      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');
    this.mkdir('app/templates/server');
    this.copy('server/_schema.sql', 'server/schema.sql');
    this.copy('server/_server.js', 'server/server.js');
    this.copy('server/main/_app.js', 'server/main/app.js');
    this.copy('server/main/_config.js', 'server/main/config.js');
    this.copy('server/main/_middleware.js', 'server/main/middleware.js');
    this.copy('server/extra/_extra_controllers.js', 'server/extra/extra_controllers.js');
    this.copy('server/extra/_extra_model.js', 'server/extra/extra_routes.js');
    this.copy('server/extra/_extra_model.js', 'server/extra/extra_model.js');
    this.copy('client/styles/css/_app.css', 'client/styles/css/app.css');
    this.template('client/_index.html', 'client/index.html');
    this.template('client/_app.js', 'client/app.js');
    this.template('client/main/_main.tpl.html', 'client/main/main.tpl.html');
    this.template('client/main/_main.js', 'client/main/main.js');
    this.template('client/extra/_extra.tpl.html', 'client/extra/extra.tpl.html');
    this.template('client/extra/_extra.js', 'client/extra/extra.js');
  







    this.mkdir('app/templates/client');
    this.mkdir('app/templates/styles');
    this.mkdir('app/templates/server/main');
    this.mkdir('app/templates/server/extra');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = SqangularGenerator;
