// Завдання: 1

/**
 * Функція `findElementGreaterThan` знаходить перший елемент масиву, який є більшим за задане число.
 *  arr - вхідний масив, в якому відбувається пошук.
 *  num - число, яке використовується для порівняння з елементами масиву.
 * Повертає - foundElement - перший елемент масиву, який є більшим за задане число
 */
function findElementGreaterThan(arr, num) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr) || arr.length === 0) {
        return undefined;
    }

    // Використовуємо метод find для пошуку першого елементу, який є більшим за задане число num.
    const foundElement = arr.find((element) => element > num);

    // Перевірка чи є елемент, який задовольняє умову
    if (foundElement !== undefined) {
        return foundElement;
    } else {
        return "Числа, яке задовольняє умову, не знайдено";
    }
}

console.log("Завдання: 1  ==============================");
console.log(findElementGreaterThan([1, 2, 3, 4, 5], 3)); // Виведе 4

// Завдання: 2

/**
 * Функція `findIndexByProperty` знаходить індекс першого об'єкта в масиві, властивість 'name' якого співпадає з заданим іменем.
 *  arr - вхідний масив об'єктів, в якому відбувається пошук.
 *  name - ім'я, яке використовується для порівняння з властивістю 'name' об'єктів масиву.
 * Повертає - foundIndex - індекс першого об'єкта, властивість 'name' якого співпадає з заданим іменем.
 * Якщо об'єкт не знайдено, повертає -1.
 */
function findIndexByProperty(arr, name) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr) || arr.length === 0) {
        return -1;
    }

    // Використовуємо метод findIndex для пошуку індексу об'єкта
    const foundIndex = arr.findIndex((obj) => obj.name === name);

    // Повертаємо знайдений індекс або -1, якщо об'єкт не знайдено.
    return foundIndex !== -1 ? foundIndex : -1;
}

console.log("Завдання: 2  ==============================");
console.log(
    findIndexByProperty(
        [
            { name: "Ivan", age: 23 },
            { name: "Petro", age: 30 },
        ],
        "Petro"
    )
); // Виведе 1

// Завдання: 3 . ЗВЕРНІТЬ УВАГУ, метод findLast працює на версії ноди вище 18.0.0 якщо ваша версія нижче, завдання можно не виконувати
// щоб перевірити версію ноди виконайте в терміналі команду node -v

/**
 * Функція `findLastEvenNumber` знаходить останнє парне число в масиві.
 *  arr - вхідний масив чисел, в якому відбувається пошук.
 * Повертає - lastEvenNumber - останнє парне число в масиві.
 * Якщо таке число не знайдено, повертає 'Парних чисел не знайдено'.
 */
function findLastEvenNumber(arr) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Вхідний параметр має бути масивом";
    }

    // За допомогою метода findLast знаходимо останнє парне число в масиві.
    const lastEvenNumber = arr.reverse().find((num) => num % 2 === 0);

    // Повертаємо знайдене число або 'Парних чисел не знайдено', якщо таке число не знайдено.
    return lastEvenNumber !== undefined
        ? lastEvenNumber
        : "Парних чисел не знайдено";
}

console.log("Завдання: 3 ==============================");
console.log(findLastEvenNumber([1, 2, 3, 4, 5])); // Виведе 4

// Завдання: 4

/**
 * Функція `getSubArrayAndConvertToString` отримує підмасив від заданого індексу до кінця масиву і конвертує його в рядок.
 * Використовується методи `slice()` і `join()` для реалізації.
 *  arr - вхідний масив.
 *  startIdx - індекс з якого починається підмасив.
 * Повертає - subArrayString - рядок, отриманий в результаті конвертації підмасиву.
 */
function getSubArrayAndConvertToString(arr, startIdx) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Використання методу slice() для отримання підмасиву та join() для конвертації в рядок
    const subArrayString = arr.slice(startIdx).join(" ");

    // Повернення рядка
    return subArrayString;
}

