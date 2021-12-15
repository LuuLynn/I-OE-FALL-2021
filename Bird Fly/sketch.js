
let imgStay = [];
let imgUp = [];
let imgDown = [];
let imgDrop = [];
let imgSnow;
let imgStayM;
let posY = 0;
let mode = 0;
let upIndex = 0;
let upFrame = 0;
let downIndex = 0;
let downFrame = 0;
let stayIndex = 0;
let stayFrame = 0;
let mic;
let snowY = 0;
let imgSpring;
let imgSummer;
let imgAutumn;
let season = 3;

let imgD0;
let imgD1;
let imgD2;
let inpVAL;
function preload() {
  imgDrop[0] = loadImage("snowcover.png");
  imgDrop[1] = loadImage("afterdrop1.png");
  imgDrop[2] = loadImage("afterdrop2.png");
  imgSnow = loadImage("snowdrop.png");

  imgStay[0] = loadImage("stay1.png");
  imgStay[1] = loadImage("stay2.png");

  imgDown[0] = loadImage("down1.png");
  imgDown[1] = loadImage("down2.png");


  imgUp[0] = loadImage("up1.png");
  imgUp[1] = loadImage("up2.png");
  imgUp[2] = loadImage("up3.png");
  imgUp[3] = loadImage("up4.png");

  imgSpring = loadImage("Spring.jpg");
  imgSummer = loadImage("Summer.jpg");
  imgAutumn = loadImage("Autumn.jpg");
  imgStayM = loadImage("Mirror.png");
}

function setup() {
  createCanvas(1024, 430);
  imgSnow.resize(width, height);
  for (let i = 0; i < imgDrop.length; i++) {
    imgDrop[i].resize(width, height);
  }

  for (let i = 0; i < imgStay.length; i++) {
    imgStay[i].resize(width, height);
  }
  imgStayM.resize(width, height);
  imgSpring.resize(width, height);
  imgSummer.resize(width, height);
  imgAutumn.resize(width, height);
  for (let i = 0; i < imgDown.length; i++) {
    imgDown[i].resize(width, height);
  }

  for (let i = 0; i < imgUp.length; i++) {
    imgUp[i].resize(width, height);
  }

  mic = new p5.AudioIn();
  mic.start();
  frameRate(20);

  let inp = createInput('');
  inp.position(0, 0);
  inp.size(100);
  inp.input(myInputEvent);
}


function myInputEvent() {
  console.log('you are typing: ', this.value());
  inpVAL = this.value()
}

