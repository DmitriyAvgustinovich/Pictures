export const calc = ({ size, material, options, promocode, result }: {
    size: string;
    material: string;
    options: string;
    promocode: string;
    result: string;
}) => {
    const sizeBlock = document.querySelector(size) as HTMLInputElement
    const materialBlock = document.querySelector(material) as HTMLInputElement
    const optionsBlock = document.querySelector(options) as HTMLInputElement
    const promocodeBlock = document.querySelector(promocode) as HTMLInputElement
    const resultBlock = document.querySelector(result) as HTMLInputElement

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = sum.toString(Math.round(sum * 0.7))
        } else {
            resultBlock.textContent = sum.toString()
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};
