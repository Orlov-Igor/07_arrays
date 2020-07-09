// Задача №1

function odd(origArray = []) {
  newArray = [];
    
  for(let i = 0; i < origArray.length; i++) {

    if (origArray[i] % 2 === 1) {
      newArray.push(origArray[i]);
    };
  };

 return newArray
};

let arr = [21, 2, 13, 4, 7, 18, 29, 1, 10];
console.log(odd(arr));

// Задача №2

function even(origArray = []) {
    newArray = [];
      
    for(let i = 0; i < origArray.length; i++) {
  
      if (origArray[i] % 2 === 0) {
        newArray.push(origArray[i]);
      };
    };
  
return newArray
};
  
let arr2 = [21, 2, 13, 4, 7, 18, 29, 1, 10];
console.log(even(arr2));

// Задача №3

function flat(matrix = [[]]) {
    newArray = [];
    
    for(i = 0; i < matrix.length; i++) {
      
      for(j = 0; j < matrix[i].length; j++) {
            
        newArray.push(matrix[i][j]);
      };
    };

return newArray
};

let arr3 = [
['John', 'Mike', 'Peter', 'Sean'],
['Ann', 'Mary', 'Diana', 'Molly']
];
console.log(flat(arr3));

