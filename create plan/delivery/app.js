const modal = document.querySelector('.modal')
const brackdrop = document.querySelector('.brackdrop')
const plan = document.querySelector('.plans')

plan.addEventListener('click', () => {
    modal.classList.remove('hidden')
    brackdrop.classList.remove('hidden')
})

if (brackdrop) {
    brackdrop.addEventListener('click', () => {
        modal.classList.add('hidden')
        brackdrop.classList.add('hidden')
    })
}

console.log(plan);