//import * as PIXI from 'pixi.js';
// console.log("test");
// let testy = document.createElement('p');
// testy.innerHTML = "testy was hhhhhhhhhhhhhhhhhhhhhere";
// document.getElementById("canvas_ctr").append(testy)

// Aliases
let Application = PIXI.Application;
let loader = new PIXI.Loader();
let Sprite = PIXI.Sprite;
let utils = PIXI.utils;
// paths
let face_url = 'images/bunnyball_test.png';


// Create the Application
let app = new Application({
  width: 500,
  height: 500,
  antialias: true,
  backgroundAlpha: 1,
  resolution: 1,
  backgroundColor: 0x202026
});

// Put Canvas into div
document.getElementById("canvas_ctr").append(app.view);


loader
  .add(face_url)
  .load(setup);

function setup() {
  let face = new Sprite(loader.resources[face_url].texture);
  app.stage.addChild(face);
};

//app.stage.addChild(face);