// Работа с if-else

// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
/**
 *
 * @type {number}
 */
const a = -3;
if (a === 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
/**
 *
 * @type {number}
 */
const a = 0;
if (a > 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 3.  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
/**
 *
 * @type {number}
 */
const a = 0;
if (a < 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
/**
 *
 * @type {number}
 */
const a = 0;
if (a >= 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
/**
 *
 * @type {number}
 */
const a = 0;
if (a <= 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
/**
 *
 * @type {number}
 */
const a = 0;
if (a != 0) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 7.  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
/**
 *
 * @type {string}
 */
const a = 'test';
if (a === 'test') {
    alert('Верно');
} else {
    alert('Неверно');
}

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
/**
 *
 * @type {string}
 */
const a = '1';
if (a === '1') {
    alert('Верно');
} else {
    alert('Неверно');
}

// Работа с логическими переменными

// 1. Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
/**
 *
 * @type {boolean}
 */
const test = false;
if (test === true) {
    alert('Верно');
} else {
    alert('Неверно');
}

if (test === true) {
    alert('Верно');
}
alert('Неверно');

// 2. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
/**
 *
 * @type {boolean}
 */
const test = false;
if (test != true) {
    alert('Верно');
} else {
    alert('Неверно');
}

if (test != true) {
    alert('Верно');
}
alert('Неверно');

// Работа с && (и) и || (или)

// 1.  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
const a = 2;
if (a > 0 && a < 5) {
    alert('Верно');
} else {
    alert('Неверно');
}

// 2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
let a = 0;
if (a === 0 || a === 2) {
    a += 7;
} else {
    a /= 10;
}
alert(a);

// 3.  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
const a = 1;
const b = 3;
let c;

if (a <= 1 && b >= 3) {
    c = a + b;
} else {
    c = a - b;
}
alert(c);

// 4. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
const a = 3;
const b = 7;

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    alert('Верно');
} else {
    alert('Неверно');
}

// На switch-case

// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
const num = 7;
let result;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна'
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'Unknown number';
}
alert(result);


// Задачи

// 1. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const day = 60;

switch (true) {
    case day >= 1 && day <= 10:
        alert('Первая декада');
        break;
    case day > 10 && day <= 20:
        alert('Вторая декада');
        break;
    case day > 20 && day <= 31:
        alert('Третья декада');
        break;
    default:
        alert('Unknown number');
}

// 2. В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
const month = 5;

switch (true) {
    case month === 1 || month === 2 || month === 12:
        alert('зима');
        break;
    case month >= 3 && month <= 5:
        alert('весна');
        break;
    case month >= 6 && month <= 8:
        alert('лето');
        break;
    case month >= 9 && month <= 11:
        alert('осень');
        break;
    default:
        alert('Unknown number');
}

// 3.  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
const stringValue = 'abcde';

if (stringValue[0] === 'a') {
    alert('да');
} else {
    alert('нет');
}

// 4. Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
const numString = '12345';

if (Number(numString[0]) === 1 || (Number(numString[0])) === 2 || (Number(numString[0]) === 3)) {
    alert('да');
} else {
    alert('нет');
}

// 5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
const numbers = '123';
const sum = Number(numbers[0]) + Number(numbers[1]) + Number(numbers[2]);
alert(sum);

// 6. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.
const nums = '332242';

if (Number(nums[0]) + Number(nums[1]) + Number(nums[2]) === Number(nums[3]) + Number(nums[4]) + Number(nums[5])) {
    alert('да');
} else {
    alert('нет');
}
