// В файле accumulator-6.js создай массив с десятью элементами числового типа.

// Создай переменную accumulatorOdd и собери в ней нечетные числа массива.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let accumulatorOdd = [] ;
for(i=0; i < array.length; i++){
    if(array[i]%2 === 1){
        accumulatorOdd.push(array[i]) ;
    }
}
console.log(accumulatorOdd)