function draw() {
  background(159, 218, 222);
  if (season === 0) {
    imgD0 = imgSpring;
    imgD1 = imgSpring;
    imgD2 = imgSpring;
  }
  if (season === 1) {
    imgD0 = imgSummer;
    imgD1 = imgSummer;
    imgD2 = imgSummer;
  }
  if (season === 2) {
    imgD0 = imgAutumn;
    imgD1 = imgAutumn;
    imgD2 = imgAutumn;
  }
  if (season === 3) {
    imgD0 = imgDrop[0];
    imgD1 = imgDrop[1];
    imgD2 = imgDrop[2];
  }

  // if (frameCount % 20 < 10) {
  //   posY = frameCount % 20
  //   image(imgDrop[0], 0, frameCount % 20);
  // } else {
  //   posY = 20 - frameCount % 20
  //   image(imgDrop[1], 0, 20 - frameCount % 20);
  // }

  if (mode === 0) {
    image(imgD0, 0, 0);
    switch (stayIndex) {
      case 0:
        // image(imgStay[0], 328 - 500 - ((frameCount - stayFrame) % 15) * 3, 15 + posY);
        image(imgStay[0], 328 - 500, 15 + posY);
        break;
      case 1:
        // image(imgStay[1], 0 + ((frameCount - stayFrame) % 15) * 1.5, posY);
        image(imgStay[0], 328 - 500 - 20, 15 + posY - 30);
        break;
      case 2:
        image(imgStay[0], 328 - 500 - 40, 15 + posY - 10);
        break;
      case 3:
        image(imgStay[1], 0, posY);
        break;
      case 4:
        image(imgStay[1], 0 - 20, posY - 20);
        break;
      case 5:
        image(imgStay[1], 0 - 40, posY);
        break;
      case 6:
        image(imgStay[1], 0 - 60, posY - 20);
        break;
      case 7:
        image(imgStay[1], 0 - 80, posY);
        break;
      case 8:
        image(imgStayM, 0 - 80 + 80, posY);
        break;
      case 9:
        image(imgStayM, 0 - 60 + 80, posY - 20);
        break;
      case 10:
        image(imgStayM, 0 - 40 + 80, posY);
        break;
      case 11:
        image(imgStayM, 0 - 20 + 80, posY - 20);
        break;
      case 12:
        image(imgStayM, 0 + 80, posY);
        break;



    }
    if (((frameCount - stayFrame) % 5 === 0)) {
      stayIndex++;
    }
    if (stayIndex >= 13) {
      stayIndex = 3;
    }
  }
  if (mode === 1) {
    image(imgD0, 0, 0);
    switch (upIndex) {
      case 0:
        image(imgUp[0], 367 - 500, 5 - 100);
        break;
      case 1:
        image(imgUp[1], 302 - 500, 132 - 200);
        break;
      case 2:
        image(imgUp[2], 150 - 500, 119 - 200);
        break;
      case 3:
        image(imgUp[3], 234 - 500, 50 - 200);
        break;
    }

    if (((frameCount - upFrame) % 6 === 0)) {
      upIndex++;
    }

  }
  if (mode === 2) {
    // image(imgDrop[1], 0, 0);
    switch (downIndex) {
      case 0:
        image(imgD0, 0, 0);
        image(imgDown[0], 500 - 500, 5 - 100);
        break;
      case 1:
        image(imgD0, 0, 0);
        image(imgDown[1], 403 - 500, 158 - 100);
        break;
      case 2:
        image(imgD2, 0, 0);
        image(imgStay[0], 328 - 500, 15);
        break;
      case 3:
        image(imgD1, 0, 0);
        image(imgStay[0], 328 - 500 + 2, 13);
        snowY = 0;
        break;
      default:
        snowY = snowY + 2.5;
        image(imgD2, 0, 0);
        image(imgStay[0], 328 - 500, 15);
        if (season === 3) {
          image(imgSnow, 0, snowY);
        } else {
          downIndex = 20;
        }
        break;
    }
    if (((frameCount - downFrame) % 6 === 0)) {
      downIndex++;
    }

    if (downIndex >= 20) {
      mode = 0;
      stayIndex = 0;
      stayFrame = 0;
    }
  }



  micLevel = mic.getLevel();
  micLevel = micLevel * 10000;
  // console.log(micLevel);
  if (micLevel > 5 && mode === 0) {
    mode = 1;
    upFrame = frameCount;
    upIndex = 0;
  }

  if (micLevel < 5 && mode === 1 && upIndex > 5) {
    mode = 2;
    downFrame = frameCount;
    downIndex = 0;
  }

}



function mousePressed() {
  console.log(mouseX, mouseY)
  // if (mode >= 2) {
  //   return
  // }
  // mode++;
  // if (mode === 1) {
  //   upFrame = frameCount;
  //   upIndex = 0;
  // }

  // if (mode === 2) {
  //   downFrame = frameCount;
  //   downIndex = 0;
  // }

  if (inpVAL >= 3 && inpVAL <= 5) {
    season = 0;
  }
  else if (inpVAL >= 6 && inpVAL <= 8) {
    season = 1;
  }
  else if (inpVAL >= 9 && inpVAL <= 11) {
    season = 2;
  }
  else {
    season = 3;
  }
}
