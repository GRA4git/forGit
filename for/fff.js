function deleteMessages(array) {
    let newAr = []
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