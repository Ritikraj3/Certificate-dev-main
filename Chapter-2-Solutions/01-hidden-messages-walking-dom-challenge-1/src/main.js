const firstWord = document.querySelector("head > title").innerHTML
console.log(firstWord)

const secondWord = document.body.firstChild
console.log(secondWord)

const thirdWord = document.body.children[1].children.length
console.log(thirdWord)

const lastWord = document.body.children[1].children[1].innerText
console.log(lastWord)

const finalPieceOfTheMessage = document.body.children[1].nextSibling.textContent
console.log(finalPieceOfTheMessage)
