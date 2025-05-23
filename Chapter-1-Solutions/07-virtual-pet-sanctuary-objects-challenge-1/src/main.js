// complete the challenge here 👇
//1.
function createVirtualPet (name, species, mood) {
    return {
        name, species, mood
    }
}

const pixel = createVirtualPet('pixel', 'dog', 0.8)
const bitsy = createVirtualPet('bitsy', 'cat', 0.6)
const datastream = createVirtualPet('datastream', 'fish', 0.5)

//2.
const petSanctuary = {}

function addToSanctuary (pet) {
    petSanctuary[pet.name] = pet
}

addToSanctuary(pixel)
addToSanctuary(bitsy)
addToSanctuary(datastream)

console.log(petSanctuary)

//3.
function isPetInSanctuary (petName) {
  return petName in petSanctuary
}

console.log('--Sanctuary Check--')
console.log('Pixel is in sanctuary:', isPetInSanctuary('Pixel')) // true
console.log('Glitch is in sanctuary:', isPetInSanctuary('Glitch')) // false

//4.
function generatePetReport () {
    console.log( "--Pet Report--")
    for (let petName in petSanctuary) {
        const pet = petSanctuary[petName]
        console.log(`Name: ${pet.name}, Species: ${pet.species}, Mood: ${pet.mood}`)
    }
}

generatePetReport()

//5.
function findHappyPets(moodThreshold) {
    const happyPets = []
    for (let petName in petSanctuary) {
        let pet = petSanctuary[petName]
        if(pet.mood > moodThreshold) {
            happyPets.push(pet)
        }
    }
    return happyPets
}

console.log('--Happy Pets--')
console.log(findHappyPets(0.7))