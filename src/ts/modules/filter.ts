export const filter = () => {
    const menu = document.querySelector('.portfolio-menu') as HTMLElement;
    const items = menu.querySelectorAll<HTMLLIElement>('li');
    const btnAll = menu.querySelector<HTMLButtonElement>('.all')!;
    const btnLovers = menu.querySelector<HTMLButtonElement>('.lovers')!;
    const btnChef = menu.querySelector<HTMLButtonElement>('.chef')!;
    const btnGirl = menu.querySelector<HTMLButtonElement>('.girl')!;
    const btnGuy = menu.querySelector<HTMLButtonElement>('.guy')!;
    const btnGrandmother = menu.querySelector<HTMLButtonElement>('.grandmother')!;
    const btnGranddad = document.querySelector<HTMLButtonElement>('.granddad')!;
    const wrapper = document.querySelector('.portfolio-wrapper') as HTMLElement;
    const markAll = wrapper.querySelectorAll('.all');
    const markGirl = wrapper.querySelectorAll('.girl');
    const markLovers = wrapper.querySelectorAll('.lovers');
    const markChef = wrapper.querySelectorAll('.chef');
    const markGuy = wrapper.querySelectorAll('.guy');
    const no = document.querySelector('.portfolio-no') as HTMLElement;

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

    const mappedElems = [
        { elem: btnAll, type: Array.from(markAll) },
        { elem: btnLovers, type: Array.from(markLovers) },
        { elem: btnChef, type: Array.from(markChef) },
        { elem: btnGuy, type: Array.from(markGuy) },
        { elem: btnGirl, type: Array.from(markGirl) },
        { elem: btnGranddad, type: [] },
        { elem: btnGrandmother, type: [] },
    ];

    mappedElems.forEach(({ elem, type }) => (elem.onclick = () => typeFilter(type)));

    menu.addEventListener('click', (e) => {
        const target = e.target;

        if (target && (target as HTMLElement).tagName == 'LI') {
            items.forEach(btn => btn.classList.remove('active'));
            (target as HTMLElement).classList.add('active');
        }
    });
};
