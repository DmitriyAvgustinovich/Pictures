import { modals, sliders, forms, mask, checkTextInputs } from './modules';

window.addEventListener('DOMContentLoaded', () => {
    modals()
    sliders({slides: '.feedback-slider-item', dir: 'horizontal', prev: '.main-prev-btn', next: '.main-next-btn'})
    sliders({slides: '.main-slider-item', dir: 'vertical', prev: '', next: ''})
    forms()
    mask('[name="phone"]')
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')
})
