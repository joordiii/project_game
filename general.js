function App() {
  this.state = '';
  this.score = null;
  this.level = [];

  //DOM elements
  this.containerElement = document.getElementById('container');
  this.welcomePage = null;
  this.welcomeButton = null;
  this.iconPlayButton = null;
  this.textPlayButton = null;
  this.paragraphPlayButton = null;
  this.appMainPage = null;
  this.mainHeader = null;
  this.mainMain = null;
  this.mainFooter = null;
  this.header1 = null;
  this.header2 = null;
  this.header3 = null;
  this.timerElement = null;
  this.timerSpace = null;

  this.scoreElement = null;
  this.scoreSpace = null;
  this.nameElement = null;
  this.nameElementInput = null;
  this.startButtonElement = null;
  this.startButton = null;
  this.iconPlayButton2 = null;
  this.restartButtonElement = null;
  this.restartButton = null;
  this.iconRestartButton = null;
  this.resetElement = null;
  this.resetButton = null;
  this.iconResetButton = null;
  this.messageElement = null;
  this.boardElement = null;
  this.levelElement = null;
  this.bestScorers1Element = null;
  this.bestScorers2Element = null;
}

//Initail Welcome
App.prototype.buildWelcome = function() {
  //Building de entire container page
  this.welcomePage = document.createElement('div');
  this.welcomePage.className = 'welcome';
  this.containerElement.appendChild(this.welcomePage);
  //Building the button
  this.welcomeButton = document.createElement('button');
  this.welcomeButton.className = 'welcomeButton';
  this.welcomePage.appendChild(this.welcomeButton);
  //Afegeixo el eventListener al Botó
  this.welcomeButton.addEventListener("click", this.buildMainScreen);
  //Building de play ICON
  this.iconPlayButton = document.createElement('i');
  this.iconPlayButton.classList.add('fa-play-circle-o');
  this.iconPlayButton.classList.add('fa');
  this.iconPlayButton.classList.add('fa-4x');
  this.iconPlayButton.classList.add('iconPlayButton');
  this.welcomeButton.appendChild(this.iconPlayButton);
  //Building the text PLAY
  this.textPlayButton = document.createTextNode('PLAY');
  this.paragraphPlayButton = document.createElement('p');
  this.paragraphPlayButton.className = 'paragraphPlayButton';
  this.paragraphPlayButton.appendChild(this.textPlayButton);
  this.welcomeButton.appendChild(this.paragraphPlayButton);
};

App.prototype.destroyWelcome = function() {
  this.welcomePage.remove();
};


