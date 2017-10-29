function App() {
  this.state = '';
  this.score = null;
  this.level = [];

  //DOM elements
  this.containerElement = null;
  this.welcomePage = null;
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

var app = new App();

function buildWelcome() {
  this.welcomePage = document.createElement('div');
  this.welcomePage.classList.add('welcome');
  con

}
