# SuperMarioWorldJS ([Demo](https://kevinchau321.github.io/SuperMarioWorldJS/))
Super Mario World built with Phaser.

<p align="center">
  <img src="assets/screenshots/1.png?raw=true" alt="Screenshot"/>
</p>

# Demo
Play the demo online at <a href="https://kevinchau321.github.io/SuperMarioWorldJS/">github.io/SuperMarioWorldJS</a>

# Controls
* Keyboard Mapping:
  * SPACE - Jump
  * ARROW KEYS - Left, Right, Up, Down

# Installing
This project uses `node` and `npm` to get up and running:

    git clone https://github.com/kevinchau321/SuperMarioWorldJS.git
    cd SuperMarioWorldJS
    npm install

# Running
This project uses `grunt connect` to run the web server behind Phaser. If you don't have the grunt command line interface you can install it with `npm`:

    npm install -g grunt-cli

To start the server, simply run `grunt`:

    grunt

This will start the grunt web server as well as a `watch` task.
If you want to run just the server without the watch task, use:

    grunt:server:keepalive

By default the port will be set to 8888 so go to the following URL in your browser:

    http://localhost:8888

That's it to start playing!
You can change the port in `Gruntfile.js`

# Building
This project uses `grunt` to build and minify the source code via UglifyJS2.
To build the project, run:

    grunt build

This will place a file called `super-mario-world-js.min.js` in your `build/` folder.

Alternatively, just run:

    grunt

This will start the web server as well as a `watch` task that continuously monitors the source files and will automatically trigger the build process if anything changes. If you want to start the `watch` task only, run:

    grunt watch

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

  * Controls:
    * Start Button
    * slide
    * IOS controls
    * crouch jumping

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

  * Sounds:
    * mute music button
    * slide

  * Code:
    * PHASER 2.6.2 Branch
    * REFACTOR REFACTOR REFACTOR
    * Build System:
      * Multiple source files

  * Enum sprite frames, jumptype
