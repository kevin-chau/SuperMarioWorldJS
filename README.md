# SuperMarioWorldJS ([Demo](https://kevinchau321.github.io/SuperMarioWorldJS/))
Super Mario World built with Phaser.

<p align="center">
  <img src="static/screenshots/1.png?raw=true" alt="Screenshot"/>
</p>

Featuring ES6, Node.js, Gulp, Browserify, Babel, and Browsersync.

# Demo
Play the demo online at <a href="https://kevinchau321.github.io/SuperMarioWorldJS/">github.io/SuperMarioWorldJS</a>

# Controls
* Keyboard Mapping:
  * ARROW KEYS - Left, Right, Up, Down
  * A - Hold to Run
  * S - Jump
  * D - Spin Jump
  * M - Toggle Mute

# Installing
SuperMarioWorldJS uses `node` and `npm` to get up and running:

    git clone https://github.com/kevinchau321/SuperMarioWorldJS.git
    cd SuperMarioWorldJS
    npm install

# Running
To start a development server, simply run :

    npm start

By default the port will be set to 3000 so go to the following URL in your browser:

    http://localhost:3000

That's it to start playing!

`npm start` will also run a `watch` task that continuously monitors the `src` and `static` directories, automatically triggering a build process and browser refresh if anything changes.

# Building
SuperMarioWorldJS uses `gulp` to build and minify the source code via `UglifyJS`.
To build the project, run:

    npm run production

This will copy the minified scripts to the `build/` folder. Additionally, asset images will be copied with lossy compression using `pngquant` and JSON atlases will be minified using `JSON.minify`.

To clean the build folder:

    gulp clean

NOTE: You *must* clean the build directory before running `npm start` or `npm run production` every-time.

# Phaser Debug
You can monitor frame rate and other Phaser stats by turning on the Phaser Debug plugin. In `src/js/objects/constants.js`, change `DEBUG_ON: false` to `DEBUG_ON: true`.

# To Do List
<a href="https://gist.github.com/kevinchau321/174ee60362ddf2782fcae5931d6e2ec1"> gist </a>
