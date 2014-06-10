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
      message: 'This generator has no options. It provides you a starting point with Less, PostgreSQL, and Angular. Are you cool with that?',
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
    this.mkdir('client');
    this.mkdir('dist');
    this.mkdir('test');
    this.copy('._gitignore', '.gitignore');
    this.copy('._bowerrc.json', '.bowerrc');
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_gulpfile.js', 'gulpfile.js');

    this.mkdir('server');
    this.copy('server/_schema.sql', 'server/schema.sql');
    this.copy('server/_server.js', 'server/server.js');
    this.copy('server/main/_app.js', 'server/main/app.js');
    this.copy('server/main/_config.js', 'server/main/config.js');
    this.copy('server/main/_middleware.js', 'server/main/middleware.js');
    this.copy('server/extra/_extra_controllers.js', 'server/extra/extra_controllers.js');
    this.copy('server/extra/_extra_model.js', 'server/extra/extra_routes.js');
    this.copy('server/extra/_extra_model.js', 'server/extra/extra_model.js');

    this.template('client/_app.js', 'client/app.js');
    this.template('client/_index.html', 'client/index.html');
    this.mkdir('client/src');
    this.mkdir('client/assets');
    this.copy('client/assets/styles/_main.less', 'client/assets/styles/main.less');
    this.mkdir('client/assets/styles/partials');
    this.mkdir('client/assets/fonts');

    this.mkdir('client/src/common');
    this.mkdir('client/src/pages');

    this.mkdir('client/src/common/directives');
    this.mkdir('client/src/common/services');

    this.mkdir('client/src/pages/controllers');
    this.mkdir('client/src/pages/directives');
    this.mkdir('client/src/pages/services');
    this.mkdir('client/src/pages/templates');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = SqangularGenerator;
