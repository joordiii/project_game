"use strict";

function App() {
  var self = this;
  self.state = '';
  self.scoreSpace1 = null; //Water counter
  self.waterC = 0;
  self.scoreSpace2 = 0; //Hits counter
  self.hitC = 0;
  self.level = [];
  self.selectedRec = null;

  //DOM elements
  self.containerElement = document.getElementById('container');
  self.welcomePage = null;
  self.appMainPage = null;
  self.boardElement = null;
  self.gridContainer = null;
  self.iDivImg = null;
  //RadioButtons
  self.inputRadioEasy = null;
  self.inputRadioMedium = null;
  self.inputRadioMedium = null;

  //Initail Welcome
  self.buildWelcome = function() {
    //Building de entire container page
    self.welcomePage = document.createElement('div');
    self.welcomePage.className = 'welcome';
    self.containerElement.appendChild(self.welcomePage);
    //Building the button
    var welcomeButton = document.createElement('button');
    welcomeButton.className = 'welcomeButton';
    self.welcomePage.appendChild(welcomeButton);
    //Afegeixo el eventListener al Botó
    welcomeButton.addEventListener("click", self.buildMainScreen);
    //welcomeButton.onclick = self.buildMainScreen();
    //Building de play ICON
    var iconPlayButton = document.createElement('i');
    iconPlayButton.classList.add('fa-play-circle-o', 'fa', 'fa-4x', 'iconPlayButton');
    welcomeButton.innerHTML = iconPlayButton;
    //Building the text PLAY
    var textPlayButton = document.createTextNode('PLAY');
    var paragraphPlayButton = document.createElement('p');
    paragraphPlayButton.className = 'paragraphPlayButton';
    paragraphPlayButton.appendChild(textPlayButton);
    welcomeButton.appendChild(paragraphPlayButton);
  };

  //Destroy welcome page
  self.destroyWelcome = function() {
    /*this.containerElement.removeChild(this.welcomePage);*/
    self.welcomePage.remove();
  };

  //Play, Build main Screen
  self.buildMainScreen = function() {
    //Destroy welcomePage
    self.destroyWelcome();
    //Building de entire container page
    self.appMainPage = document.createElement('div');
    self.appMainPage.className = 'appMainPage';
    self.containerElement.appendChild(self.appMainPage);
    //Building the header
    var mainHeader = document.createElement('div');
    mainHeader.id = 'header';
    self.appMainPage.appendChild(mainHeader);
    //Building the main central part
    var mainMain = document.createElement('div');
    mainMain.id = 'main';
    self.appMainPage.appendChild(mainMain);
    //Building the footer
    var mainFooter = document.createElement('div');
    mainFooter.id = 'footer';
    self.appMainPage.appendChild(mainFooter);
    //Building the 3 sections into the header
    var header1 = document.createElement('div');
    header1.className = 'innerHeader';
    mainHeader.appendChild(header1);
    //
    var header2 = document.createElement('div');
    header2.className = 'innerHeader';
    mainHeader.appendChild(header2);
    //
    var header3 = document.createElement('div');
    header3.className = 'innerHeader';
    mainHeader.appendChild(header3);
    //Building subsections into the header
    var timerElement = document.createElement('div');
    timerElement.className = 'timerElement';
    timerElement.className = 'size';
    header1.appendChild(timerElement);
    //
    var scoreElementOuter = document.createElement('div');
    scoreElementOuter.className = 'scoreElementOuter';
    /*scoreElementOuter.className = 'size';*/
    header1.appendChild(scoreElementOuter);
    //
    var scoreElement1 = document.createElement('div');
    scoreElement1.className = 'scoreElement1';
    /*scoreElement1.className = 'size';*/
    scoreElementOuter.appendChild(scoreElement1);
    //
    var scoreElement2 = document.createElement('div');
    scoreElement2.className = 'scoreElement2';
    /*scoreElement2.className = 'size';*/
    scoreElementOuter.appendChild(scoreElement2);
    //
    var nameElement = document.createElement('div');
    nameElement.className = 'nameElement';
    nameElement.className = 'size';
    header2.appendChild(nameElement);
    //
    var startButtonElement = document.createElement('div');
    startButtonElement.className = 'startButtonElement';
    startButtonElement.className = 'size';
    header2.appendChild(startButtonElement);
    //
    var restartButtonElement = document.createElement('div');
    restartButtonElement.className = 'restartButtonElement';
    restartButtonElement.className = 'size';
    header3.appendChild(restartButtonElement);
    //
    var resetElement = document.createElement('div');
    resetElement.className = 'resetElement';
    resetElement.className = 'size';
    header3.appendChild(resetElement);
    //Building the 3 sections into the main
    var messageElement = document.createElement('div');
    messageElement.className = 'messageElement';
    mainMain.appendChild(messageElement);
    //
    self.boardElement = document.createElement('div');
    self.boardElement.className = 'boardElement';
    mainMain.appendChild(self.boardElement);
    //
    var levelElement = document.createElement('div');
    levelElement.className = 'levelElement';
    mainMain.appendChild(levelElement);
    //Building the 2 sections into footer
    var bestScorers1Element = document.createElement('div');
    bestScorers1Element.className = 'bestScorersElement';
    mainFooter.appendChild(bestScorers1Element);
    //
    var bestScorers2Element = document.createElement('div');
    bestScorers2Element.className = 'bestScorersElement';
    mainFooter.appendChild(bestScorers2Element);
    // Timer space lavel
    var timerSpacePar = document.createElement('p');
    timerSpacePar.className = 'timerSpacePar';
    timerSpacePar.innerText = 'TIME:';
    timerElement.appendChild(timerSpacePar);
    //Building the timer space
    var timerSpace = document.createElement('div');
    timerSpace.className = 'timerSpace';
    timerElement.appendChild(timerSpace);
    // Score space lavel1
    var scoreSpacePar1 = document.createElement('p');
    scoreSpacePar1.className = 'scoreSpacePar1';
    scoreSpacePar1.innerText = 'WATER:';
    scoreElement1.appendChild(scoreSpacePar1);
    //Building the score space
    self.scoreSpace1 = document.createElement('div');
    self.scoreSpace1.className = 'scoreSpace1';
    self.scoreSpace1.innerHTML = '0';
    scoreElement1.appendChild(self.scoreSpace1);
    // Score space lavel2
    self.scoreSpacePar2 = document.createElement('p');
    self.scoreSpacePar2.className = 'scoreSpacePar2';
    self.scoreSpacePar2.innerText = 'HITS:';
    scoreElement2.appendChild(self.scoreSpacePar2);
    //Building the score space
    self.scoreSpace2 = document.createElement('div');
    self.scoreSpace2.className = 'scoreSpace2';
    self.scoreSpace2.innerHTML = '0';
    scoreElement2.appendChild(self.scoreSpace2);
    //Building the buttons
    //Start
    var startButton = document.createElement('button');
    startButton.className = 'startButton';
    startButton.className = 'sizeBut';
    startButtonElement.appendChild(startButton);
    //Restart
    var restartButton = document.createElement('button');
    restartButton.className = 'restartButton';
    restartButton.className = 'sizeBut';
    restartButtonElement.appendChild(restartButton);
    //Start
    var resetButton = document.createElement('button');
    resetButton.className = 'resetButton';
    resetButton.className = 'sizeBut';
    resetElement.appendChild(resetButton);
    //Building de play2 ICON
    /*var iconPlayButton2 = document.createElement('i');
    iconPlayButton2.classList.add('fa-play-circle-o');
    iconPlayButton2.classList.add('fa');
    iconPlayButton2.classList.add('fa-2x');
    iconPlayButton2.classList.add('iconPlayButton');
    startButton.appendChild(iconPlayButton2);*/
    //Building de replay ICON
    var iconRestartButton = document.createElement('i');
    /*iconRestartButton.classList.add('fa-reply-all');
    iconRestartButton.classList.add('fa');
    iconRestartButton.classList.add('fa-2x');
    iconRestartButton.classList.add('iconRestartButton');
    restartButton.appendChild(iconRestartButton);*/
    //Building de resetButton ICON
    var iconResetButton = document.createElement('i');
    /*iconResetButton.classList.add('fa-hand-paper-o');
    iconResetButton.classList.add('fa');
    iconResetButton.classList.add('fa-2x');
    iconResetButton.classList.add('iconResetButton');
    resetButton.appendChild(iconResetButton);*/
    //Building de form
    var nameElementPar = document.createElement('p');
    nameElementPar.className = 'nameElementPar';
    nameElementPar.innerText = 'NAME:';
    nameElement.appendChild(nameElementPar);
    //Input text
    var nameElementInput = document.createElement('input');
    nameElementInput.type = "text";
    nameElementInput.className = 'nameElementInput';
    nameElement.appendChild(nameElementInput);
    //Create Radio buttons (Level Selection)
    //Easy
    self.inputRadioEasy = document.createElement('input');
    self.inputRadioEasy.type = "radio";
    self.inputRadioEasy.className = 'inputRadioEasy';
    self.inputRadioEasy.type = 'radio';
    self.inputRadioEasy.checked = 'true';
    var labelRadioEasy = document.createElement('label');
    labelRadioEasy.innerHTML = 'LEVEL EASY';
    var pEasy = document.createElement('p');
    pEasy.className = 'easyBox';
    var radioFormLevel1 = document.createElement('form');
    pEasy.appendChild(self.inputRadioEasy);
    pEasy.appendChild(labelRadioEasy);
    radioFormLevel1.appendChild(pEasy);
    levelElement.appendChild(radioFormLevel1);
    //Medium
    self.inputRadioMedium = document.createElement('input');
    self.inputRadioMedium.type = "radio";
    self.inputRadioMedium.className = 'inputRadioMedium';
    self.inputRadioMedium.type = 'radio';
    var labelRadioMedium = document.createElement('label');
    labelRadioMedium.innerHTML = 'LEVEL MEDIUM';
    var pMedium = document.createElement('p');
    pMedium.className = 'mediumBox';
    var radioFormLevel2 = document.createElement('form');
    pMedium.appendChild(self.inputRadioMedium);
    pMedium.appendChild(labelRadioMedium);
    radioFormLevel2.appendChild(pMedium);
    levelElement.appendChild(radioFormLevel2);
    //Hard
    self.inputRadioHard = document.createElement('input');
    self.inputRadioHard.type = "radio";
    self.inputRadioHard.className = 'inputRadioHard';
    self.inputRadioHard.type = 'radio';
    var labelRadioHard = document.createElement('label');
    labelRadioHard.innerHTML = 'LEVEL HARD';
    var pHard = document.createElement('p');
    pHard.className = 'hardBox';
    var radioFormLevel3 = document.createElement('form');
    pHard.appendChild(self.inputRadioHard);
    pHard.appendChild(labelRadioHard);
    radioFormLevel3.appendChild(pHard);
    levelElement.appendChild(radioFormLevel3);
    //Building de grid
    self.buildGrid();
    self.addSubmarineToDiv();
  };

  //Build grid
  self.buildGrid = function() {
    var gridContainer = document.createElement('div');
    gridContainer.className = 'gridContainer';
    var taula = [];
    for (var a = 0; a < 10; a++) {
      var fila = [];
      for (var b = 0; b < 10; b++) {
        var iDiv = document.createElement('div');
        iDiv.className = 'iDiv';
        iDiv.id = 'c' + a + b;
        gridContainer.appendChild(iDiv);
        fila.push(iDiv);
        iDiv.addEventListener("click", self.flipCard);
      }
      taula.push(fila);
    }
    self.boardElement.appendChild(gridContainer);
  };

  //Adding submarines to Div
  self.addSubmarineToDiv = function() {

    //Random array of 100 numbers
    var grid = [];
    while (grid.length < 100) {
      var randomnumber = Math.floor(Math.random() * 100);
      if (grid.indexOf(randomnumber) > -1) continue;
      grid[grid.length] = randomnumber;
    }

    //Extracting 60 numbers from random array and giving them and image (submarine)
    for (var i = 0; i < 60; i++) {
      var idNumber = grid[i];
      if (idNumber < 10) {
        var toStr = idNumber.toString();
        var toStrPlusZero = '0' + toStr;
        idNumber = toStrPlusZero;
      }
      var div = document.getElementById('c' + idNumber);
      self.iDivImg = document.createElement('img');
      self.iDivImg.className = 'submarine';
      self.iDivImg.setAttribute("src", "images/submarine.png");
      self.iDivImg.setAttribute("height", "100%");
      self.iDivImg.setAttribute("width", "100%");
      self.iDivImg.style.display = "none";
      div.appendChild(self.iDivImg);
    }
  };

  //Flip the Card
  self.flipCard = function(event) {
    console.log(event.currentTarget);
    var target = event.currentTarget;
    target.classList.remove('iDiv');
    target.classList.add('iDivClicked');
    if (target.firstChild) {
      target.firstChild.style.display = "block";
    }
    //Add water counter
    if (target.firstChild) {
      self.waterC = self.waterC + 1;
      self.scoreSpace1.innerHTML = self.waterC;
    }
    //Add hit counter
    else {
      self.hitC = self.hitC + 1;
      self.scoreSpace2.innerHTML = self.hitC;
    }

  };
  self.resetGame = function() {
    //Counters to '0'
    self.waterC = 0;
    self.hitC = 0;
    self.scoreSpace1.innerHTML = self.waterC;
    self.scoreSpace2.innerHTML = self.hitC;
    //Suffle and add submarines
    self.addSubmarineToDiv();
  };


}
