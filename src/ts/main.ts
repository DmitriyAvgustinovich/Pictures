import { modals, sliders, forms, mask, checkTextInputs, showMoreStyles, calc, pictureSize } from './modules';

window.addEventListener('DOMContentLoaded', () => {
    modals()
    sliders({ slides: '.feedback-slider-item', dir: 'horizontal', prev: '.main-prev-btn', next: '.main-next-btn' })
    sliders({ slides: '.main-slider-item', dir: 'vertical', prev: '', next: '' })
    forms()
    showMoreStyles('.button-styles', '#styles .row')
    mask('[name="phone"]')
    checkTextInputs('[name="name"]')
    checkTextInputs('[name="message"]')
    calc({ size: '#size', material: '#material', options: '#options', promocode: '.promocode', result: '.calc-price' })
    pictureSize('.sizes-block')
})
