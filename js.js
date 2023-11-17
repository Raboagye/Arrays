
let names = ["Danny", "Joe", "Sarah", "Molly"]
let namesCopy = [...names]
let namesCopy2 = [...names]
let names2 = ['Richard', 'yaw']
let names3 = ["Kofi", "Bondzie", "Kofi"]

let num = [1,2,3,[4,5],6,7]
let num1 = [1,2,3,[4,5, [5,7]],6,7]

//toString()
// let stringNames = names.toString()
// console.log(stringNames)
// output Danny,Joe,Sarah,Molly

//join
// let stringNames = names.join(' ')
// console.log(stringNames)
//output Danny Joe Sarah Molly

// concat
// console.log(names.concat(names2))
//output ['Danny', 'Joe', 'Sarah', 'Molly', 'Richard', 'yaw']

// console.log(names.concat(names2,names3))
// output ['Danny', 'Joe', 'Sarah', 'Molly', 'Richard', 'yaw', 'Kofi', 'Bondzie']

//splice
// namesCopy.splice(1, 1)
// console.log(namesCopy)
//output ['Danny', 'Sarah', 'Molly']

// namesCopy2.splice(1, 2)
// console.log(namesCopy2)
//output ['Danny', 'Molly']

// namesCopy.splice(1, 2, 'Bill', 'Bob')
// console.log(namesCopy)
//output  ['Danny', 'Bill', 'Bob', 'Molly']

//slice
// console.log(names.slice(1,3))
// output ['Joe', 'Sarah']

//indexOf
// console.log(names.indexOf("Joe"))
// output 1

// lastIndexOf
// console.log(names3.lastIndexOf("Kofi"))
//output 2

//flat
// console.log(num.flat())
//output [1, 2, 3, 4, 5, 6, 7]

// console.log(num1.flat(2))
// output [1, 2, 3, 4, 5, 5, 7, 6, 7]

//forEach
// let count = 0
// names.forEach((n) => {
// count++
// })
// console.log(count)
//output 4

//for
// for(let i = 0; i < names.length; i++) {
// console.log(names[i])
// }
// output 
// Danny
// Joe
// Sarah
// Molly

// for(let i = 1; i < names.length; i=i+2) {
//     console.log(names[i])
// }
//output 
// Joe
// Molly

let blogPosts = [
    {author: "Rich", lastName: "Aboagye"},
    {author: "Randy", lastName: "Berchie"},
    {author: "Lydia", lastName: "Aboagye"},
]

//filter
// let filter = blogPosts.filter((n) => {
//     return (
//         n.lastName == "Aboagye"
//     )
// })
// console.log(filter)

//output 
// {author: 'Rich', lastName: 'Aboagye'}
// {author: 'Lydia', lastName: 'Aboagye'}

//reduce
// let nuum = [1,2,3,4,5,6,7]
// let totall = nuum.reduce((total, currentVal) => total + currentVal)
// console.log(totall)
//output 28
 
let nuum = [1,2,10,4,5,6,7]
// let totall = nuum.reduce((total, currentVal) => total + currentVal, 10)
// console.log(totall)
//output 45

// let max = nuum.reduce((initialVal, currentVal)=> Math.max(initialVal, currentVal), -Infinity)
// console.log(max)
//output 10

//some
// let isGreaterThan = nuum.some((n) => n > 5)
// console.log(isGreaterThan)
//output true

//every
// let AllisGreaterThan0 = nuum.every(n => n > 0)
// console.log(AllisGreaterThan0)
// output true

//find
// let find = blogPosts.find((n) => n.author === "Rich")
// console.log(find)
// output {author: 'Rich', lastName: 'Aboagye'}

//findIndex
// let findIndex = blogPosts.findIndex((n) => n.author === "Rich")
// console.log(findIndex)
// output 0

//sort
// console.log(names.sort())
// output ['Danny', 'Joe', 'Molly', 'Sarah']

// console.log(names.sort().reverse())
// output  ['Sarah', 'Molly', 'Joe', 'Danny']

// console.log(names.sort((a, b) => a > b? -1 : 1))
// output ['Sarah', 'Molly', 'Joe', 'Danny']

// console.log(nuum.sort((a, b)=> b - a))
// output [10, 7, 6, 5, 4, 2, 1]

// fill
let numbers = [1, 2, 3, 4, 5]
// numbers.fill(0)
// console.log(numbers)
// output [0, 0, 0, 0, 0]

// numbers.fill(0, 1, 4)
// console.log(numbers)
// output [1, 0, 0, 0, 5]
 
// includes
// console.log(names.includes("Sarah"))
// output true

//push 
// numbers.push(6,7,8)
// console.log(numbers)
// output [1, 2, 3, 4, 5, 6, 7, 8]

//pop
// numbers.pop()
// console.log(numbers)
// output [1, 2, 3, 4]

// unshift
// numbers.unshift(0,-1,4)
// console.log(numbers)
// output [0, -1, 4, 1, 2, 3, 4, 5]

//shift
// numbers.shift()
// console.log(numbers)
// output [2, 3, 4, 5]

// Array.from
let string = '12345667'
// let array = Array.from(string)
// console.log(array)
// output ['1', '2', '3', '4', '5', '6', '6', '7']

// let array = Array.from(string)
// console.log(array.map(Number))
// output [1, 2, 3, 4, 5, 6, 6, 7]

// let array1 = Array.from(string, Number)
// console.log(array1)
// output [1, 2, 3, 4, 5, 6, 6, 7]

//new Set
let array2 = [2,3,4,5,5,2,3,7]
// console.log(new Set(array2)) 
// output {2, 3, 4, 5, 7}

// let removeDuplicates = new Set(array2)
// console.log(Array.from(removeDuplicates))
// output [2, 3, 4, 5, 7]

//isArray
let string2 = "Richard Aboagye"
// console.log(Array.isArray(array2))
// output true

// console.log(Array.isArray(string2))
// output false







