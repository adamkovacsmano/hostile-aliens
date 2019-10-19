export default class MotherShip{
  constructor(name, HP, HPLossOnHit){
    this.name = name;
    this.HP = HP;
    this.HPLossOnHit = HPLossOnHit;
    this.isAlive = true;
  }

  hit(){
    if(this.HP > this.HPLossOnHit){
       return this.HP -= this.HPLossOnHit;
    } 
    return this.name = "dead", this.HP = 0, this.isAlive = false;
  }

  render(){
    return `<div><p id ="${this.name}">${this.name}</p><p>${this.HP}</p></div>`
  }


} 

export class DefenceShip extends MotherShip{
  constructor(name, HP, HPLossOnHit){
    super(name, HP, HPLossOnHit)
  }
 
}

export class AttackShip extends MotherShip{
  constructor(name, HP, HPLossOnHit){
    super(name, HP, HPLossOnHit)
  }

}