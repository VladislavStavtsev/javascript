// 1. Функция getDecimal(num)
function getDecimal(num) {
    const decimalPart = Math.abs(num) % 1;
    return decimalPart === 0 ? 0 : decimalPart;
}

// 2. Функция normalizeUrl(url)
function normalizeUrl(url) {
    if (url.startsWith('http://')) {
        return 'https://' + url.slice(7);
    } else if (url.startsWith('https://')) {
        return url;
    } else {
        return 'https://' + url;
    }
}

// 3. Функция checkSpam(str)
function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

// 4. Функция truncate(str, maxlength)
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '\u2026';
    } else {
        return str;
    }
}

// 5. Функция camelize(str)
function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('');
}

// Функция ucFirst(str) (для использования в camelize, но уже реализована в camelize)
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// 6. Функция fibs(n) 
function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

// 7. Функция arrReverseSorted(arr)
function arrReverseSorted(arr) {
    return [...arr].sort((a, b) => b - a);
}

// 8. Функция unique(arr)
function unique(arr) {
    return [...new Set(arr)];
}


// Примеры использования (для проверки):

console.log("getDecimal(1.23):", getDecimal(1.23));
console.log("getDecimal(-1.23):", getDecimal(-1.23));
console.log("getDecimal(1):", getDecimal(1));

console.log("normalizeUrl('yandex.ru'):", normalizeUrl('yandex.ru'));
console.log("normalizeUrl('http://yandex.ru'):", normalizeUrl('http://yandex.ru'));
console.log("normalizeUrl('https://yandex.ru'):", normalizeUrl('https://yandex.ru'));
console.log("normalizeUrl('https.ru'):", normalizeUrl('https.ru'));

console.log("checkSpam('_XxX_'):", checkSpam('_XxX_'));
console.log("checkSpam('__Viagra__'):", checkSpam('__Viagra__'));
console.log("checkSpam('test'):", checkSpam('test'));

console.log("truncate('Мама мыла раму.', 100):", truncate('Мама мыла раму.', 100));
console.log("truncate('Мама мыла раму.', 10):", truncate('Мама мыла раму.', 10));

console.log("camelize('var-test-text'):", camelize('var-test-text'));

console.log("arrReverseSorted([1, 3, 22]):", arrReverseSorted([1, 3, 22]));

console.log("unique([0, 1, 1, 2]):", unique([0, 1, 1, 2]));
console.log("unique(['a', 'b', 'c', 'c']):", unique(['a', 'b', 'c', 'c']));