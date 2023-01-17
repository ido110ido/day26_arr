//EX2
//1
const z =[1,2,3,4,5]
const y = z.map((num) => num*2)
console.log(y);
//2
const ages = [1,2,3,4,5,6]
const agesS = ages.map((x) => x.toString())
console.log(agesS);
//3
const employees = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Bob', age: 35}
    ];
const capitalize = (n) => n.split('').map((letter) => letter.toUpperCase()).join('')
const newEmployees = employees.map((employe) => capitalize(employe.name))
console.log(newEmployees);
//4
const multiplyByIndex = (arr) => arr.map((num,index) => num*index)
console.log(multiplyByIndex([1, 2, 3]));
//EX3
//1
const sum = (arr) =>{
    let sum = 0
    arr.forEach(element => {
        sum+=element        
    });
    return sum
}
console.log(sum([1,2,3,4]));
//2
const doubleValues = (arr) => arr.map((num) => num*2)
console.log(doubleValues([1,2,3]));
//B
//it's better to use map insted of forEach beucose i need new arr
//3
const vowelsToX = (arr) =>arr.map((text) => text.replace(/[aeiou]/gi,'X'))
console.log(vowelsToX(['afalskml','ffrdkfmlsla']));
//4
const employees2 = [
    { name: "John", age: 30 },
    { name: "Jane", age: 15 },
    { name: "Bob", age: 35 },
   ];
const checkAge = (arr) =>{
    arr.forEach((employe,index) => {if(employe.age < 20) console.log(`The person at index ${index} is too young.`)})
}
checkAge(employees2)
//B
const updateEmployees = (arr) => {
    arr.forEach((employe) => employe.age > 25? employe.isAdult = true : employe.isAdult = false)
}
updateEmployees(employees2)
console.log(employees2);
//EX3
//1
const array = [1,2,3,4,5,6,7,8,10,33]
const evensOnly = (arr) => arr.filter((num) => num%2 === 0)
console.log(evensOnly(array));
//2
const fiveAndGreaterOnly = (arr) => arr.filter((num) => num >= 5 )
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//3
const filterClubMembers = (arr) => arr.filter((member) => member.isClubMember )
console.log(filterClubMembers([
    { name: "Angelina Jolie", isClubMember: true },
    { name: "Eric Jones", isClubMember: false },
    { name: "Paris Hilton", isClubMember: true },
    { name: "Kayne West", isClubMember: false },
    { name: "Bob Ziroll", isClubMember: true }
]));
//EX4
//1
const array1 = [5, 12, 8, 130, 44]
const moreThen10 = array1.find((num) => num > 10)
console.log(moreThen10);
//2
const students = [ 
    { name: 'John', age: 22 },
      { name: 'Jane', age: 23 },
      { name: 'Bob', age: 24 },
      { name: 'Alice', age: 25 }
   ]
//a
const findStudent = (arr,name) => arr.find((student) => student.name === name)
console.log(findStudent(students,'Bob'));
//b
const olderThan23  = (arr) => arr.find((student) => student.age > 23)
console.log(olderThan23(students));

//EX5
//1
const input =[1,-4,12,0,-3,29,-150]
const sumOfPositiv = (arr) => {
    return arr.reduce((sum,num) => num >= 0? num + sum : 0 + sum, 0)
}
console.log(sumOfPositiv(input));
//2
const calcFactorial = (num) => {
    if (typeof num !== 'number') return 'Invalid input';
    return [...Array(num)].reduce((acc, val, index) => acc * (index + 1), 1);
  }
console.log(calcFactorial(6))
//3
const findOldest = (arr) => arr.reduce((oldest,student) =>student.age > oldest.age ? student : oldest)
console.log(findOldest(students));
//b
const findTwoOldest  = (arr) =>{
    let answer = []
    let biggest = arr.reduce((oldest,student) => student.age > oldest.age ? student : oldest)
    answer.push(biggest)
    arr.splice(arr.indexOf((e) => e.name === biggest.name))
    let biggest2 = arr.reduce((oldest,student) => student.age > oldest.age ? student : oldest)
    answer.push(biggest2)
    return answer
}
console.log(findTwoOldest (students));
//4
// const isPresent = (text, a) =>{
//     let n = text.split('').reduce((isPresent, t) => {
//         console.log(isPresent);
//         if(t === a){
//             return t
//         }
//         else a
//     },'a')
//         console.log(n);
//     return n
// }
// console.log(isPresent('avfggdd','g'));