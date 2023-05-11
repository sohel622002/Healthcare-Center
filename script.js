let sliderAt = 0

let sliderCounter = 3

function slide(sliderAt) {
    document.querySelector(".review_container").style.left = (sliderAt*100) + '%'
}

const slideRight = () => {
    if(sliderAt == '-'+(sliderCounter-1)) return
    sliderAt = sliderAt - 1
    slide(sliderAt)
}

const slideLeft = () => {
    if(sliderAt === 0) return
    sliderAt = sliderAt + 1
    slide(sliderAt)
}