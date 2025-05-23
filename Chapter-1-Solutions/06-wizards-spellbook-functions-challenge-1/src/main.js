// complete the challenge here 👇
//1.
function createPotion (baseIngredient = "water",catalystIngredient = "moonstone dust",powerBooster = "dragon breath" ) {
    return `A mystical brew of ${baseIngredient},${catalystIngredient},${powerBooster}!`
}

console.log(createPotion())
console.log(createPotion("witch hazel"))
console.log(createPotion("toadstool extract", "pixie wings"))
console.log(createPotion( "shadow essence", "vampire tears", "phoenix ash"))

//2.
const castCharm = function(name){
    return `May luck and fortune smile upon ${name} !`
}

console.log(castCharm('Elara the Elf'))

//3.
const calculateSpellPower = (age) => age * 10

console.log("Spell Power: " +calculateSpellPower(25))

//4.
const castFireball = (power) => `Fireball blazes with power ${power}!`
const summonWaterSpout = (power) => `Water spout surges with power ${power}!`
const callLightning = (power) => `Lightning strikes with power ${power}!`

const elementalSpells = [castFireball, summonWaterSpout,callLightning]

for (let i in elementalSpells) {
  const castSpell = elementalSpells[i]
  console.log(castSpell(Number(i) + 1))
}

//5.
function determineSpellStrength (powerLevel) {
    if(powerLevel<50){
        return "Weak"
    }
    else if (powerLevel<= 100 ){
        return "Moderate"
    }
    else {
        return "Strong"
    }
}

console.log(determineSpellStrength(30))
console.log(determineSpellStrength(75))
console.log(determineSpellStrength(150))

//6.
function transformIngredients (ingredients, transformation) {
    const transformedIngredients = []
  for (const ingredient of ingredients) {
    transformedIngredients.push(transformation(ingredient))
  }
  return transformedIngredients
}

const transformedIngredients = transformIngredients([
  'newt eyes',
  'toe of frog',
  'wool of bat',
  'tongue of dog'
], (ingredient) => `enchanted ${ingredient}`)
console.log(transformedIngredients)