console.log("Завдання: 4 ==============================");
console.log(
    getSubArrayAndConvertToString(
        ["Я", "люблю", "JavaScript!", "Він", "дуже", "потужний"],
        3
    )
); // Виведе "Він дуже потужний"

// Завдання: 5

/**
 * Функція `getArrayKeys` отримує ключі масиву.
 * Використовується метод `keys()` для реалізації.
 *  arr - вхідний масив.
 * Повертає - arrayKeys - масив ключів вхідного масиву.
 */
function getArrayKeys(arr) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Використання методу keys() та перетворення ітератора у масив
    const arrayKeys = Array.from(arr.keys());

    // Повернення масиву ключів
    return arrayKeys;
}

console.log("Завдання: 5  ==============================");
console.log(getArrayKeys(["яблуко", "банан", "апельсин"])); // Виведе [0, 1, 2]

// Завдання: 6

/**
 * Функція `getPositiveArrayValues` отримує лише додатні значення з масиву.
 * Використовується методи `values()` і `filter()` для реалізації.
 *  arr - вхідний масив.
 * Повертає - positiveArrayValues - масив додатніх значень вхідного масиву.
 */
function getPositiveArrayValues(arr) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Використання методу filter() для отримання лише додатніх значень
    const positiveArrayValues = arr.filter((value) => value > 0);

    // Повернення масиву додатніх значень
    return positiveArrayValues;
}

console.log("Завдання: 6 ==============================");
console.log(getPositiveArrayValues([-2, -1, 0, 1, 2])); // Виведе [1, 2]

// Завдання: 7

/**
 * Функція `removeAndDouble` видаляє елементи з масиву починаючи з заданого індексу і подвоює залишені елементи.
 * Використовується методи `splice()` і `map()` для реалізації.
 *  arr - вхідний масив.
 *  startIdx - індекс з якого починається видалення елементів.
 * Повертає - doubledArray - масив подвоєних елементів після видалення.
 */
function removeAndDouble(arr, startIdx) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Видалення елементів з заданого індексу за допомогою методу splice() та подвоєння залишених елементів з методом map()
    arr.splice(startIdx);
    const doubledArray = arr.map((value) => value * 2);

    // Повернення масиву подвоєних елементів
    return doubledArray;
}

console.log("Завдання: 7 ==============================");
console.log(removeAndDouble([1, 2, 3, 4, 5], 2)); // Виведе [ 2, 4 ]

// Завдання: 8

/**
 * Функція `sumAndPrint` обчислює суму елементів масиву і виводить кожен елемент в консоль.
 * Використовується методи `reduce()` і `forEach()` для реалізації.
 *  arr - вхідний масив.
 * Повертає - sum - сума елементів масиву.
 */
function sumAndPrint(arr) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Обчислення суми елементів масиву за допомогою методу reduce() та виведення кожного елемента з методом forEach()
    const sum = arr.reduce((acc, value) => {
        console.log(value);
        return acc + value;
    }, 0);

    // Повернення суми елементів масиву
    return sum;
}

console.log("Завдання: 8 ==============================");
console.log(sumAndPrint([1, 2, 3, 4, 5])); // Виведе числа в консоль та суму 15

// Завдання: 9

/**
 * Функція `flattenSquareAndFilter` вирівнює масив, підносить кожен елемент до квадрату і фільтрує по заданому порогу.
 * Використовується методи `flat()`, `map()`, і `filter()` для реалізації.
 *  arr - вхідний масив.
 *  threshold - порогове значення для фільтрації.
 * Повертає - filteredSquaredArray - вирівняний масив, елементи якого підняті до квадрату і профільтровані.
 */
function flattenSquareAndFilter(arr, threshold) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Вирівнювання масиву, піднесення кожного елементу до квадрату та фільтрація за порогом
    const filteredSquaredArray = arr
        .flat()
        .map((num) => num ** 2)
        .filter((num) => num > threshold);

    // Повернення відфільтрованого вирівняного масиву
    return filteredSquaredArray;
}

