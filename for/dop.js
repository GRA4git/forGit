// Дан массив [10, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];  Вывести в консоль все вложенные массивы (вывести их именно как массивы, раскрывать не нужно).

const toc = [0, -12, [231, 1, -32], -0.001, [75, 123, 21], 12, 321, [292, 21]];

for(i=0; i<toc.length; i++){
    if(Array.isArray(toc[i])) {
        console.log(toc[i])
    }
}




// - Вывести в консоль все имена
// - Вывести в консоль имена всех совершеннолетних людей (от 18 лет)
// - Вывести в консоль имена всех пенсионеров (старше 65 лет)
// - Создайте функцию `addPeople()`, которая принимает два параметра - имя и возраст - и 
// добавляет в массив `people` объект с именем и возрастом, которые были переданы в качестве параметров. Например:

addPeople('Cirsten', 40); // добавит в массив объект - {name: 'Cirsten', age: 40}
addPeople('Boris', 10); // добавит в массив объект - {name: 'Boris', age: 10}

let people = [{name: 'Bradly', age: 74}, {name: 'Juliya', age: 20}, 
{name: 'Walter', age: 35}, {name: 'Kristen', age: 12}, {name: 'Sam', age: 2}];

for( const elem of people) {
    if (elem.age >= 18) {
        console.log(elem.name)
    }
}

function addPeople(a, b){
    const obj = {
        name: 'Cirsten', age: 40,
      age: 'Boris', age: 10,
    }
    
    people.push(obj)
}
