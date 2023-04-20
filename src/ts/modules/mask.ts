export const mask = (selector: string): void => {
    const setCursorPosition = (pos: number, elem: HTMLInputElement | null): void => {
        if (elem === null) {
            return;
        }
        elem.focus();
        elem.setSelectionRange(pos, pos);
    };

    const createMask = function (this: HTMLInputElement, event: Event): void {
        let matrix = "+7 (___) ___ __ __";
        let i = 0;
        const def = matrix.replace(/\D/g, "");
        let val = this.value.replace(/\D/g, "");

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, (a) =>
            /[_\d]/.test(a) && i < val.length
                ? val.charAt(i++)
                : i >= val.length
                    ? ""
                    : a
        );

        if (event.type === "blur") {
            if (this.value.length == 2) {
                this.value = "";
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    };

    const inputs = document.querySelectorAll<HTMLInputElement>(selector);

    inputs.forEach((input) => {
        input.addEventListener("input", createMask);
        input.addEventListener("focus", createMask);
        input.addEventListener("blur", createMask);
    });
};
