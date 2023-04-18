export const forms = () => {

    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const uploads = document.querySelectorAll('[name="upload"]')

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

    const postData = async (url: string, data: any) => {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        })
        uploads.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран'
        })
    }

    uploads.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0])
            let dots;
            const nameImgSplit = item.files[0].name.split('.')

            nameImgSplit[0].length > 6 ? dots = '...' : dots = '.'
            const name = nameImgSplit[0].substring(0, 6) + dots + nameImgSplit[1]
            item.previousElementSibling.textContent = name
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

            let statusImg = document.createElement('img')
            statusImg.setAttribute('src', message.spinner)
            statusImg.classList.add('animated', 'fadeInUp')
            statusMessage.appendChild(statusImg)

            let textMessage = document.createElement('div')
            textMessage.textContent = message.loading
            statusMessage.appendChild(textMessage)

            const formData = new FormData(item)
            let api = 'https://windows-el7h.onrender.com/api/data'
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question
            console.log(api)

            let jsonData: Record<string, string> = {}
            formData.forEach((value, key) => {
                if (value instanceof File) {
                    jsonData[key] = value.name
                } else {
                    jsonData[key] = value as string
                }
            })

            postData(api, jsonData)
                .then(res => {
                    console.log(res)
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
