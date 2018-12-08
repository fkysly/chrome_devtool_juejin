const COUNT = 4200;
const appEl = document.querySelector('#app');
const defaultColor = 'black';
let newColor = getRandomColor();

function initBlocks() {
  for (var i = 0; i < COUNT; i++) {
    let block = createBlueBlock();
    appEl.appendChild(block);
  }
}

function getRandomColor() {
  this.r = Math.floor(Math.random() * 255);
  this.g = Math.floor(Math.random() * 255);
  this.b = Math.floor(Math.random() * 200);
  return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',0.8)';
}

function createBlueBlock() {
  let block = document.createElement('div');
  block.className = 'block';
  block.style.backgroundColor = defaultColor;
  return block;
}

function destroyBlock(number) {
  let block = appEl.children[number];
  appEl.removeChild(block);
}

function createRedBlock(number) {
  let block = document.createElement('div');
  block.className = 'block';
  block.style.backgroundColor = newColor;

  appEl.insertBefore(block, appEl.children[number]);
}

function modifyBlock(number) {
  let block = appEl.children[number];
  block.style.backgroundColor = newColor;
}

function main() {
  initBlocks();
  let number = 0;
  setInterval(() => {
    destroyBlock(number);
    createRedBlock(number);
    // modifyBlock(number);
    number++;
    if (number >= COUNT) {
      number = 0;
      newColor = getRandomColor();
    }
  }, 2);
}

main();
