const timer = () => {
  let sec = 0;
  let timer = setInterval(() => {
    document.getElementById("safeTimerDisplay").innerHTML = "00:" + sec;
    sec++;
    if (allShips[0].HP <= 0) {
      let score = sec - 1;
      clearInterval(timer);
      displayScore(score);
    }
  }, 1000);
};

const displayScore = score => {
  document.getElementById("score").innerHTML = +score;
  console.log(score);
};

let timerEvent = document.getElementById("timer");
timerEvent.addEventListener("click", timer);

import MotherShip, { DefenceShip, AttackShip } from "./data/Ships.js";

let allShips = [];

const createShips = (motherNum, defenceNum, attackNum) => {
  for (let index = 0; index < motherNum; index++) {
    allShips.push(new MotherShip("Mother of All", 100, 9, "./brainbug.jpg"));
  }

  for (let index = 0; index < defenceNum; index++) {
    allShips.push(new DefenceShip("Defence bug", 80, 10, "./mother.png"));
  }

  for (let index = 0; index < attackNum; index++) {
    allShips.push(
      new AttackShip("Warrior bug", 45, 12, "./Army of Klendathu.gif")
    );
  }
};

createShips(1, 5, 8);

const randomize = allShips => {
  let rand = Math.random();
  let totalShips = allShips.length;
  let randIndex = Math.floor(rand * totalShips);
  let randomShip = allShips[randIndex];
  return randomShip;
};

const renderShips = () => {
  let alienShips = document.getElementById("ships");
  alienShips.innerHTML = "";
  allShips.forEach(i => (alienShips.innerHTML += i.render()));
};

// const resetGame = () => {
//   allShips = [];
//   createShips(1, 5, 8);
//   renderShips();
// };

const destroy = () => {
  randomize(allShips).hit();
  // console.log(randomize(allShips).hit());
  renderShips();

  for (let index = 0; index < allShips.length; index++) {
    if (allShips[0].HP === 0) {
      // resetGame();
      return alert("You have saved mother earth comrad! Well done!");
    }
    if (allShips[index].HP <= 0) {
      allShips.splice(index, 1);
    }
  }
};

let burn = document.getElementById("burn");
burn.addEventListener("click", destroy);

renderShips();
