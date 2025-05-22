// complete the challenge here 👇
//1.
const garden = ["Tomato", "Carrot", "Lettuce", "Cucumber", "Pepper"]

console.log(`Initial garden: ${garden}`)

//2.
garden.push("pumpkin")
garden.unshift("sunflower")

console.log(`Updated garden: ${garden}`)
console.log(`Number of plants: ${garden.length}`)

//3.
const lastPlant = garden.pop()
const firstPlant = garden.unshift()

console.log(`Harvested: ${lastPlant} and ${firstPlant}`)

//4.
const cucumberIndex = garden.indexOf("Cucumber")
garden[cucumberIndex] = "Bell Pepper"

console.log(`Replaced plant at index: ${cucumberIndex}`)
console.log(`Garden after replacement: ${garden}`)

//5.
const HealthOfGarden = garden.includes("Weeds")

console.log(`Garden includes Weeds: ${HealthOfGarden}`)
