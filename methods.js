const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

//Funcion creada para ser usada por el myForEach
function printUser(user){
    console.log("Nombre: "+ user.name + "\nEdad: "+ user.age + "\nEmail: "+ user.email + "\n");
}

// Evaluacion 6 de Academlo Implementacion de metodos
// 1- ForEach
//Muestra en consola el nombre, edad y email de cada Usuario
function myforEach (array, myFunction){
    for(let i=0; i<array.length;i++){
        myFunction(array[i]);
    }
}

// 2- Filter
// Muestra en consola un array con los usuarios mayores de 30 años 
function myFilter (array){
    let filtered = [];

    for(let i=0; i<array.length;i++){
        if(array[i].age > 30){
            filtered.push(array[i])
        }
    }

    return filtered;
}

// 3- Map
// Retorna un nuevo array con la edad de cada usuario multiplicada por x numero
function myMap (array, multiplicate){
    let newArray = [];
    let newElement = {};

    for(let i=0;i<array.length;i++){
        newElement = {...array[i]};
        newElement.age = newElement.age * multiplicate; 
        newArray.push(newElement);
        
    }

    return newArray
}

// 4- Find
//Retorna el primer usuario mayor a una edad

function myFind (array, age){

    for(let i=0; i<array.length;i++){
        if(array[i].age > age){
            return array[i]
        }
    }

    return undefined;
}

// 5- FindIndex
//Retorna el indice del primer usuario mayor a una edad
function myFindIndex (array, age){

    for(let i=0; i<array.length;i++){
        if(array[i].age > age){
            return i+1;
        }
    }

    return -1;
}

// 6- Contains
//Busca un nombre entre los usuario
function myContains (array,nameSearch){

    for(let i=0;i<array.length;i++){
        if(nameSearch.toLowerCase() === array[i].name.toLowerCase()){
            return true;
        }
    }

    return false;
}

// 7- Pluck
//Crea un array con los valores de la propiedad de cada elemento
function myPluck (array,property){
    let newArray = [];

    array.forEach((element) => newArray.push(element[property]));

    return newArray;
}

// 8- WithOut
//Retorna un array con los elementos que no fueron descartados
//descarta a los usuarios por medio de la terminacion de sus correos
function myWithOut (array, out){
    let newArray = [];

    array.forEach((element) => {
        if(!element.email.endsWith(out)){
            newArray.push(element);
        }
    })

    return newArray;
}

// console.log('forEach');
// myforEach(users, printUser);
// console.log('\nfilter'); 
// console.log(myFilter(users));  
// console.log('\nmap');
// console.log(myMap(users,5));
// console.log(users)
// console.log('\nfind');
// console.log(myFind(users,30)); 
// console.log('\nfindIndex');
// console.log(myFindIndex(users,30)); 
// console.log('\ncontains');
// console.log(myContains(users,'Daniela')) 
// console.log('\npluck');
// console.log(myPluck(users,'email')); 
// console.log('\nwithOut');
// console.log(myWithOut(users,'@academlo.com')) 