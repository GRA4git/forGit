// В файле accumulator-5.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorEven и собери в ней четные числа массива.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let accumulatorEven = [] ;
for(i=0; i < array.length; i++){
    if(array[i]%2 === 0){
        accumulatorEven.push(array[i]) ;
    }
}
console.log(accumulatorEven)