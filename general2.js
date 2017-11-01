"use strict";

function App(difficultLevel) {
  var self = this;
  self.state = '';
  self.scoreSpace1 = null; //Water counter
  self.waterC = 0;
  self.scoreSpace2 = 0; //Hits counter
  self.hitC = 0;
  self.level = [];
  self.selectedRec = null;
  self.idNumber = null;

  //DOM elements
  self.containerElement = document.getElementById('container');
  self.welcomePage = null;
  self.appMainPage = null;
  self.boardElement = null;
  self.gridContainer = null;
  self.iDivImg = null;
  self.restartButton = null;
  self.resetButton = null;
  self.levelElement = null;
  //RadioButtons
  self.radios = null;
  self.inputRadioEasy = null;
  self.inputRadioMedium = null;
  self.inputRadioMedium = null;
  self.easyLev = null;
  self.mediumLev = null;
  self.hardLev = null;
  //Level variable
  self.levelMode = null;
  self.level = null;
  self.hitC = null;
  self.waterC = null;
  //Sound
  self.createjs = null;


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
    restartButtonElement.addEventListener('click', self.resetGame);
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
    self.levelElement = document.createElement('div');
    self.levelElement.className = 'levelElement';
    mainMain.appendChild(self.levelElement);
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
    timerSpacePar.id = 'timer';
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

    //Restart ---->>> Now it's Play Button
    self.restartButton = document.createElement('button');
    self.restartButton.className = 'restartButton';
    self.restartButton.className = 'sizeBut';
    self.restartButton.id = 'playButton';
    self.restartButton.innerHTML = 'PLAY';
    restartButtonElement.appendChild(self.restartButton);
    self.restartButton.addEventListener('click', self.buildGrid);
    //Reset
    self.resetButton = document.createElement('button');
    self.resetButton.className = 'resetButton';
    self.resetButton.className = 'sizeBut';
    self.resetButton.id = 'resetButton';
    self.resetButton.innerHTML = 'RESET';
    self.resetButton.disabled = true;
    resetElement.appendChild(self.resetButton);
    self.resetButton.addEventListener('click', self.destroyGrid);
    //Building de form
    var nameElementPar = document.createElement('p');
    nameElementPar.className = 'nameElementPar';
    nameElementPar.innerText = 'PLAYER NAME:';
    nameElement.appendChild(nameElementPar);
    //Input text
    var nameElementInput = document.createElement('input');
    nameElementInput.type = "text";
    nameElementInput.className = 'nameElementInput';
    nameElement.appendChild(nameElementInput);

    //Create Radio buttons (Level Selection)
    var radioForm = document.createElement('form');
    radioForm.className = 'radioForm';
    startButtonElement.appendChild(radioForm);

    self.easyLev = document.createElement('input');
    self.easyLev.className = 'easyLev';
    self.easyLev.id = 'radio1';
    self.easyLev.type = 'radio';
    self.easyLev.name = 'group';
    self.easyLev.value = 'EASY';
    self.easyLev.checked = true;
    radioForm.appendChild(self.easyLev);
    var labelRadioEasy = document.createElement('label');
    labelRadioEasy.innerHTML = ' ' + 'LEVEL EASY';
    radioForm.appendChild(labelRadioEasy);

    self.mediumLev = document.createElement('input');
    self.mediumLev.className = 'mediumLev';
    self.mediumLev.id = 'radio2';
    self.mediumLev.type = 'radio';
    self.mediumLev.name = 'group';
    self.mediumLev.value = 'MEDIUM';
    radioForm.appendChild(self.mediumLev);
    var labelRadioMedium = document.createElement('label');
    labelRadioMedium.innerHTML = ' ' + 'LEVEL MEDIUM';
    radioForm.appendChild(labelRadioMedium);

    self.hardLev = document.createElement('input');
    self.hardLev.className = 'hardLev';
    self.hardLev.id = 'radio3';
    self.hardLev.type = 'radio';
    self.hardLev.name = 'group';
    self.hardLev.value = 'HARD';
    radioForm.appendChild(self.hardLev);
    var labelRadioHard = document.createElement('label');
    labelRadioHard.innerHTML = ' ' + 'LEVEL HARD';
    radioForm.appendChild(labelRadioHard);
    //Easy

    //Medium

    //Hard

    //Building de grid
    //self.buildGrid();
    //self.addSubmarineToDiv();
  };

  //Build grid
  self.buildGrid = function() {
    self.gridContainer = document.createElement('div');
    self.gridContainer.className = 'gridContainer';
    var taula = [];
    for (var a = 0; a < 10; a++) {
      var fila = [];
      for (var b = 0; b < 10; b++) {
        var iDiv = document.createElement('div');
        iDiv.className = 'iDiv';
        iDiv.id = 'c' + a + b;
        self.gridContainer.appendChild(iDiv);
        fila.push(iDiv);
        iDiv.addEventListener("click", self.flipCard);
      }
      taula.push(fila);
    }
    self.boardElement.appendChild(self.gridContainer);
    //When the Game Starts --> Enabling RESET button -- Disabling Play button
    self.resetButton.disabled = false;
    self.restartButton.disabled = true;
    self.easyLev.disabled = true;
    self.mediumLev.disabled = true;
    self.hardLev.disabled = true;
    //Adding the Game Over message at the end of the Game
    //self.gameOver();
  };

  //Destroy grid
  self.destroyGrid = function() {
    /*this.containerElement.removeChild(this.welcomePage);*/
    self.gridContainer.remove();
    self.resetButton.disabled = true;
    self.restartButton.disabled = false;
    self.easyLev.disabled = false;
    self.mediumLev.disabled = false;
    self.hardLev.disabled = false;
  };

  //Funtion that add the EventListener to divs


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

    for (var i = 0; i < self.level; i++) {
      self.idNumber = grid[i];
      if (self.idNumber < 10) {
        var toStr = self.idNumber.toString();
        var toStrPlusZero = '0' + toStr;
        self.idNumber = toStrPlusZero;
      }
      var div = document.getElementById('c' + self.idNumber);
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
    var target = event.currentTarget;
    if (target.className !== 'iDivClicked') {
      target.classList.remove('iDiv');
      target.classList.add('iDivClicked');
      if (target.firstChild) {
        target.firstChild.style.display = "block";
      }
      //Add water counter
      if (target.firstChild) {
        self.hitC = self.hitC + 1;
        self.scoreSpace2.innerHTML = self.hitC;
      }
      //Add hit counter
      else {
        self.waterC = self.waterC + 1;
        self.scoreSpace1.innerHTML = self.waterC;
        //self.playSound();
      }
      //Counting to Display the Game Over message at the end
      if ((self.level / 5) === self.hitC) {
        //Building the Message
        var message = document.createElement('div');
        message.className = 'message';
        message.innerHTML = 'GAME OVER ' + 'you got ' + self.hitC + ' hits ' + 'and ' + self.waterC + ' water attempts';
        self.levelElement.appendChild(message);
      }
    }
  };

  self.resetGame = function() {
    //Counters to '0'
    self.waterC = 0;
    self.hitC = 0;
    self.scoreSpace1.innerHTML = self.waterC;
    self.scoreSpace2.innerHTML = self.hitC;
    //Destroy grid
    self.destroyGrid();
    //Select level, used to buid grid with appropiate number of submarines
    self.selectLevel();
    //Build grid and Suffle and add submarines
    self.buildGrid();
    self.addSubmarineToDiv();
    /*self.easyLev.disabled = false;
    self.mediumLev.disabled = false;
    self.hardLev.disabled = false;*/
  };

  //Select level

  self.selectLevel = function() {
    var l1 = document.getElementById('radio1');
    var l2 = document.getElementById('radio2');
    var l3 = document.getElementById('radio3');
    if (l1.checked) {
      self.level = 60;
    }
    if (l2.checked) {
      self.level = 45;
    }
    if (l3.checked) {
      self.level = 30;
    }
    if (l1.checked === false && l2.checked === false && l3.checked === false) {
      window.alert('You must chose a level');
    }
  };

  /*self.gameOver = function() {
    var levelS = self.level / 5;
    if (levelS === self.hitC) {
      //Building the Message
      var message = document.createElement('div');
      message.className = 'message';
      message.innerHTML = 'GAME OVER ' + 'you got ' + self.hitC + ' hits ' + 'and ' + self.waterC + 'water attempts';
      self.levelElement.appendChild(message);
    }
  };*/


}
