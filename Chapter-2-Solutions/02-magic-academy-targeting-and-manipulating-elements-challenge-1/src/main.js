// complete the challenge here 👇


// 1. Discover the Enchanted Scroll
const scrollElement = document.getElementById('scroll')
console.log(scrollElement)


// 2. Decipher the Ancient Spell
console.log(scrollElement.textContent)

// 3. Rewrite the Spell
scrollElement.textContent = "Abracadabra!"

// 4. Reveal the Magic Attribute
console.log(scrollElement.getAttribute('data-magic'))

// 5. Enchant the Scroll's Appearance
scrollElement.style.color="blue"

// 6. Bestow a Magical Class
scrollElement.classList.add('enchanted')

// 7. End the Game with a Magical Finale
const paragraph = document.createElement('p')
paragraph.innerHTML = "Congratulations! You have mastered the DOM Magic!"
paragraph.id = 'msg'
paragraph.setAttribute('data-magic', 'finale')
paragraph.style.backgroundColor = 'green'
paragraph.style.color = 'white'
document.body.appendChild(paragraph)