console.log("Завдання: 9 ==============================");
console.log(
    flattenSquareAndFilter(
        [
            [1, 2],
            [3, 4],
            [5, 6],
        ],
        10
    )
); // Виведе [16, 25, 36]

// Завдання: 10

/**
 * Функція `getLastElementsSumAndPrint` обчислює суму останніх n елементів масиву і виводить їх в консоль.
 * Використовується методи `reduceRight()`, `slice()` і `forEach()` для реалізації.
 *  arr - вхідний масив.
 *  n - кількість останніх елементів, які необхідно взяти до уваги.
 * Повертає - sum - сума останніх n елементів масиву.
 */
function getLastElementsSumAndPrint(arr, n) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Вибір останніх n елементів масиву та обчислення їх суми
    const lastElementsSum = arr.slice(-n).reduceRight((acc, num) => {
        console.log(num);
        return acc + num;
    }, 0);

    // Повернення суми останніх n елементів масиву
    return lastElementsSum;
}

console.log("Завдання: 10 ==============================");
console.log(getLastElementsSumAndPrint([1, 2, 3, 4, 5], 2)); // Виведе числа в консоль та суму 9

// 4
// 5
// 9

// Завдання: 11

/**
 * Функція `wordLengths` приймає масив слів та повертає новий масив, де кожний елемент - це довжина відповідного слова.
 *  arr - вхідний масив слів.
 * Повертає - lengthsArray - новий масив, де кожний елемент - це довжина відповідного слова з вхідного масиву.
 */
function wordLengths(arr) {
    // Перевірка, чи вхідний параметр є масивом
    if (!Array.isArray(arr)) {
        return "Вхідний параметр має бути масивом";
    }

    // Використання методу map() для створення масиву довжин слів
    const lengthsArray = arr.map((word) => word.length);

    // Повернення масиву довжин слів
    return lengthsArray;
}

console.log("Завдання: 11 ==============================");
console.log(wordLengths(["apple", "banana", "pineapple", "watermelon"])); // Виведе [5, 6, 9, 10]

// Завдання: 12

/**
 * Функція `insertElementAt` вставляє заданий елемент в масив на задану позицію.
 * Використовується метод `splice()` для реалізації.
 *  arr - вхідний масив.
 *  index - індекс, на якому необхідно вставити елемент.
 *  element - елемент, який необхідно вставити.
 * Повертає - arr - масив з вставленим елементом.
 */
function insertElementAt(arr, index, element) {
  if (!Array.isArray(arr)) {
    return 'Вхідний параметр має бути масивом';
  }

  arr.splice(index, 0, element);
  return arr;
}

console.log("Завдання: 12 ==============================");
console.log(insertElementAt([1, 2, 3, 4, 5], 2, "три")); // Виведе [1, 2, 'три', 3, 4, 5]


// Завдання: 13

/**
 * Функція `flattenArray` приймає масив (вкладені масиви допустимі) і повертає новий одновимірний масив з усіма елементами.
 *  arr - вхідний масив, який може містити вкладені масиви.
 * Повертає - flattenedArray - одновимірний масив з усіма елементами вхідного масиву.
 */
function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return 'Вхідний параметр має бути масивом';
  }

  return arr.flat(Infinity);
}

console.log("Завдання: 13 ==============================");
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Виведе [1, 2, 3, 4, 5]


// Завдання: 14

/**
 * Функція `expandArrayByN` приймає масив чисел і число n, та повертає новий масив, де кожне число з початкового масиву повторюється n разів.
 *  arr - вхідний масив чисел.
 *  n - кількість разів, скільки кожне число повторюється в новому масиві.
 * Повертає - expandedArray - новий масив, де кожне число повторюється n разів.
 */