//Play, main Screen
App.prototype.buildMainScreen = function() {
  //Building de entire container page
  this.appMainPage = document.createElement('div');
  this.appMainPage.className = 'appMainPage';
  this.containerElement.appendChild(this.appMainPage);
  //Building the header
  this.mainHeader = document.createElement('div');
  this.mainHeader.id = 'header';
  this.appMainPage.appendChild(this.mainHeader);
  //Building the main central part
  this.mainMain = document.createElement('div');
  this.mainMain.id = 'main';
  this.appMainPage.appendChild(this.mainMain);
  //Building the footer
  this.mainFooter = document.createElement('div');
  this.mainFooter.id = 'footer';
  this.appMainPage.appendChild(this.mainFooter);
  //Building the 3 sections into the header
  this.header1 = document.createElement('div');
  this.header1.className = 'innerHeader';
  this.mainHeader.appendChild(this.header1);
  //
  this.header2 = document.createElement('div');
  this.header2.className = 'innerHeader';
  this.mainHeader.appendChild(this.header2);
  //
  this.header3 = document.createElement('div');
  this.header3.className = 'innerHeader';
  this.mainHeader.appendChild(this.header3);
  //Building subsections into the header
  this.timerElement = document.createElement('div');
  this.timerElement.className = 'timerElement';
  this.timerElement.className = 'size';
  this.header1.appendChild(this.timerElement);
  //
  this.scoreElement = document.createElement('div');
  this.scoreElement.className = 'scoreElement';
  this.scoreElement.className = 'size';
  this.header1.appendChild(this.scoreElement);
  //
  this.nameElement = document.createElement('div');
  this.nameElement.className = 'nameElement';
  this.nameElement.className = 'size';
  this.header2.appendChild(this.nameElement);
  //
  this.startButtonElement = document.createElement('div');
  this.startButtonElement.className = 'startButtonElement';
  this.startButtonElement.className = 'size';
  this.header2.appendChild(this.startButtonElement);
  //
  this.restartButtonElement = document.createElement('div');
  this.restartButtonElement.className = 'restartButtonElement';
  this.restartButtonElement.className = 'size';
  this.header3.appendChild(this.restartButtonElement);
  //
  this.resetElement = document.createElement('div');
  this.resetElement.className = 'resetElement';
  this.resetElement.className = 'size';
  this.header3.appendChild(this.resetElement);
  //Building the 3 sections into the main
  this.messageElement = document.createElement('div');
  this.messageElement.className = 'messageElement';
  this.mainMain.appendChild(this.messageElement);
  //
  this.boardElement = document.createElement('div');
  this.boardElement.className = 'boardElement';
  this.mainMain.appendChild(this.boardElement);
  //
  this.levelElement = document.createElement('div');
  this.levelElement.className = 'levelElement';
  this.mainMain.appendChild(this.levelElement);
  //Building the 2 sections into footer
  this.bestScorers1Element = document.createElement('div');
  this.bestScorers1Element.className = 'bestScorersElement';
  this.mainFooter.appendChild(this.bestScorers1Element);
  //
  this.bestScorers2Element = document.createElement('div');
  this.bestScorers2Element.className = 'bestScorersElement';
  this.mainFooter.appendChild(this.bestScorers2Element);
  // Timer space lavel
  this.timerSpacePar = document.createElement('p');
  this.timerSpacePar.className = 'timerSpacePar';
  this.timerSpacePar.innerText = 'TIME:';
  this.timerElement.appendChild(this.timerSpacePar);
  //Building the timer space
  this.timerSpace = document.createElement('div');
  this.timerSpace.className = 'timerSpace';
  this.timerElement.appendChild(this.timerSpace);
  // Score space lavel
  this.scoreSpacePar = document.createElement('p');
  this.scoreSpacePar.className = 'scoreSpacePar';
  this.scoreSpacePar.innerText = 'SCORE:';
  this.scoreElement.appendChild(this.scoreSpacePar);
  //Building the score space
  this.scoreSpace = document.createElement('div');
  this.scoreSpace.className = 'scoreSpace';
  this.scoreElement.appendChild(this.scoreSpace);
  //Building the buttons
  //Start
  this.startButton = document.createElement('button');
  this.startButton.className = 'startButton';
  this.startButton.className = 'sizeBut';
  this.startButtonElement.appendChild(this.startButton);
  //Restart
  this.restartButton = document.createElement('button');
  this.restartButton.className = 'restartButton';
  this.restartButton.className = 'sizeBut';
  this.restartButtonElement.appendChild(this.restartButton);
  //Start
  this.resetButton = document.createElement('button');
  this.resetButton.className = 'resetButton';
  this.resetButton.className = 'sizeBut';
  this.resetElement.appendChild(this.resetButton);
  //Building de play2 ICON
  this.iconPlayButton2 = document.createElement('i');
  this.iconPlayButton2.classList.add('fa-play-circle-o');
  this.iconPlayButton2.classList.add('fa');
  this.iconPlayButton2.classList.add('fa-2x');
  this.iconPlayButton2.classList.add('iconPlayButton');
  this.startButton.appendChild(this.iconPlayButton2);
  //Building de replay ICON
  this.iconRestartButton = document.createElement('i');
  this.iconRestartButton.classList.add('fa-reply-all');
  this.iconRestartButton.classList.add('fa');
  this.iconRestartButton.classList.add('fa-2x');
  this.iconRestartButton.classList.add('iconRestartButton');
  this.restartButton.appendChild(this.iconRestartButton);
  //Building de resetButton ICON
  this.iconResetButton = document.createElement('i');
  this.iconResetButton.classList.add('fa-hand-paper-o');
  this.iconResetButton.classList.add('fa');
  this.iconResetButton.classList.add('fa-2x');
  this.iconResetButton.classList.add('iconResetButton');
  this.resetButton.appendChild(this.iconResetButton);
  //Building de form
  this.nameElementPar = document.createElement('p');
  this.nameElementPar.className = 'nameElementPar';
  this.nameElementPar.innerText = 'NAME:';
  this.nameElement.appendChild(this.nameElementPar);

  this.nameElementInput = document.createElement('input');
  this.nameElementInput.type = "text";
  this.nameElementInput.className = 'nameElementInput';
  this.nameElement.appendChild(this.nameElementInput);



};;
