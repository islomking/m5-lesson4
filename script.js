let userName = prompt("введите имя");
const letter = prompt("Введите букву, которую хотите проверить:");

if (userName.includes(letter)) {
    alert(`Правильно:  в име находится буква ${letter}`);
} else {
    alert(`Неправильно: в име не находится буква ${letter} букву`)};