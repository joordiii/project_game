"use strict";
var app = null;

function init() {
  app = new App();
  app.buildWelcome();
  //app.loadSound();
}

document.addEventListener("DOMContentLoaded", init);
