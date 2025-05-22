// Spaceship Initialization
let fuelLevel = 100
let oxygenLevel = 100
const crewMembers = 5
let alienEncounters = 0
let distanceTraveled = 0

// 1. Get Going:
distanceTraveled = 70
// 2. Resource Management:
const numberOfFuelReduced = distanceTraveled / 10
fuelLevel = fuelLevel - numberOfFuelReduced * 5
console.log(`Fuel reduction: ${numberOfFuelReduced}, fuel level: ${fuelLevel} `)

const fuelIsLow = fuelLevel <= 30
console.log(`Fuel level is low: ${fuelIsLow}`)
// 3. Oxygen Consumption:
const  oxygenConsumption = distanceTraveled/100 * crewMembers
oxygenLevel = oxygenLevel - oxygenConsumption
console.log(`New oxygen level ${oxygenLevel}`)

const oxygenIsLow = oxygenLevel <= 20
console.log(`Oxygen is low ${oxygenIsLow}`)
// 4. Alien Encounters
const aliensEncountered = distanceTraveled % 2 !==0
console.log(`Crew encountered aliens: ${aliensEncountered}`)

// ignore this (it's useful for unit tests)
window.distanceTraveled = distanceTraveled
