# SuperMarioWorldJS ([Demo](https://kevinchau321.github.io/SuperMarioWorldJS/))
Super Mario World built with Phaser.

<p align="center">
  <img src="static/screenshots/1.png?raw=true" alt="Screenshot"/>
</p>

# Demo
Play the demo online at <a href="https://kevinchau321.github.io/SuperMarioWorldJS/">github.io/SuperMarioWorldJS</a>

Play with the Monokai Color Palette: <a href="https://kevinchau321.github.io/SublimeMarioWorldJS/">github.io/SublimeMarioWorldJS</a>

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
To start the server, simply run :

    npm start

By default the port will be set to 3000 so go to the following URL in your browser:

    http://localhost:3000

That's it to start playing!

# Building
This project uses `gulp` to build and minify the source code via UglifyJS2.
To build the project, run:

    npm run production

This will copy uglified and minified scripts to the `build/` folder.

It will also a `watch` task that continuously monitors the source files and will automatically trigger a build process and browser refresh if anything changes.

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
    * can't jump under slope platform
    * Varying sprite width (getting stuck on walls)

  * Code:
    * quantpng gulp task

  * Enum sprite frames, jumptype
