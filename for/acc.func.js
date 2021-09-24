// Напиши функцию, которая принимает массив из чисел и возвращает сумму его элементов.
function nabor(mass){
    let acc = 0
    for (i=0; i<mass.length; i++){
     acc +=mass[i]
    }
      return acc
    }
     console.log(nabor([1, 2, 4]))

    //  Напиши функцию, которая принимает массив из чисел и возвращает сумму только положительных элементов.

    function nabor(mass){
        let acc = 0
        for (i=0; i<mass.length; i++){
          if (mass[i]>0 )
   acc += mass[i]
        }
          return acc
        }
         console.log(nabor([1, -2, 4]))

        //  Напиши функцию, которая принимает массив из названий языков программирования. Она должна возвращает названия тех элементов, длина которых больше трёх символов.

        function shortName(num){
            let arrN =[]
            for (i=0; i<num.length; i++){
            if(num[i].length > 3){
              arrN.push(num[i])
            }
            }
            return arrN
            
        }
      console.log(shortName(['ty', 'tiptr', 'gh']))

    //   Напиши функцию, которая принимает массив из имен. Функция должна вернуть новый массив с именами, которые начинаются либо на "а" либо на "у".
    
    function choic(array) {
        let arrayNew = []
        for(i=0; i<array.length; i++){
            if(array[i][0] === 'а' || array[i][0] === 'у' ){
                arrayNew.push(array[i])
            }    
        }
        return arrayNew
    }

console.log(choic(['ty', 'tiptr', 'gh']))


//   Допиши функцию deleteMessages так, чтобы она вовзращала новый массив, из которого удалены все объекты с ключами deleted равными true.


function deleteMessages(array) {
    let newAr
    for(i=0; i<array.length; i++){
        if(array[i].deleted !== true ){
            newAr.push(array[i])
        }
    }
    return newAr
  }
  const messages = [
   { text: 'hello', deleted: true },
   { text: 'bue', deleted: false },
   { text: 'js is a beauty', deleted: false },
   { text: 'pair programming', deleted: true },
   { text: 'this is my horse', deleted: false },
  ];
  
  console.log(deleteMessages(messages))