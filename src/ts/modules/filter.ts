export const filter = () => {
    const menu = document.querySelector('.portfolio-menu') as HTMLElement,
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all') as HTMLElement,
        btnLovers = menu.querySelector('.lovers') as HTMLElement,
        btnChef = menu.querySelector('.chef') as HTMLElement,
        btnGirl = menu.querySelector('.girl') as HTMLElement,
        btnGuy = menu.querySelector('.guy') as HTMLElement,
        btnGrandmother = menu.querySelector('.grandmother') as HTMLElement,
        btnGranddad = document.querySelector('.granddad') as HTMLElement,
        wrapper = document.querySelector('.portfolio-wrapper') as HTMLElement,
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no') as HTMLElement;

    const typeFilter = (markType: Element[]) => {
        markAll.forEach(mark => {
            (mark as HTMLElement).style.display = 'none';
            (mark as HTMLElement).classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType.length > 0) {
            markType.forEach(mark => {
                (mark as HTMLElement).style.display = 'block';
                (mark as HTMLElement).classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => {
        typeFilter(Array.from(markAll));
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(Array.from(markLovers));
    });

    btnChef.addEventListener('click', () => {
        typeFilter(Array.from(markChef));
    });

    btnGuy.addEventListener('click', () => {
        typeFilter(Array.from(markGuy));
    });

    btnGirl.addEventListener('click', () => {
        typeFilter(Array.from(markGirl));
    });

    btnGrandmother.addEventListener('click', () => {
        typeFilter([]);
    });

    btnGranddad.addEventListener('click', () => {
        typeFilter([]);
    });

    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && (target as HTMLElement).tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            (target as HTMLElement).classList.add('active');
        }
    });
};
