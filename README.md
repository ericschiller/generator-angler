
# Angler generator 

> [Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app using [angularjs](https://angularjs.org/), [gulp](http://gulpjs.com/) and [browserify](http://browserify.org/)


### Notes

This project is a fork of Angulpify suited to meet my everyday needs
at my job.  I've updated a lot of packages
and have included Karma, Jasmine, and swapped out live-reload for
browser-sync.  This is mostly for myself, but I
will add options for testing frameworks later on. 

## Todo

* Add generators for Angular modules, controllers, services, etc.
* Make Karma and the testing stack optional.
* Figure out how to get Browsersync work correctly with Jade.  
* Update Watchify and rewrite it appropriately. 
* Clean up stuff I missed when removing previous functionality.

## Features

* Require() everywhere to build a modular application
* Built-in preview server with Browsersync for CSS/SASS
* Automagically lint your scripts
* Automagically compile Sass/Less (you can still use CSS too!)
* CSS Autoprefixing
* Automagically compile your Jade (or HTML if you want!) templates into $templateCache
* Awesome image optimization
* Wire-up Bower dependencies easily with browserify-shim
* Bundle your application for two environments (build/release)

*For more information on what this generator can do for you, take a look at the [gulp plugins](generators/app/templates/_package.json).*

## Tooling

This generator relies on several technologies, make sure your system has:
- [Node.js](http://nodejs.org)
- [Yeoman](http://yeoman.io/learning/index.html)
- [Bower](http://bower.io/#install-bower)
- [Gulp](http://gulpjs.com)
- [[Ruby](https://www.ruby-lang.org/en/installation/) + [Sass](http://sass-lang.com/install)] | Optional


## Getting Started

- Install: `npm install -g generator-angler`
- Run: `yo angler`
- Run:
  * `gulp` for building to the `build` directory
  * `gulp --release` for building to the `release` directory
- Go to http://localhost:3000
- Enjoy!


#### Third-Party Dependencies

*(HTML/CSS/JS/Images/etc)*

To install dependencies, run `bower install --save package-name` to get the files, then add an entry into the [browser](generators/app/templates/_package.json#L41) key of your `package.json`.


## Options

- `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.


## Special Thanks

This generator is a fork of generator-angulpify. Thanks to Julien Goux!

## License

[MIT](https://tldrlegal.com/license/mit-license)
