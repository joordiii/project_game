"use strict";

function App(difficultLevel) {
  var self = this;
  self.state = '';
  self.scoreSpace1 = null; //Water counter
  self.scoreSpace2 = 0; //Hits counter
  self.level = [];
  self.idNumber = null;
  self.firstTime = true;
  self.boxCountDown = null;
  self.delayStart = null;
  self.timeShow = null;
  self.timeOutShow = null;

  //DOM elements
  self.containerElement = document.getElementById('container');
  self.welcomePage = null;
  self.appMainPage = null;
  self.mainMain = null;
  self.boardElement = null;
  self.gridContainer = null;
  self.iDivImg = null;
  self.startButton = null;
  self.resetButton = null;
  self.levelElement = null;
  self.message = null;
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
  //PLAYER
  self.players = [];
  self.player = {};
  self.player.name = null;
  self.player.waterC = null;
  self.player.hitC = null;
  //Sounds
  self.audioState = null;

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
    var textPlayButton = document.createTextNode('PLAY>>');
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

  //Reset
  self.reset = function() {
    self.destroyMain();
    self.buildMainScreen();
    self.writeNameInList();
    //Variable used to enable writing the message at the bottom at the end of the game
    self.firstTime = true;
  };

  //Destroy main page
  self.destroyMain = function() {
    self.appMainPage.remove();
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
    self.mainMain = document.createElement('div');
    self.mainMain.id = 'main';
    self.appMainPage.appendChild(self.mainMain);
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
    var goalElement = document.createElement('div');
    goalElement.className = 'goalElement';
    goalElement.className = 'size';
    header1.appendChild(goalElement);
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
    self.messageElement = document.createElement('div');
    self.messageElement.className = 'messageElement';
    self.mainMain.appendChild(self.messageElement);
    // Creating paragraph into message
    self.paragraphMessage = document.createElement('p');
    self.paragraphMessage.className = 'paragraphMessage';
    self.paragraphMessage.innerHTML = ('SUBMARINE WARFARE');
    self.messageElement.appendChild(self.paragraphMessage);
    //
    self.boardElement = document.createElement('div');
    self.boardElement.className = 'boardElement';
    self.mainMain.appendChild(self.boardElement);
    //
    self.levelElement = document.createElement('div');
    self.levelElement.className = 'levelElement';
    self.mainMain.appendChild(self.levelElement);
    //Building the 2 sections into footer
    var bestScorers1Element = document.createElement('div');
    bestScorers1Element.className = 'bestScorersElement';
    mainFooter.appendChild(bestScorers1Element);
    //
    var bestScorers2Element = document.createElement('div');
    bestScorers2Element.className = 'bestScorersElement';
    mainFooter.appendChild(bestScorers2Element);
    // Timer space lavel
    var goalSpacePar = document.createElement('p');
    goalSpacePar.className = 'goalSpacePar';
    goalSpacePar.id = 'timer';
    goalSpacePar.innerText = 'GOAL:';
    goalElement.appendChild(goalSpacePar);
    //Building the timer space
    self.goalSpace = document.createElement('div');
    self.goalSpace.className = 'goalSpace';
    goalElement.appendChild(self.goalSpace);
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
    //Start<------- This button was suppress

    //Restart ---->>> Now it's Play Button
    self.startButton = document.createElement('button');
    self.startButton.className = 'restartButton';
    self.startButton.className = 'sizeBut';
    self.startButton.id = 'playButton';
    self.startButton.innerHTML = 'PLAY>>';
    restartButtonElement.appendChild(self.startButton);
    //---Events launched pressing PLAY
    self.startButton.addEventListener('click', self.countD);
    self.startButton.addEventListener('click', self.delayStart);
    self.startButton.addEventListener('click', self.functShow);
    self.startButton.addEventListener('click', self.functHide);
    //Reset
    self.resetButton = document.createElement('button');
    self.resetButton.className = 'resetButton';
    self.resetButton.className = 'sizeBut';
    self.resetButton.id = 'resetButton';
    self.resetButton.innerHTML = 'RESET';
    self.resetButton.disabled = true;
    resetElement.appendChild(self.resetButton);
    self.resetButton.addEventListener('click', self.reset);
    //Building de form
    var nameElementPar = document.createElement('p');
    nameElementPar.className = 'nameElementPar';
    nameElementPar.innerText = 'PLAYER NAME:';
    nameElement.appendChild(nameElementPar);
    //Input text
    self.nameElementInput = document.createElement('input');
    self.nameElementInput.type = "text";
    self.nameElementInput.className = 'nameElementInput';
    self.nameElementInput.id = "playerName";
    nameElement.appendChild(self.nameElementInput);
    //Create Radio buttons (Level Selection)
    var radioForm = document.createElement('form');
    radioForm.className = 'radioForm';
    startButtonElement.appendChild(radioForm);
    //---Easy---
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
    //Event Listener to see the message at goalSpace
    self.easyLev.addEventListener("click", self.myGoal);
    //---Medium---
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
    //Event Listener to see the message at goalSpace
    self.mediumLev.addEventListener("click", self.myGoal);
    //---Hard---
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
    //Event Listener to see the message at goalSpace
    self.hardLev.addEventListener("click", self.myGoal);
    //Input Text Enabled
    self.nameElementInput.disabled = false;
    //Building the list of the scorers (right side)
    //First Half (5 items)
    var list1 = document.createElement('ol');
    list1.className = 'list1';
    bestScorers1Element.appendChild(list1);

    var li1 = document.createElement('li');
    li1.id = 'li1';
    list1.appendChild(li1);

    var li2 = document.createElement('li');
    li2.id = 'li2';
    list1.appendChild(li2);

    var li3 = document.createElement('li');
    li3.id = 'li3';
    list1.appendChild(li3);

    var li4 = document.createElement('li');
    li4.id = 'li4';
    list1.appendChild(li4);

    var li5 = document.createElement('li');
    li5.id = 'li5';
    list1.appendChild(li5);
    //Second Half (5 items)

    var soundYes = document.createElement('div');
    soundYes.className = 'soundYes';
    bestScorers2Element.appendChild(soundYes);

    var soundNo = document.createElement('div');
    soundNo.className = 'soundNo';
    bestScorers2Element.appendChild(soundNo);

    /*var list2 = document.createElement('ol');
    list2.className = 'list2';
    list2.setAttribute('start', 6);
    bestScorers2Element.appendChild(list2);

    var li6 = document.createElement('li');
    li6.id = 'li6';
    list2.appendChild(li6);

    var li7 = document.createElement('li');
    li7.id = 'li7';
    list2.appendChild(li7);

    var li8 = document.createElement('li');
    li8.id = 'li8';
    list2.appendChild(li8);

    var li9 = document.createElement('li');
    li9.id = 'li9';
    list2.appendChild(li9);

    var li10 = document.createElement('li');
    li10.id = 'li10';
    list2.appendChild(li10);*/

    //Building the default goal at building the main page
    self.goalSpace.innerHTML = "FIND 49 SUB's";

    //Build the footer Message
    self.buildMessage('>> Insert your Name >> Select Level >> PLAY');
    self.buildMessage('BEAT THE MACHINE AND HIT MORE SUBMARINES THAN WATER');

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
    self.startButton.disabled = true;
    self.easyLev.disabled = true;
    self.mediumLev.disabled = true;
    self.hardLev.disabled = true;
    self.nameElementInput.disabled = true;
    //Destroy message of the bottom to clean the screen and
    //leave space to the Game Over message
    self.emptyNode(self.levelElement);
  };

  //Destroy grid
  self.destroyGrid = function() {
    self.gridContainer.remove();
    self.resetButton.disabled = true;
    self.startButton.disabled = false;
    self.easyLev.disabled = false;
    self.mediumLev.disabled = false;
    self.hardLev.disabled = false;

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
    //First 'if' is to prevent the box to be clicked twice and count twice
    //CHANGE 2 by self.level
    if ((2) === self.player.hitC) {
      //Building the Message
      if (self.firstTime) {
        self.firstTime = false;
        if (self.player.hitC > self.player.waterC) {

          self.buildMessage('YOU WIN!!! ' + 'you got ' + self.player.hitC + ' hits ' + 'in ' + (self.player.hitC + self.player.waterC) + ' attempts');
        } else {
          self.buildMessage('YOU LOSE!!! ' + 'you got ' + self.player.hitC + ' hits ' + 'in ' + (self.player.hitC + self.player.waterC) + ' attempts');
        }
        //Getting waters and hits and write the name in the scorers list
        self.getNameAndWaterAndHits();
        self.writeNameInList();
      }
    } else {
      //If it hasn't been clicked yet, change class iDiv by iDivClicked
      if (target.className !== 'iDivClicked') {
        target.classList.remove('iDiv');
        target.classList.add('iDivClicked');
        //If it has a Child (image) the display the content and play the Audio
        if (target.firstChild) {
          target.firstChild.style.display = "block";
          new Audio('sounds/Blast-SoundBible.com-2068539061.mp3').play();
        }
        //Add hits counter
        if (target.firstChild) {
          self.player.hitC += 1;
          self.scoreSpace2.innerHTML = self.player.hitC;
        }
        //Add water counter
        else {
          self.player.waterC = self.player.waterC + 1;
          self.scoreSpace1.innerHTML = self.player.waterC;
          new Audio('sounds/Slime Splash-SoundBible.com-1894179558.mp3').play();
        }
      }
    }
  };
  //Function to create the messages at the bottom
  self.buildMessage = function(textDisplay) {
    self.message = document.createElement('div');
    self.message.className = 'message';
    self.message.id = 'messageId';
    self.message.innerHTML = textDisplay;
    self.levelElement.appendChild(self.message);
  };
  //Destroys the message of the bottom to leave space for next messages
  self.emptyNode = function(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };
  //Delays the start to be able to see the Count Down
  self.delayStart = function() {
    var time = setTimeout(self.resetGame, 5000);
  };
  //Actions to perform whenn clicking Reset
  self.resetGame = function() {
    //Counters to '0'
    self.player.waterC = 0;
    self.player.hitC = 0;
    self.player.name = '';
    self.scoreSpace1.innerHTML = self.player.waterC;
    self.scoreSpace2.innerHTML = self.player.hitC;
    //Select level, used to build grid with appropiate number of submarines
    self.selectLevel();
    //Build grid and Suffle and add submarines
    self.buildGrid();
    self.addSubmarineToDiv();
  };

  //Select level
  self.selectLevel = function() {
    var l1 = document.getElementById('radio1');
    var l2 = document.getElementById('radio2');
    var l3 = document.getElementById('radio3');
    if (l1.checked) {
      self.level = 49;
      self.goalSpace.innerHTML = "FIND " + self.level + " SUB's";
    }
    if (l2.checked) {
      self.level = 39;
      self.goalSpace.innerHTML = "FIND " + self.level + " SUB's";
    }
    if (l3.checked) {
      self.level = 29;
      self.goalSpace.innerHTML = "FIND " + self.level + " SUB's";
    }
    if (l1.checked === false && l2.checked === false && l3.checked === false) {
      window.alert('You must chose a level');
    }
  };

  //Getting name, hits and water to write in the scorers list
  self.getNameAndWaterAndHits = function() {
    var name = document.getElementById('playerName').value;
    self.player.name = name;
    var playerPush = Object.assign({}, self.player);
    self.players.push(playerPush);
  };

  //Writing the values in list scorers
  self.writeNameInList = function() {
    for (var ix = 0; ix < self.players.length; ix++) {
      var scoreItem = document.getElementById('li' + (ix + 1));
      scoreItem.innerHTML = self.players[ix].name + ' ' + self.players[ix].hitC + 'H ' + (self.players[ix].hitC + self.players[ix].waterC) + 'A';
    }
  };

  self.myGoal = function() {
    var l1 = document.getElementById('radio1');
    var l2 = document.getElementById('radio2');
    var l3 = document.getElementById('radio3');

    if (l1.checked) {
      self.level = 49;
      self.goalSpace.innerHTML = "FIND " + self.level + " SUB's";
    }
    if (l2.checked) {
      self.level = 39;
      self.goalSpace.innerHTML = "FIND " + self.level + " SUB's";
    }
    if (l3.checked) {
      self.level = 29;
      self.goalSpace.innerHTML = "FIND " + self.level + " SUB's";
    }
  };

  //Disable start button at Count Down
  self.disableStarButtonDuringCountDown = function() {
    self.startButton.disabled = true;
  };

  //Initial CountDown function
  self.countD = function() {
    self.boxCountDown = document.createElement('div');
    self.boxCountDown.className = 'boxCountDown';
    self.boardElement.appendChild(self.boxCountDown);

    setTimeout(self.threeSeconds, 500);
    setTimeout(self.threeSecondsDel, 1500);
    setTimeout(self.twoSeconds, 2000);
    setTimeout(self.twoSecondsDel, 3000);
    setTimeout(self.oneSeconds, 3500);
    setTimeout(self.oneSecondsDel, 4500);
    //Disable Play Button during CountDown
    self.disableStarButtonDuringCountDown();
  };

  self.threeSeconds = function() {
    self.boxCountDown.className = 'boxCountDown';
    self.boxCountDown.innerHTML = '3';
  };
  self.threeSecondsDel = function() {
    self.boxCountDown.innerHTML = '';
  };
  self.twoSeconds = function() {
    self.boxCountDown.className = 'boxCountDown';
    self.boxCountDown.innerHTML = '2';
  };
  self.twoSecondsDel = function() {
    self.boxCountDown.innerHTML = '';
  };
  self.oneSeconds = function() {
    self.boxCountDown.className = 'boxCountDown';
    self.boxCountDown.innerHTML = '1';
  };
  self.oneSecondsDel = function() {
    self.boxCountDown.innerHTML = '';
  };

  //Show submarines 1 second
  self.functShow = function() {
    self.timeShow = setTimeout(self.showSub, 5000);
  };

  //Stop showing
  self.functHide = function() {
    self.timeOutShow = setTimeout(self.hideSub, 6000);
  };

  self.showSub = function() {
    var elems = document.querySelectorAll(".iDiv");
    [].forEach.call(elems, function(el) {
      el.classList.remove("iDiv");
    });
    [].forEach.call(elems, function(el) {
      el.classList.add("iDivClicked");
    });
    for (var b = 0; b < 100; b++) {
      if (elems[b].firstChild) {
        elems[b].firstChild.style.display = "block";
      }
    }
  };

  self.hideSub = function() {
    var elems2 = document.querySelectorAll(".iDivClicked");
    [].forEach.call(elems2, function(el) {
      el.classList.remove("iDivClicked");
    });
    [].forEach.call(elems2, function(el) {
      el.classList.add("iDiv");
    });
    for (var b = 0; b < 100; b++) {
      if (elems2[b].firstChild) {
        elems2[b].firstChild.style.display = "none";
      }
    }
  };

  //Enabling and disabling Audio
  self.audioState = document.getElementsByTagName("body");

  self.enableMute = function() {
    self.audioState.getElementsByTagName("body")[0].muted = true;
  };

  self.disableMute = function() {
    self.audioState.getElementsByTagName("body")[0].muted = false;
  };

}
