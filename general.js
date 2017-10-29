function App() {
  this.state = '';
  this.score = null;
  this.level = [];

  //DOM elements
  this.containerElement = document.getElementById('container');
  this.welcomePage = null;
  this.welcomeButton = null;
  this.appMainPage = null;
  this.timerElement = null;
  this.scoreElement = null;
  this.nameElement = null;
  this.startButtonElement = null;
  this.restartButtonElement = null;
  this.resetElement = null;
  this.messageElement = null;
  this.boardElement = null;
  this.levelElement = null;
  this.bestScorers1Element = null;
  this.bestScorers2Element = null;
}

App.prototype.buildWelcome = function() {
  this.welcomePage = document.createElement('div');
  this.welcomePage.className = 'welcome';
  this.containerElement.appendChild(this.welcomePage);

  this.welcomeButton = document.createElement('button');
  this.welcomeButton.className = 'welcomeButton';
  this.welcomePage.appendChild(this.welcomeButton);
}
