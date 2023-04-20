import { postData } from "../services/requests"

export const forms = () => {
    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const uploads: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]')

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'src/assets/img/spinner.gif',
        ok: 'src/assets/img/ok.png',
        fail: 'src/assets/img/fail.png',
    }

    const path = {
        designer: 'https://windows-el7h.onrender.com/api/data',
        question: 'https://windows-el7h.onrender.com/api/data'
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
        uploads.forEach(item => {
            if (item.previousElementSibling) {
                item.previousElementSibling.textContent = 'Файл не выбран'
            }
        })
    }

    uploads.forEach((item: HTMLInputElement) => {
        item.addEventListener('input', () => {
            const [fileName, fileExt] = (item.files as FileList)[0].name.split('.')
            const dots = fileName.length > 6 ? '...' : '.'
            const name = `${fileName.substring(0, 6)}${dots}${fileExt}`

            if (item.previousElementSibling) {
                item.previousElementSibling.textContent = name
            }
        })
    })

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault()

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            if (item.parentNode) {
                item.parentNode.appendChild(statusMessage)
            }

            item.classList.add('animated', 'fadeOutUp')
            setTimeout(() => {
                item.style.display = 'none'
            }, 400)

            const statusImg = document.createElement('img')
            statusImg.setAttribute('src', message.spinner)
            statusImg.classList.add('animated', 'fadeInUp')
            statusMessage.appendChild(statusImg)

            const textMessage = document.createElement('div')
            textMessage.textContent = message.loading
            statusMessage.appendChild(textMessage)

            const formData = new FormData(item)
            const api = item.closest('.popup-design') || item.classList.contains('calc_form') ? path.designer : path.question

            const jsonData: Record<string, string> = {}

            formData.forEach((value, key) => jsonData[key] = value instanceof File ? value.name : value)

            postData(api, jsonData)
                .then(() => {
                    statusImg.setAttribute('src', message.ok)
                    textMessage.textContent = message.success
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail)
                    textMessage.textContent = message.failure
                })
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                        item.style.display = 'block'
                        item.classList.remove('fadeOutUp')
                        item.classList.add('fadeInUp')
                    }, 5000)
                })
        })
    })
}
