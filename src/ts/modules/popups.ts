export const modals = () => {
    let btnPressed = false

    interface modalParams {
        triggerSelector: string;
        modalSelector: string;
        closeSelector: string;
        closeClickOverlay?: boolean;
    }

    const bindModal = (params: modalParams) => {
        const {
            triggerSelector,
            modalSelector,
            closeSelector,
            closeClickOverlay = true,
        } = params;

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector) as HTMLElement,
            close = document.querySelector(closeSelector) as HTMLElement,
            windows = document.querySelectorAll<HTMLElement>('[data-modal]')

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                btnPressed = true

                windows.forEach((item: HTMLElement) => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn')
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

    const openByScroll = (selector: string) => {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >=
                document.documentElement.scrollHeight)) {
                const element = document.querySelector(selector) as HTMLElement;

                if (element) {
                    element.click();
                }
            }
        })
    };

    bindModal({ triggerSelector: '.button-design', modalSelector: '.popup-design', closeSelector: '.popup-design .popup-close', closeClickOverlay: true });
    bindModal({ triggerSelector: '.button-consultation', modalSelector: '.popup-consultation', closeSelector: '.popup-consultation .popup-close', closeClickOverlay: true });
    bindModal({ triggerSelector: '.fixed-gift', modalSelector: '.popup-gift', closeSelector: '.popup-close', closeClickOverlay: true });
    openByScroll('.fixed-gift');
    showModalByTime('.popup-consultation', 1000)
};
