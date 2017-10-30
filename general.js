function App() {
  var self = this;
  self.state = '';
  self.score = null;
  self.level = [];

  //DOM elements
  self.containerElement = document.getElementById('container');
  self.welcomePage = null;
  self.appMainPage = null;
  self.boardElement = null;
  self.gridContainer = null;

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
    var scoreElement = document.createElement('div');
    scoreElement.className = 'scoreElement';
    scoreElement.className = 'size';
    header1.appendChild(scoreElement);
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
    // Score space lavel
    var scoreSpacePar = document.createElement('p');
    scoreSpacePar.className = 'scoreSpacePar';
    scoreSpacePar.innerText = 'SCORE:';
    scoreElement.appendChild(scoreSpacePar);
    //Building the score space
    var scoreSpace = document.createElement('div');
    scoreSpace.className = 'scoreSpace';
    scoreElement.appendChild(scoreSpace);
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
    var iconPlayButton2 = document.createElement('i');
    iconPlayButton2.classList.add('fa-play-circle-o');
    iconPlayButton2.classList.add('fa');
    iconPlayButton2.classList.add('fa-2x');
    iconPlayButton2.classList.add('iconPlayButton');
    startButton.appendChild(iconPlayButton2);
    //Building de replay ICON
    var iconRestartButton = document.createElement('i');
    iconRestartButton.classList.add('fa-reply-all');
    iconRestartButton.classList.add('fa');
    iconRestartButton.classList.add('fa-2x');
    iconRestartButton.classList.add('iconRestartButton');
    restartButton.appendChild(iconRestartButton);
    //Building de resetButton ICON
    var iconResetButton = document.createElement('i');
    iconResetButton.classList.add('fa-hand-paper-o');
    iconResetButton.classList.add('fa');
    iconResetButton.classList.add('fa-2x');
    iconResetButton.classList.add('iconResetButton');
    resetButton.appendChild(iconResetButton);
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
    var inputRadioEasy = document.createElement('input');
    inputRadioEasy.type = "radio";
    inputRadioEasy.className = 'inputRadioEasy';
    inputRadioEasy.type = 'radio';
    inputRadioEasy.checked = 'true';
    var labelRadioEasy = document.createElement('label');
    labelRadioEasy.innerHTML = 'LEVEL EASY';
    var pEasy = document.createElement('p');
    pEasy.className = 'easyBox';
    var radioFormLevel1 = document.createElement('form');
    pEasy.appendChild(inputRadioEasy);
    pEasy.appendChild(labelRadioEasy);
    radioFormLevel1.appendChild(pEasy);
    levelElement.appendChild(radioFormLevel1);
    //Medium
    var inputRadioMedium = document.createElement('input');
    inputRadioMedium.type = "radio";
    inputRadioMedium.className = 'inputRadioMedium';
    inputRadioMedium.type = 'radio';
    var labelRadioMedium = document.createElement('label');
    labelRadioMedium.innerHTML = 'LEVEL MEDIUM';
    var pMedium = document.createElement('p');
    pMedium.className = 'mediumBox';
    var radioFormLevel2 = document.createElement('form');
    pMedium.appendChild(inputRadioMedium);
    pMedium.appendChild(labelRadioMedium);
    radioFormLevel2.appendChild(pMedium);
    levelElement.appendChild(radioFormLevel2);
    //Hard
    var inputRadioHard = document.createElement('input');
    inputRadioHard.type = "radio";
    inputRadioHard.className = 'inputRadioHard';
    inputRadioHard.type = 'radio';
    var labelRadioHard = document.createElement('label');
    labelRadioHard.innerHTML = 'LEVEL HARD';
    var pHard = document.createElement('p');
    pHard.className = 'hardBox';
    var radioFormLevel3 = document.createElement('form');
    pHard.appendChild(inputRadioHard);
    pHard.appendChild(labelRadioHard);
    radioFormLevel3.appendChild(pHard);
    levelElement.appendChild(radioFormLevel3);
    //Building de grid
    self.buildGrid();
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
      }
      taula.push(fila);
    }
    self.boardElement.appendChild(gridContainer);
  };




}
