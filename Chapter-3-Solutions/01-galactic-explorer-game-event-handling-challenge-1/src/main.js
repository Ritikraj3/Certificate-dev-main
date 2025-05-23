// complete the challenge here 👇


// 1. Initiate the Launch Sequence
const launchButton = document.getElementById('launchButton')
launchButton.addEventListener('click', () => {
    document.querySelector('.rocket').classList.add('launch')
})

// 2. Monitor the Control Input
document.querySelector('#controlInput').addEventListener('keydown', (e) => {
  console.log(e.key)
})

// 3. Track the Mouse Coordinates
const star = document.querySelector('.star')
star.addEventListener('mousemove', () => {
  star.style.left = `${e.clientX}px`
  star.style.top = `${e.clientY}px`
})

// 4. Activate the HyperDrive
const hyperDrive = document.getElementById('hyperDriveButton')
hyperDrive.addEventListener('dblclick', () => {
    document.body.classList.add('hyperdrive')
})