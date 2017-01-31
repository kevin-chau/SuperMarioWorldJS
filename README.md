# SuperMarioWorldJS ([Demo](https://kevinchau321.github.io/SuperMarioWorldJS/))
Super Mario World built with Phaser.

<p align="center">
  <img src="assets/screenshots/1.png?raw=true" alt="Screenshot"/>
</p>

# Demo
Play the demo online at https://kevinchau321.github.io/SuperMarioWorldJS/

# Installing
This project uses `node` and `npm` to get up and running:

    git clone https://github.com/kevinchau321/SuperMarioWorldJS.git
    cd SuperMarioWorldJS
    npm install

# Running
This project uses `grunt connect` to run the web server behind Phaser. To start the server, simply run `grunt`:

    grunt

This will start the grunt web server as well as a `watch` task.
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

# Controls

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

  * Controls:
    * running
    * Different jump heights
    * Adjust kinematics
    * jump only once per button press
    * Start Button
    * slide

  * Sprites:
    * Super Mushroom
    * Super Mario
    * 1-Up
    * Goomba

  * Animation:
    * spin jump
    * Super Mario
    * slide
    * Coin collect
    * turn around
    * crouch jumping

  * Sounds:
    * mute music button
    * spin jump
    * slide

  * Code:
    * refactor looking up and crouching boolean logic
    * Build System:
      * Multiple source files
  * IO PAGE / DEMO

  * Enum sprite frames
