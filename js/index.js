////// Script setup //////

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
let Container = PIXI.Container;
let Graphics = PIXI.Graphics;
// paths
//let face_url = 'images/bunnyball_test.png';

////// Application Setup //////
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
let state;

////// Graphics Setup //////
let gradientLeft = makeGradient(25, 25, {0: '#10c3e7', 1: '#aaeaaa'});
let gradientRight = makeGradient(25, 500, {0: '#F69CD2', 1: '#D8CFAC'});
let paddle_left,
    paddle_right,
    bg_right,
    container_right;

// load sprites
loader
  .load(setup);

////// Game Setup //////
function setup() {
  paddle_left = new Sprite(gradientLeft);
    paddle_left.x = 50;
    paddle_left.y = 50;
    paddle_left.width = 25;
    paddle_left.height = 100;
    app.stage.addChild(paddle_left);
  bg_right = new Sprite(gradientRight);
    // bg_right.x = 415;
    // bg_right.y = 0;
    bg_right.width = 25;
    bg_right.height = 500;
  container_right = new Container();
    container_right.x = 415;
    container_right.y = 50;
    container_right.width = 25;
    container_right.height = 500;
    container_right.addChild(bg_right);
    app.stage.addChild(container_right);
  paddle_right = new Graphics();
    paddle_right.beginFill(0xFFFFFF);
    paddle_right.drawRect(415, 50, 25, 100);
    paddle_right.endFill();
    container_right.mask = paddle_right; 
    app.stage.addChild(paddle_right);

    state = play;
    app.ticker.add(dt => gameLoop(dt));
};

////// Game States //////
function gameLoop(dt) {
  state(dt);
}

function play(dt) {
  if (paddle_right.y <= 350) {
     paddle_right.y += 1;
     paddle_left.y += 1;
  } else {
    state = end;
    paddle_right.y = 0;
    paddle_left.y = 50;
  };
  console.log(`left: ${paddle_left.y}, right: ${paddle_right.y}`);
}

////// Close Game //////
function end() {
  console.log("Bam alam");
  state = play;
}


////// Utility Functions //////

function makeGradient(x1, y1, stopColor) {
  let canvas = document.createElement('canvas');
  canvas.width = x1;
  canvas.height = y1;
  let ctx = canvas.getContext('2d');

  let gradient = ctx.createLinearGradient(0, 0, x1, y1);
  for (let stop in stopColor) {
    gradient.addColorStop(parseFloat(stop), stopColor[stop]);
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, x1, y1);

  return PIXI.Texture.from(canvas);
}


/*
game plan:
objects:
  left paddle
    up and down movement
    at constant velocity
  right paddle
    same
  ball

  scoreboard
  net
  top wall
  bottom wall?

counters
  score left
  score right

*/