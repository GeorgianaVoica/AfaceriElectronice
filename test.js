//test();

// function test() {
//     console.log('here')
// }

// const tst2 = () => {
//     console.log('here')
// }

function show() {
    if (true) {
        var number1 = 1;
        let number2 = 2;
        const number3 =3;
    }

    console.log(number1);
    // console.log(number2);
    // console.log(number3);
}

show()

//Function scope, global scope
//var - var vizibile in tot cadrul fisierului
//let - var vizibile doar in cadrul functiei

const obj = {
    name: 'Georgiana Voica',
    email: 'georgianav2002@yahoo.ro'
}

obj.yearsOld = 25

// obj = {}
// console.log(obj)

const arr = [1,2,3,4]

for(let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((el, index) => {
    console.log(el, index)
})

for(el of arr){
    console.log(el)
}

if (3 == '3') {
    console.log('same number')
} else {
    console.log('not the same number')
}