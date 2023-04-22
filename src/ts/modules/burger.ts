export const burger = (menuSelector: string, burgerSelector: string) => {
    const menuElem = document.querySelector(menuSelector) as HTMLElement
    const burgerElem = document.querySelector(burgerSelector) as HTMLElement

    menuElem.style.display = 'none'

    burgerElem.addEventListener('click', () => {
        if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
            menuElem.style.display = 'block'
        } else {
            menuElem.style.display = 'none'
        }
    })

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            menuElem.style.display = 'none'
        }
    })
}
