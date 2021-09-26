const array = [10, 12, -2, 1, -3, 6, -7, 8, 9, 9]
let accumulator = 0
for (i=0; i<array.length; i++){
    if(array[i] > 0)
    accumulator += array[i]
}
console.log(accumulator)


// Задача 3.2
// В файле accumulator-2.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

// Создай переменную accumulator и собери в ней сумму всех положительных элементов массива.
