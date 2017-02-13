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

# TO-DO:
  * Score
    * Coin Count
  * Timer
  * Loop Music / Running out of time music
  * Map:
    * Repeating Background / Side scrolling
  * background objects/platforms
  * start menu
  * world map
  * Interface:
    * show SNES controller
    * show controls
    * Loading Screen
    * mute icon

  * Controls:
    * Start Button
    * IOS controls
    * crouch jumping
    * sprint

  * Sprites:
    * Super Mushroom
    * Super Mario
    * 1-Up
    * Goomba

  * Animation:
    * Super Mario
    * slide
    * Coin collect
    * turn around
    * crouch jumping
    * sprint

  * Sounds:
    * slide

  * Bugs:
    * Double jump (really fast button mashing)
    * stuck in inside Corner
    * getting stuck on walls
    * slope corners
    * jumping on slopes more accurate

  * Code:
    * speed up production build
    * refactor yoshi island map
    * enemies
    * synchronous music files
    * Enum sprite frames, jumptype
