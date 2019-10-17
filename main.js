import  MotherShip, {DefenceShip, AttackShip} from "./data/Ships.js";


export let motherShip = new MotherShip("MotherShip", 100, 9);

let shipArray = [1, 2, 3, 4, 5];

let shipArray2 = [1, 2, 3, 4, 5, 6, 7, 8];

let defenceShips = shipArray.map(i => new DefenceShip("DefenceShip", 80, 10));

let attackShips = shipArray2.map(i => new AttackShip("Attackship", 45, 12));

let allShips = defenceShips.concat(attackShips, motherShip);

console.log(allShips);

const randomize = (allShips) => {
  let rand = Math.random();
  let totalShips = allShips.length;
  let randIndex = Math.floor(rand * totalShips);
  let randomShip = allShips[randIndex];
  return randomShip;
}

const renderShips= () => {
  let alienShips = document.getElementById("ships");
  alienShips.innerHTML = "";
  alienShips.innerHTML += motherShip.render();
  defenceShips.forEach(i => alienShips.innerHTML += i.render());
  attackShips.forEach(i => alienShips.innerHTML += i.render());
}

const destroy = () =>{
  randomize(allShips).hit();
  console.log(randomize(allShips).hit());
  renderShips();

  for (let index = 0; index < allShips.length; index++) {
    if ( allShips[13].HP === 0){
      alert("you won");
     
    } 
  }
}


let burn = document.getElementById("burn");
burn.addEventListener("click", destroy);


renderShips();
