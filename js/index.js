let numOrStr = prompt('Введіть число або рядок');
console.log(numOrStr);

switch (numOrStr) {
    case null:
    console.log('Ви скасували');
    break;
    case '':
    console.log('Порожній рядок');
    break;
    default:
    if (isNaN(+numOrStr)) {
        console.log('Введено не число');
    } else {
        console.log('OK!');
    }
    break;
}