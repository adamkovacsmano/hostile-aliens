export default class MotherShip {
  constructor(name, HP, HPLossOnHit, path) {
    this.name = name;
    this.HP = HP;
    this.HPLossOnHit = HPLossOnHit;
    this.isAlive = true;
    this.path = path;
  }

  hit() {
    if (this.HP > this.HPLossOnHit) {
      return (this.HP -= this.HPLossOnHit);
    }
    return (this.name = "dead"), (this.HP = 0), (this.isAlive = false);
  }

  render() {
    return `<div id="bugContainer"><img src="${this.path}" /><p id ="${this.name}">${this.name}</p><p>HP: ${this.HP}</p></div>`;
  }
}

export class DefenceShip extends MotherShip {
  constructor(name, HP, HPLossOnHit, path) {
    super(name, HP, HPLossOnHit, path);
  }
}

export class AttackShip extends MotherShip {
  constructor(name, HP, HPLossOnHit, path) {
    super(name, HP, HPLossOnHit, path);
  }
}
