import { getResource } from "../services/requests"

export const showMoreStyles = (trigger: string, wrapper: string): void => {
    const btn = document.querySelector<HTMLElement>(trigger)!;

    btn.addEventListener('click', function () {
        getResource('http://localhost:3000/styles')
            .then(res => createCard(res))
            .catch(error => console.log(error))

        this.remove()
    })

    const createCard = (response: string) => {
        const styles = JSON.parse(response);
        styles.forEach(({ src, title, link }: { src: string, title: string, link: string }) => {
            const card = document.createElement('div')
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1')

            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="">
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
            `

            document.querySelector<HTMLElement>(wrapper)!.appendChild(card);
        })
    }
}
