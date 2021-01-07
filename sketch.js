var maze1img, body, maze2, maze2Img, maze3, maze3Img, maze4, maze4Img, box;
var boxImg, line1, line1img;
var gameState = "START";
var pointGroup;

function preload() {
  pacmanbgImg = loadImage("pacmanbg2.png");
  pacmanImg = loadAnimation("pac1.png", "pac2.png");
  ghost1Img = loadImage("ghost1Img.png");
  ghost2Img = loadImage("ghost2Img.png");
  ghost3Img = loadImage("ghost3Img.png");
  ghost4Img = loadImage("ghost4Img.png");
  restartImg = loadImage("restartImg.png");
}
function setup() {
  createCanvas(800, 800);
  // body = createSprite(4000, 260, 10, 10);
  // body.addImage("maze1Img", maze1Img);
  // body.scale = 1.18;
  // maze2 = createSprite(240, 290, 10, 10);
  // maze2.addImage("maze3Img", maze3Img);
  // maze2.scale = 1.18;
  // maze3 = createSprite(540, 310, 10, 10);
  // maze3.addImage("maze2Img", maze2Img);
  // maze3.scale = 1.18;
  // maze4 = createSprite(400, 520, 10, 10);
  // maze4.addImage("maze1Img", maze1Img);
  // maze4.scale = 1.18;
  // box = createSprite(420, 400, 10, 10);
  // box.addImage("boxImg", boxImg);
  // box.scale = 1.3;
  // line1 = createSprite(230, 465, 10, 10);
  // line1.addImage("line1Img", line1Img);
  // line1.scale = 1.2;
  // line2 = createSprite(570, 460, 10, 10);
  // line2.addImage("line1Img", line1Img);
  // line2.scale = 1.2;
  // maze5 = createSprite(395, 640, 10, 10);
  // maze5.addImage("maze1Img", maze1Img);
  // maze5.scale = 1.18;
  maze6 = createSprite(520, 560, 100, 15);
  maze6.visible = false;
  maze7 = createSprite(265, 560, 100, 15);
  maze7.visible = false;
  maze8 = createSprite(200, 690, 250, 15);
  maze8.visible = false;
  maze88 = createSprite(600, 690, 250, 15);
  maze88.visible = false;
  maze9 = createSprite(560, 660, 15, 80);
  maze9.visible = false;
  maze10 = createSprite(230, 660, 15, 80);
  maze10.visible = false;
  maze11 = createSprite(395, 750, 780, 15);
  maze11.visible = false;
  maze12 = createSprite(395, 80, 780, 15);
  maze12.visible = false;
  maze13 = createSprite(10, 180, 15, 250);
  maze13.visible = false;
  maze14 = createSprite(780, 180, 15, 250);
  maze14.visible = false;
  maze15 = createSprite(780, 620, 15, 250);
  maze15.visible = false;
  maze16 = createSprite(10, 620, 15, 250);
  maze16.visible = false;
  maze17 = createSprite(50, 290, 200, 15);
  maze17.visible = false;
  maze18 = createSprite(730, 290, 200, 15);
  maze18.visible = false;
  maze19 = createSprite(730, 365, 200, 15);
  maze19.visible = false;
  maze20 = createSprite(50, 365, 200, 15);
  maze20.visible = false;
  maze21 = createSprite(50, 420, 200, 15);
  maze21.visible = false;
  maze22 = createSprite(50, 500, 200, 15);
  maze22.visible = false;
  maze23 = createSprite(730, 500, 200, 15);
  maze23.visible = false;
  maze24 = createSprite(730, 420, 200, 15);
  maze24.visible = false;
  maze25 = createSprite(145, 330, 15, 80);
  maze25.visible = false;
  maze26 = createSprite(635, 330, 15, 80);
  maze26.visible = false;
  maze27 = createSprite(635, 460, 15, 80);
  maze27.visible = false;
  maze28 = createSprite(145, 460, 15, 80);
  maze28.visible = false;
  maze29 = createSprite(300, 395, 15, 80);
  maze29.visible = false;
  maze30 = createSprite(480, 395, 15, 80);
  maze30.visible = false;
  maze31 = createSprite(390, 360, 200, 15);
  maze31.visible = false;
  maze32 = createSprite(390, 420, 200, 15);
  maze32.visible = false;
  maze33 = createSprite(392.5, 620, 190, 20);
  maze33.visible = false;
  maze34 = createSprite(392.5, 230, 190, 20);
  maze34.visible = false;
  maze35 = createSprite(392.5, 660, 20, 90);
  maze35.visible = false;
  maze36 = createSprite(392.5, 260, 20, 80);
  maze36.visible = false;
  maze37 = createSprite(225, 295, 20, 140);
  maze37.visible = false;
  maze38 = createSprite(560, 295, 20, 140);
  maze38.visible = false;
  maze39 = createSprite(560, 465, 20, 85);
  maze39.visible = false;
  maze401 = createSprite(225, 465, 20, 85);
  maze401.visible = false;
  maze40 = createSprite(392.5, 495, 190, 15);
  maze40.visible = false;
  maze41 = createSprite(392.5, 520, 20, 80);
  maze41.visible = false;
  maze42 = createSprite(110, 150, 80, 45);
  maze42.visible = false;
  maze43 = createSprite(675, 150, 80, 40);
  maze43.visible = false;
  maze44 = createSprite(515, 150, 120, 45);
  maze44.visible = false;
  maze45 = createSprite(265, 150, 120, 45);
  maze45.visible = false;
  maze46 = createSprite(30, 620, 67, 20);
  maze46.visible = false;
  maze47 = createSprite(750, 620, 67, 20);
  maze47.visible = false;
  maze48 = createSprite(110, 230, 80, 20);
  maze48.visible = false;
  maze49 = createSprite(675, 230, 80, 20);
  maze49.visible = false;
  maze50 = createSprite(392.5, 120, 20, 100);
  maze50.visible = false;
  maze51 = createSprite(265, 295, 100, 20);
  maze51.visible = false;
  maze52 = createSprite(515, 295, 100, 20);
  maze52.visible = false;
  maze53 = createSprite(112.5, 560, 70, 15);
  maze53.visible = false;
  maze54 = createSprite(672.5, 560, 80, 20);
  maze54.visible = false;
  maze55 = createSprite(645, 590, 15, 80);
  maze55.visible = false;
  maze56 = createSprite(140, 590, 20, 80);
  maze56.visible = false;
  maze57 = createSprite(392.5, 625, 200, 20);
  maze57.visible = false;
  maze58 = createSprite(550, 560, 150, 15);
  maze58.visible = false;
  maze59 = createSprite(515, 329, 10, 40);
  maze59.visible = false;
  maze60 = createSprite(115, 587, 10, 40);
  maze60.visible = false;
  maze61 = createSprite(635, 590, 15, 80);
  maze61.visible = false;
  maze62 = createSprite(465, 581, 30, 30);
  maze62.visible = false;
  maze63 = createSprite(513, 432, 20, 20);
  maze63.visible = false;
  maze64 = createSprite(515, 423, 10, 5);
  maze64.visible = false;
  maze65 = createSprite(515, 323, 20, 20);
  maze65.visible = false;
  maze66 = createSprite(596, 553, 20, 20);
  maze66.visible = false;
  maze67 = createSprite(480, 519, 20, 20);
  maze67.visible = false;
  maze68 = createSprite(517, 430, 5, 10);
  maze68.visible = false;
  //.
  //.
  //.
  //.
  pacman = createSprite(395, 470, 10, 10);
  //pacman.debug = true;
  pacman.setCollider("rectangle", 0, 0, 380, 380);
  pacman.shapeColor = "red";
  pacman.addAnimation("pacmanImg", pacmanImg);
  pacman.scale = 0.1;

  ghost1 = createSprite(392.5, 392.5, 30, 30);
  ghost1.addImage("ghost1Img", ghost1Img);
  ghost1.scale = 0.3;
  //ghost1.debug = true;
  ghost1.setCollider("rectangle", 0, 0, 140, 140);
  //ghost1.velocityY = -4;
  ghost2 = createSprite(332.5, 392.5, 30, 30);
  ghost2.addImage("ghost2Img", ghost2Img);
  ghost2.scale = 0.3;
  //ghost2.debug = true;
  ghost2.setCollider("rectangle", 0, 0, 140, 140);
  ghost3 = createSprite(452.5, 392.5, 30, 30);
  ghost3.addImage("ghost3Img", ghost3Img);
  ghost3.scale = 0.3;
  //ghost3.debug = true;
  ghost3.setCollider("rectangle", 0, 0, 140, 140);
  ghost4 = createSprite(392.5, 332.5, 30, 30);
  ghost4.addImage("ghost4Img", ghost4Img);
  ghost4.scale = 0.3;
  //ghost4.debug = true;
  ghost4.setCollider("rectangle", 0, 0, 140, 140);
  ghost4.velocityX = 4;
  //.
  //.
  //.
  //.
  restart = createSprite(394, 37, 10, 10);
  restart.addImage("restartImg", restartImg);
  restart.scale = 0.1;
  //.
  //.
  pointGroup = new Group();
  for (x = 172; x < 620; x = x + 25) {
    point = createSprite(x, 587, 10, 10);
    point.shapeColor = "white";
    pointGroup.add(point);
  }
  for (var i = 0; i < pointGroup.length; i++) {
    if (pacman.isTouching(pointGroup)) {
      pointGroup.get(i).destroy();
      console.log(pointGroup);
    }
  }
}
{
}
function draw() {
  background(pacmanbgImg);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  drawSprites();
  //console.log(ghost4.y);

  if (ghost4.isTouching(maze38)) {
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
  }
  if (ghost4.isTouching(maze59)) {
    ghost1.x = 392.5;
    ghost1.y = 332.5;
    ghost1.velocityX = -4;
  }
  if (ghost4.isTouching(maze6)) {
    ghost4.velocityX = -4;
    ghost4.velocityY = 0;
  }
  if (ghost4.isTouching(maze47)) {
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
  }
  if (keyDown(RIGHT_ARROW)) {
    pacman.velocityX = 4;
    pacman.velocityY = 0;
    pacman.rotation = 0;
  } else if (keyDown(LEFT_ARROW)) {
    pacman.velocityX = -4;
    pacman.velocityY = 0;
    pacman.rotation = 180;
  } else if (keyDown(UP_ARROW)) {
    pacman.velocityY = -4;
    pacman.velocityX = 0;
    pacman.rotation = 270;
  } else if (keyDown(DOWN_ARROW)) {
    pacman.velocityY = 4;
    pacman.velocityX = 0;
    pacman.rotation = 90;
  }
  if (ghost4.isTouching(maze41)) {
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
  }
  if (ghost4.isTouching(maze57)) {
    ghost4.velocityX = -4;
    ghost4.velocityY = 0;
  }
  if (ghost4.isTouching(maze56)) {
    ghost4.velocityX = 0;
    ghost4.velocityY = -4;
  }
  if (ghost4.isTouching(maze12)) {
    ghost4.velocityX = 4;
    ghost4.velocityY = 0;
  }
  if (ghost4.isTouching(maze50)) {
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
  }
  if (ghost4.isTouching(maze34)) {
    ghost4.velocityX = 4;
    ghost4.velocityY = 0;
  }
  if (ghost4.isTouching(maze14)) {
    ghost4.velocityX = 0;
    ghost4.velocityY = 4;
  }
  if (ghost4.isTouching(maze18)) {
    ghost4.velocityX = -4;
    ghost4.velocityY = 0;
  }
  if (ghost4.isTouching(maze58)) {
    ghost4.velocityX = -4;
    ghost4.velocityY = 0;
  }
  if (ghost1.isTouching(maze37)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = 4;
    ghost2.x = 392.5;
    ghost2.y = 332.5;
    ghost2.velocityX = -4;
  }
  if (ghost1.isTouching(maze7)) {
    ghost1.velocityX = -4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze16)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = 4;
  }
  if (ghost1.isTouching(maze46)) {
    ghost1.velocityX = 4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze60)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = 4;
  }
  if (ghost1.isTouching(maze8)) {
    ghost1.velocityX = -4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze11)) {
    ghost1.velocityX = 4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze35)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = -4;
  }
  if (ghost1.isTouching(maze57)) {
    ghost1.velocityX = -4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze10)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = -4;
  }
  if (ghost1.isTouching(maze61)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = -4;
  }
  if (ghost1.isTouching(maze62)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = -4;
  }
  if (ghost1.isTouching(maze30)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = -4;
  }
  if (ghost1.isTouching(maze52)) {
    ghost1.velocityX = -4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze40)) {
    ghost1.velocityX = 4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze39)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = -4;
  }
  if (ghost1.isTouching(maze63)) {
    ghost1.velocityX = -4;
    ghost1.velocityY = 0;
  }
  if (ghost1.isTouching(maze401)) {
    ghost1.velocityX = 0;
    ghost1.velocityY = 4;
  }
  if (ghost2.isTouching(maze38)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = 4;
  }
  if (ghost2.isTouching(maze64)) {
    ghost2.velocityX = 4;
    ghost2.velocityY = 0;
    ghost3.x = 392.5;
    ghost3.y = 332.5;
    ghost3.velocityX = -4;
  }
  if (ghost2.isTouching(maze27)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = -4;
  }
  if (ghost2.isTouching(maze12)) {
    ghost2.velocityX = 4;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(maze14)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = 4;
  }
  if (ghost2.isTouching(maze18)) {
    ghost2.velocityX = -4;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(maze66)) {
    ghost2.velocityX = -4;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(maze67)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = -4;
  }
  if (ghost2.isTouching(maze68)) {
    ghost2.velocityX = -4;
    ghost2.velocityY = 0;
  }
  if (ghost2.isTouching(maze401)) {
    ghost2.velocityX = 0;
    ghost2.velocityY = -4;
  }
  if (ghost2.isTouching(maze51)) {
    ghost2.velocityX = 4;
    ghost2.velocityY = 0;
  }

  if (
    ghost1.isTouching(pacman) ||
    ghost2.isTouching(pacman) ||
    ghost3.isTouching(pacman) ||
    ghost4.isTouching(pacman)
  ) {
    pacman.visible = false;
    ghost1.velocityX = 0;
    ghost1.velocityY = 0;
    ghost2.velocityX = 0;
    ghost2.velocityY = 0;
    ghost3.velocityX = 0;
    ghost3.velocityY = 0;
    ghost4.velocityX = 0;
    ghost4.velocityY = 0;
    // gameState = "END";
  }
  if (gameState === "END") {
  }
  if (mousePressedOver(restart)) {
    pacman.visible = true;
    pacman.x = 395;
    pacman.y = 470;
    ghost4.x = 392.5;
    ghost4.y = 332.5;
    ghost4.velocityX = 4;
    ghost1.x = 392.5;
    ghost1.y = 392.5;
    ghost2.x = 332.5;
    ghost2.y = 392.5;
    ghost3.x = 452.5;
    ghost3.y = 392.5;
  }
  //.
  //.
  //.
  //.

  pacman.collide(maze6);
  pacman.collide(maze7);
  pacman.collide(maze8);
  pacman.collide(maze9);
  pacman.collide(maze10);
  pacman.collide(maze11);
  pacman.collide(maze12);
  pacman.collide(maze13);
  pacman.collide(maze14);
  pacman.collide(maze15);
  pacman.collide(maze16);
  pacman.collide(maze17);
  pacman.collide(maze18);
  pacman.collide(maze19);
  pacman.collide(maze20);
  pacman.collide(maze21);
  pacman.collide(maze22);
  pacman.collide(maze23);
  pacman.collide(maze24);
  pacman.collide(maze25);
  pacman.collide(maze26);
  pacman.collide(maze27);
  pacman.collide(maze28);
  pacman.collide(maze29);
  pacman.collide(maze30);
  pacman.collide(maze31);
  pacman.collide(maze32);
  pacman.collide(maze34);
  pacman.collide(maze35);
  pacman.collide(maze36);
  pacman.collide(maze37);
  pacman.collide(maze38);
  pacman.collide(maze39);
  pacman.collide(maze40);
  pacman.collide(maze41);
  pacman.collide(maze42);
  pacman.collide(maze43);
  pacman.collide(maze44);
  pacman.collide(maze45);
  pacman.collide(maze46);
  pacman.collide(maze47);
  pacman.collide(maze48);
  pacman.collide(maze49);
  pacman.collide(maze50);
  pacman.collide(maze51);
  pacman.collide(maze52);
  pacman.collide(maze53);
  pacman.collide(maze54);
  pacman.collide(maze55);
  pacman.collide(maze56);
  pacman.collide(maze401);
  pacman.collide(maze88);
  pacman.collide(maze57);

  ghost4.bounceOff(maze6);
  ghost4.bounceOff(maze7);
  ghost4.bounceOff(maze8);
  ghost4.bounceOff(maze9);
  ghost4.bounceOff(maze10);
  ghost4.bounceOff(maze11);
  ghost4.bounceOff(maze12);
  ghost4.bounceOff(maze13);
  ghost4.bounceOff(maze14);
  ghost4.bounceOff(maze15);
  ghost4.bounceOff(maze16);
  ghost4.bounceOff(maze17);
  ghost4.bounceOff(maze18);
  ghost4.bounceOff(maze19);
  ghost4.bounceOff(maze20);
  ghost4.bounceOff(maze21);
  ghost4.bounceOff(maze22);
  ghost4.bounceOff(maze23);
  ghost4.bounceOff(maze24);
  ghost4.bounceOff(maze25);
  ghost4.bounceOff(maze26);
  ghost4.bounceOff(maze27);
  ghost4.bounceOff(maze28);
  ghost4.bounceOff(maze29);
  ghost4.bounceOff(maze30);
  ghost4.bounceOff(maze31);
  ghost4.bounceOff(maze32);
  ghost4.bounceOff(maze34);
  ghost4.bounceOff(maze35);
  ghost4.bounceOff(maze36);
  ghost4.bounceOff(maze37);
  ghost4.bounceOff(maze38);
  ghost4.bounceOff(maze39);
  ghost4.bounceOff(maze40);
  ghost4.bounceOff(maze41);
  ghost4.bounceOff(maze42);
  ghost4.bounceOff(maze43);
  ghost4.bounceOff(maze44);
  ghost4.bounceOff(maze45);
  ghost4.bounceOff(maze46);
  ghost4.bounceOff(maze47);
  ghost4.bounceOff(maze48);
  ghost4.bounceOff(maze49);
  ghost4.bounceOff(maze50);
  ghost4.bounceOff(maze51);
  ghost4.bounceOff(maze52);
  ghost4.bounceOff(maze53);
  ghost4.bounceOff(maze54);
  ghost4.bounceOff(maze55);
  ghost4.bounceOff(maze56);
  ghost4.bounceOff(maze401);
  ghost4.bounceOff(maze88);
  ghost4.bounceOff(maze57);
  ghost4.bounceOff(maze58);

  ghost1.bounceOff(maze6);
  ghost1.bounceOff(maze7);
  ghost1.bounceOff(maze8);
  ghost1.bounceOff(maze9);
  ghost1.bounceOff(maze10);
  ghost1.bounceOff(maze11);
  ghost1.bounceOff(maze12);
  ghost1.bounceOff(maze13);
  ghost1.bounceOff(maze14);
  ghost1.bounceOff(maze15);
  ghost1.bounceOff(maze16);
  ghost1.bounceOff(maze17);
  ghost1.bounceOff(maze18);
  ghost1.bounceOff(maze19);
  ghost1.bounceOff(maze20);
  ghost1.bounceOff(maze21);
  ghost1.bounceOff(maze22);
  ghost1.bounceOff(maze23);
  ghost1.bounceOff(maze24);
  ghost1.bounceOff(maze25);
  ghost1.bounceOff(maze26);
  ghost1.bounceOff(maze27);
  ghost1.bounceOff(maze28);
  ghost1.bounceOff(maze29);
  ghost1.bounceOff(maze30);
  ghost1.bounceOff(maze31);
  ghost1.bounceOff(maze32);
  ghost1.bounceOff(maze34);
  ghost1.bounceOff(maze35);
  ghost1.bounceOff(maze36);
  ghost1.bounceOff(maze37);
  ghost1.bounceOff(maze38);
  ghost1.bounceOff(maze39);
  ghost1.bounceOff(maze40);
  ghost1.bounceOff(maze41);
  ghost1.bounceOff(maze42);
  ghost1.bounceOff(maze43);
  ghost1.bounceOff(maze44);
  ghost1.bounceOff(maze45);
  ghost1.bounceOff(maze46);
  ghost1.bounceOff(maze47);
  ghost1.bounceOff(maze48);
  ghost1.bounceOff(maze49);
  ghost1.bounceOff(maze50);
  ghost1.bounceOff(maze51);
  ghost1.bounceOff(maze52);
  ghost1.bounceOff(maze53);
  ghost1.bounceOff(maze54);
  ghost1.bounceOff(maze55);
  ghost1.bounceOff(maze56);
  ghost1.bounceOff(maze401);
  ghost1.bounceOff(maze88);
  ghost1.bounceOff(maze57);

  ghost2.bounceOff(maze6);
  ghost2.bounceOff(maze7);
  ghost2.bounceOff(maze8);
  ghost2.bounceOff(maze9);
  ghost2.bounceOff(maze10);
  ghost2.bounceOff(maze11);
  ghost2.bounceOff(maze12);
  ghost2.bounceOff(maze13);
  ghost2.bounceOff(maze14);
  ghost2.bounceOff(maze15);
  ghost2.bounceOff(maze16);
  ghost2.bounceOff(maze17);
  ghost2.bounceOff(maze18);
  ghost2.bounceOff(maze19);
  ghost2.bounceOff(maze20);
  ghost2.bounceOff(maze21);
  ghost2.bounceOff(maze22);
  ghost2.bounceOff(maze23);
  ghost2.bounceOff(maze24);
  ghost2.bounceOff(maze25);
  ghost2.bounceOff(maze26);
  ghost2.bounceOff(maze27);
  ghost2.bounceOff(maze28);
  ghost2.bounceOff(maze29);
  ghost2.bounceOff(maze30);
  ghost2.bounceOff(maze31);
  ghost2.bounceOff(maze32);
  ghost2.bounceOff(maze34);
  ghost2.bounceOff(maze35);
  ghost2.bounceOff(maze36);
  ghost2.bounceOff(maze37);
  ghost2.bounceOff(maze38);
  ghost2.bounceOff(maze39);
  ghost2.bounceOff(maze40);
  ghost2.bounceOff(maze41);
  ghost2.bounceOff(maze42);
  ghost2.bounceOff(maze43);
  ghost2.bounceOff(maze44);
  ghost2.bounceOff(maze45);
  ghost2.bounceOff(maze46);
  ghost2.bounceOff(maze47);
  ghost2.bounceOff(maze48);
  ghost2.bounceOff(maze49);
  ghost2.bounceOff(maze50);
  ghost2.bounceOff(maze51);
  ghost2.bounceOff(maze52);
  ghost2.bounceOff(maze53);
  ghost2.bounceOff(maze54);
  ghost2.bounceOff(maze55);
  ghost2.bounceOff(maze56);
  ghost2.bounceOff(maze401);
  ghost2.bounceOff(maze88);
  ghost2.bounceOff(maze57);

  ghost3.bounceOff(maze6);
  ghost3.bounceOff(maze7);
  ghost3.bounceOff(maze8);
  ghost3.bounceOff(maze9);
  ghost3.bounceOff(maze10);
  ghost3.bounceOff(maze11);
  ghost3.bounceOff(maze12);
  ghost3.bounceOff(maze13);
  ghost3.bounceOff(maze14);
  ghost3.bounceOff(maze15);
  ghost3.bounceOff(maze16);
  ghost3.bounceOff(maze17);
  ghost3.bounceOff(maze18);
  ghost3.bounceOff(maze19);
  ghost3.bounceOff(maze20);
  ghost3.bounceOff(maze21);
  ghost3.bounceOff(maze22);
  ghost3.bounceOff(maze23);
  ghost3.bounceOff(maze24);
  ghost3.bounceOff(maze25);
  ghost3.bounceOff(maze26);
  ghost3.bounceOff(maze27);
  ghost3.bounceOff(maze28);
  ghost3.bounceOff(maze29);
  ghost3.bounceOff(maze30);
  ghost3.bounceOff(maze31);
  ghost3.bounceOff(maze32);
  ghost3.bounceOff(maze34);
  ghost3.bounceOff(maze35);
  ghost3.bounceOff(maze36);
  ghost3.bounceOff(maze37);
  ghost3.bounceOff(maze38);
  ghost3.bounceOff(maze39);
  ghost3.bounceOff(maze40);
  ghost3.bounceOff(maze41);
  ghost3.bounceOff(maze42);
  ghost3.bounceOff(maze43);
  ghost3.bounceOff(maze44);
  ghost3.bounceOff(maze45);
  ghost3.bounceOff(maze46);
  ghost3.bounceOff(maze47);
  ghost3.bounceOff(maze48);
  ghost3.bounceOff(maze49);
  ghost3.bounceOff(maze50);
  ghost3.bounceOff(maze51);
  ghost3.bounceOff(maze52);
  ghost3.bounceOff(maze53);
  ghost3.bounceOff(maze54);
  ghost3.bounceOff(maze55);
  ghost3.bounceOff(maze56);
  ghost3.bounceOff(maze401);
  ghost3.bounceOff(maze88);
  ghost3.bounceOff(maze57);
}
