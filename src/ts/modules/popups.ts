export const modals = () => {
    const bindModal = (triggerSelector: string, modalSelector: string, closeSelector: string, closeClickOverlay = true) => {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector) as HTMLElement,
            close = document.querySelector(closeSelector) as HTMLElement,
            windows = document.querySelectorAll<HTMLElement>('[data-modal]')

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach((item: HTMLElement) => {
                    item.style.display = 'none';
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        const closeModal = () => {
            windows.forEach((item: HTMLElement) => {
                item.style.display = 'none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
        }

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal) {
                closeModal()
            }
        })

        close.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal();
            }
        });
    }

    const showModalByTime = (selector: string, time: number) => {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(modal => {
                if (getComputedStyle(modal).display !== 'none') {
                    display = 'block'
                }
            })

            if (!display) {
                const modalType = document.querySelector(selector) as HTMLElement
                modalType.style.display = 'block';
                document.body.style.overflow = "hidden";
            }
        }, time);
    }
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    showModalByTime('.popup-consultation', 1000)
};