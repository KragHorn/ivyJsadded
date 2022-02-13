
const stylestCardTemplate = document.querySelector('[data-stylest-template]')
const stylestContainer = document.querySelector('[data-stylest-container]')
//Populate the stylest

fetch("../json/stylest.json")
.then((res) => res.json())
.then((data) => {  
    i='0'
    data.forEach(stylest => {
        console.log(i)
        console.log(stylest.firstName)
        const card = stylestCardTemplate.content.cloneNode(true).children[0]
        const image = card.querySelector('[data-image]')
        const name = card.querySelector('[data-name]')
        const about = card.querySelector('[data-about]')
        const book = card.querySelector('[data-book]')
        const spec = card.querySelector('[data-spec]')
        image.src = '../images/' + stylest.image
        name.textContent = stylest.firstName
        about.textContent = stylest.about
        spec.textContent = stylest.spec
        book.href = stylest.bookingLink
        
        stylestContainer.append(card)
        i++
    })
    const styleCard = document.querySelector('[data-vis]')
    styleCard.classList.add('isVis')
})