function expandArrayByN(arr, n) {
  if (!Array.isArray(arr) || typeof n !== 'number') {
    return 'Перший вхідний параметр має бути масивом, другий - числом';
  }

  return arr.flatMap(num => Array(n).fill(num));
}

console.log("Завдання: 14 ==============================");
console.log(expandArrayByN([1, 2, 3], 3)); // Виведе [1, 1, 1, 2, 2, 2, 3, 3, 3]


// Завдання: 15

/**
  
  Функція findLongestWord приймає масив слів і повертає найдовше слово.
  Використовується метод reduce() для реалізації.
   arr - вхідний масив слів.
  Повертає - longestWord - найдовше слово.
  */
  function findLongestWord(arr) {
    if (!Array.isArray(arr)) {
        return '';
    }

    return arr.reduce((longestWord, currentWord) => {
        return currentWord.length > longestWord.length ? currentWord : longestWord;
    }, '');
}

console.log("Завдання: 15 ==============================");
console.log(findLongestWord(["apple", "banana", "pineapple", "watermelon"])); // Виведе 'watermelon'


// Завдання: 16

/**

Функція findDuplicateElements приймає масив чисел і повертає новий масив, в якому лише дубльовані елементи.
Використовується методи filter(), indexOf() для реалізації.
 arr - вхідний масив чисел.
Повертає - duplicateElements - новий масив, в якому лише дубльовані елементи.
*/
function findDuplicateElements(arr) {
  if (!Array.isArray(arr)) {
      return [];
  }

  return arr.filter((num, index) => arr.indexOf(num) !== index);
}

console.log("Завдання: 16 ==============================");
console.log(findDuplicateElements([1, 2, 3, 4, 2, 5, 6, 3, 5])); // Виведе [2, 3, 5]


// Завдання: 17

/**

Функція capitalizeWords приймає масив рядків і повертає новий масив, де кожне слово має першу літеру у верхньому регістрі.
Використовується метод map(), рядкові методи та логіка для реалізації.
 arr - вхідний масив рядків.
Повертає - capitalizedArray - новий масив, де кожне слово має першу літеру у верхньому регістрі.
*/
function capitalizeWords(arr) {
  if (!Array.isArray(arr)) {
      return [];
  }

  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}

console.log("Завдання: 17 ==============================");
console.log(capitalizeWords(["apple", "banana", "orange"])); // Виведе ['Apple', 'Banana', 'Orange']


// Завдання: 18

/**
  
  Функція calculateTotalPrice приймає масив об'єктів товарів і повертає загальну ціну всіх товарів.
  Кожен об'єкт товару має властивість price - ціна товару.
  Використовується метод reduce() для реалізації.
   arr - вхідний масив об'єктів товарів.
  Повертає - totalPrice - загальна ціна всіх товарів.
  */
  function calculateTotalPrice(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }

    return arr.reduce((totalPrice, product) => totalPrice + product.price, 0);
}

console.log("Завдання: 18 ==============================");
console.log(
    calculateTotalPrice([
        { name: "apple", price: 1 },
        { name: "banana", price: 2 },
        { name: "orange", price: 3 },
    ])
); // Виведе 6


// Завдання: 19. ЗВЕРНІТЬ УВАГУ, метод findLastIndex працює на версії ноди вище 18.0.0 якщо ваша версія нижче, завдання можно не виконувати
// щоб перевірити версію ноди виконайте в терміналі команду node -v

/**

Функція findLastNegativeNumberIndex приймає масив чисел і повертає індекс останнього від'ємного числа.
Використовується метод findLastIndex() для реалізації.
 arr - вхідний масив чисел.
Повертає - lastIndex - індекс останнього від'ємного числа.
*/
function findLastNegativeNumberIndex(arr) {
  if (!Array.isArray(arr)) {
      return -1;
  }

  return arr.findIndex(num => num < 0);
}

console.log("Завдання: 19 ==============================");
console.log(findLastNegativeNumberIndex([1, 2, -3, 4, -5, 6, -7])); // Виведе 6

