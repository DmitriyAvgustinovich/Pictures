export const checkTextInputs = (selector: string): void => {
    const txtInputs = document.querySelectorAll<HTMLInputElement>(selector);

    txtInputs.forEach((input) => {
        input.addEventListener("keypress", (e: KeyboardEvent) => {
            if (e.key.match(/[^а-яё 0-9]/gi)) {
                e.preventDefault();
            }
        });
    });
};
