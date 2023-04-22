export const accordion = (triggers: string) => {
    const btns = document.querySelectorAll(triggers);

    btns.forEach((btn) => {
        btn.addEventListener('click', function (this: HTMLElement) {
            this.classList.toggle('active-style');
            const content = this.nextElementSibling as HTMLElement;
            content.classList.toggle('active-content');

            if (this.classList.contains('active-style')) {
                content.style.maxHeight = content.scrollHeight + 80 + 'px';
            } else {
                content.style.maxHeight = '0';
            }
        });
    });
};
