const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 14)) + 15;

const warriorDamage = () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength - 1)) + warrior.strength;

const mageDamage = () => {
  if (mage.mana >= 15) {
    return {
      damage: Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence - 1)) + mage.intelligence,
      mana: mage.mana - 15,
    }
  }
  return {
    damage: 'Não possui mana suficiente',
    mana: mage.mana,
  }
} 

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage();
    warrior.damage = damage;
    dragon.healthPoints -= damage;
  },
  mageTurn: (mageDamage) => {
    const damage = mageDamage();
    Object.assign(mage, damage);
    if (typeof damage.damage === 'number') { 
      dragon.healthPoints -= damage.damage 
    };
  },
  dragonTurn: (dragonDamage) => {
    const damage = dragonDamage();
    dragon.damage = damage;
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
  },
  endTurn: () => Object.assign({}, battleMembers),
};

gameActions.warriorTurn(warriorDamage)

gameActions.mageTurn(mageDamage)

gameActions.dragonTurn(dragonDamage)

console.log(gameActions.endTurn())
