// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);


  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, {outputStride:8, quantBytes:4}, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function mousePressed(){
  console.log(JSON.stringify(poses))
}

function draw() {
  image(video, 0, 0, width, height);
  strokeWeight(1);
    

  // For one pose only (use a for loop for multiple poses!)
  if (poses.length > 0) {
    const pose = poses[0].pose;
      console.log(pose);
    

    fill(47,79,79);
    const nose = pose.nose;
    rect(nose.x-15, nose.y-15, 20, 20);
      
    fill(0,139,139);
    const leftEar = pose.leftEar;
    triangle(leftEar.x, leftEar.y+15,leftEar.x, leftEar.y-15,leftEar.x+50, leftEar.y);
      
    fill(0,139,139);
    const rightEar = pose.rightEar;
    triangle(rightEar.x, rightEar.y+15,rightEar.x, rightEar.y-15,rightEar.x-50, rightEar.y);


    fill(47,79,79);
    const rightEye = pose.rightEye;
    rect(rightEye.x-15, rightEye.y-15, 30, 30);

    fill(47,79,79);
    const leftEye = pose.leftEye;
    rect(leftEye.x-15, leftEye.y-15, 30, 30);

  }
}