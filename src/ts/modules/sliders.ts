export const sliders = ({ slides, dir, prev, next }: { slides: string, dir: string, prev: string, next: string }) => {
    let slideIndex = 1
    const items = document.querySelectorAll<HTMLElement>(slides)

    const showSlides = (num: number) => {
        if (num > items.length) {
            slideIndex = 1
        }

        if (num < 1) {
            slideIndex = items.length
        }

        items.forEach(slide => {
            slide.classList.add('animated')
            slide.style.display = 'none'
        })

        items[slideIndex - 1].style.display = 'block'
    }

    showSlides(slideIndex)

    const plusSlides = (num: number) => {
        showSlides(slideIndex += num)
    }

    try {
        const prevBtn = document.querySelector(prev) as HTMLElement
        const nextBtn = document.querySelector(next) as HTMLElement

        prevBtn.addEventListener('click', () => {
            plusSlides(-1)
            items[slideIndex - 1].classList.remove('slideInLeft')
            items[slideIndex - 1].classList.add('slideInRight')
        })

        nextBtn.addEventListener('click', () => {
            plusSlides(1)
            items[slideIndex - 1].classList.remove('slideInRight')
            items[slideIndex - 1].classList.add('slideInLeft')
        })
    } catch (error) {

    }

    const activateAnimation = () => {
        if (dir === 'vertical') {
            setInterval(() => {
                plusSlides(1)
                items[slideIndex - 1].classList.add('slideInDown')
            }, 3000)
        } else {
            setInterval(() => {
                plusSlides(1)
                items[slideIndex - 1].classList.remove('slideInRight')
                items[slideIndex - 1].classList.add('slideInLeft')
            }, 3000)
        }
    }
    activateAnimation()
}
