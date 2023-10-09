// let a = 10
// let b = 5
// let input
// if(a > 5){
//    input = prompt()
// }

// alert(input)

// let active = confirm()
// console.log(active)
// console.log(10 > 5)
// let input = prompt()
// input = Number(input)
// let inputSecond = prompt()

// if(input === 'Baki' || input === 'baki' || input === 'BAKI'){    
//     alert('Baki' + '1')
// }else if(input === 'Moskva' && inputSecond === 'Russia'){
//     alert('Moskva' + '2')
// }else if(input === 'Dubai'){
//     alert('Dubai' + '3')
// }else{
//     alert('Wrong')
// }

// if (input % 2 === 0 && input !== 0) {
//     alert('cut')
// } else if (input % 2 === 1 && input !== 0) {
//     alert('tek')
// } else {
//     alert('wrong')
// }

// if((1 < 10 && 5 > 10) || 5 === 5){
//    alert('OK')
// }else if(1 < 10){
//     alert('OK')
// }

// let input = prompt()
// input = Number(input)
// switch (input) {
//     case 1:
//         alert('Baki')
//         break
//     case 2:
//         alert('Moskva')
//         break
//     case 3:
//         alert('Dubai')
//         break
//     case 4:
//         alert('Mumbai')
//         break
//     default:
//         alert('Wrong')
// }

// let text = 'Hello'
// console.log(text[2],text[1])

// let input = prompt('Cinsivizi daxil edin')
// let inputSecond = prompt('Yashivizi daxil edin')
// inputSecond = Number(inputSecond) 
// let isActive = input === 'male' ? true : false

// if(isActive){
//     alert('MAN')
// }
// console.log(isActive)


// let isActiveSecond = input === 'male' 
// && inputSecond > 18 ? 'Adult Man' : 
// input === 'female' 
// && inputSecond > 18 ? 'Adult Woman' :
// input === 'male' 
// && inputSecond < 18 ? 'Young Man' : 
// input === 'female' 
// && inputSecond < 18 ? 'Young Woman' : 'Wrong'
// console.log(isActiveSecond)


// if(isActiveSecond === 'Adult Man' || isActiveSecond === 'Adult Woman'){
//     alert('Daxil ola bilersiniz')
// }else if(isActiveSecond === 'Young Man' || isActiveSecond === 'Young Woman'){
//     alert('Daxil ola bilmezsiniz')
// }

// console.log(isNaN(1))

// let a = Number(prompt())
// let b = Number(prompt())

// if(!isNaN(a) && !isNaN(b)){
//    console.log(a + b)
//    console.log(a * b)
//    console.log(a / b)
// }else{
//     alert('eded deyil')
// }

// if (1 < 10 || 1 > 10 || 5 > 15) {
//     console.log('OK')
// }

// let input = prompt()

// if (input === 'Birinci gun' || 
// input === 'Birinci gun' || 
// input === 'Birinci gun' || 
// input === 'Birinci gun' || 
// input === 'Birinci gun') {
//     console.log('OK')
// }

// switch (input) {
//     case 'Birinci gun':
//     case 'Ikinci gun':
//     case 'Ucuncu gun':
//     case 'Dorduncu gun':
//     case 'Beshinci gun':
//         console.log('OK')
//         break
// }


// let a = false
// let b = true

// console.log(Boolean(''))

// if(1< 10){
//     if(1<10){
//         if(1<10){

//         }       
//     }
// }

// let i = 0

// while(i < 20){
//     i++
//     console.log(i)
// }

// let text = 'Hello. World'

// while (true) {
//     let input = prompt('Ad daxil edin')

//     if (input === 'Show') {
//         alert(text)
//     }else if (input === 'End') {
//         break
//     } else {
//         text += input + ' '
//     }
// }
// console.log(text[1])
// let sum = 1

// for(let i = 0; i <= 10; i++){
//     sum += i
// }

// console.log(sum)

// for(let i = 0; i < text.length; i++){
//    if(text[i] === '.'){
//     break
//    }
//    console.log(text[i])
// }

// let i = 0

// do{
//     i++
//     console.log(i)
// }while(i < 10)
// let a
// let b

// outFor:
// for (let i = 0; i <= 11; i++) {
// inner:
//     for (let j = 0; j <= 8; j++) {
//         // a = i
//         // b = j
//         console.log(i,j)
//         if (i > 7 || j > 4) {
//             break inner
//         }
//     }
// }

// let result = String(a) + String(b)
// console.log(Number(result))

// console.log('a' > 'b')

// iki dovr yazirsiz ic ice. Col dovr i < 10 ic dovr j < 5. 
//Eger i > 9 ve j > 4 dovr dayanir
// let sumCut = 0
// let sumTek = 0

// let a
// let b

// for(let i = 1; i <= 100; i++){
//      if(i % 2 === 0){
//         sumCut += i
//         b = i
//      }else if(i % 1 === 0){
//         sumTek += i
//         a = i
//      }
//      console.log(a,b)
// }

// console.log(sumCut)
// console.log(sumTek)

// let text = 'Hello, @#$ World'
// let newText = ''
// for(let i =0; i< text.length; i++){
//     if(text[i] === '@' || text[i] === '#' ||text[i] === '$'){
//         continue
//     }

//     newText += text[i]
// }

// console.log(newText)



// const numberPlus = () => {
//     let i = 0

//     return function(){
//         i++
//         return i
//     }
// }
// console.log(numberPlus())
// let newFuction = numberPlus()

// let num = newFuction()
// console.log(num)
// num = newFuction()
// console.log(num)
// num = newFuction()
// console.log(num)
// num = newFuction()
// console.log(num)


// const plus = (numOne,numTwo) => {
//     return numOne + numTwo
// }

// const minus = (numOne,numTwo) =>{
//     return numOne - numTwo
// }

// const devide = (numOne,numTwo) =>{
//     return numOne / numTwo
// }

// const multi = (numOne,numTwo) =>{
//    return numOne * numTwo
// }

// console.log(plus(10,5))
// console.log(plus(1,2))
// console.log(minus(10,5))
// console.log(devide(10,5))
// console.log(multi(10,5))
// console.log(minus(3,2))
// console.log(devide(4,1))
// console.log(multi(5,5))

// const userInfo = (nameUser, age, profession, isAvailable) => {
//     alert(`The user ${nameUser} is ${profession} of ${age} year old is ${isAvailable ? 'available' : 'not available'}`)
// }


// userInfo('David', 30, 'developer', false)

// let text = prompt()

// const findNumber = (myText) => {
//     for(let i = 0; i < myText.length; i++){
//         if(myText[i] == +myText[i]){
//             console.log(myText[i])
//             console.log('Eded var')
//         }
//     }
// }

// findNumber(text)

// function salam(){
//     alert('salam')
// }

// const addText = () => {
//     let newText = ''

//     return () => {
//         let text = prompt()
//         newText += text + ' '
//         return newText
//     }
// }

// let newAddText = addText()

// console.log(newAddText())
// console.log(newAddText())

//Funksiyanın içində parametr ilə sual ve cavab verirsiz. 
//Bir neçə funksiya yaradın və hərəsində sual və cavab olsun 

// let aOne = prompt()
// let aTwo = prompt()
// let aThree = prompt()

// const quetionOne = (quetion, answer) => {
//     console.log(quetion)
//     let input = prompt()
//     if(answer === input){
//         return 'oK'
//     }else{
//         return 'Wrong'
//     }
// }

// const quetionTwo = (quetion, answer) => {
//     console.log(quetion)
//     if(answer === 'Moskva'){
//         console.log('OK')
//     }else{
//         console.log('Wrong')
//     }
// }

// const quetionThree = (quetion, answer) => {
//     console.log(quetion)
//     if(answer === 'Paris'){
//         console.log('OK')
//     }else{
//         console.log('Wrong')
//     }
// }

// quetionOne('Azerbaycanin paytaxti', 'Baku')
// quetionOne('Rusiyanin paytaxti', 'Moskva')
// quetionOne('Fransanin paytaxti', 'Paris')

// quetionTwo('Rusiyanin paytaxti',aTwo)
// quetionThree('Fransanin paytaxti',aThree)


// function show (){


//    s()

// }

// const showSecond = () => {
//     console.log(this)
// }

// showSecond()

// let text = 'Hello @#$%'
// let newText = ''
// function deleteSymbol (text) {
//  for (let i = 0; i < text.length; i++) {
//     if(text[i] === '@' || text[i] === '#' || text[i] === '$' || text[i] === '%'){
//         continue
//     }

//     newText += text[i]

//  }

//  return newText
// }

// console.log(deleteSymbol(text))


// let input = prompt('Nomre daxil edin')

// function isValidNumber(number){
//     if(number.length === 11 && number[0] === '+' && number[1] === '7'){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isValidNumber(input))
// let input = prompt('')
// console.log(input.split(' ').find((item) => item === '3'))
// let myarr = [1,2,3,4]
// console.log(Array.isArray(myarr))
// myarr.fill(10)
// console.log(myarr)
// let text = '1-2-3-4-6-7'
// console.log(Array.from('s d f s'))
// let my = new Array(1,2,3,4,5)
// console.log(my)

// console.log(text.split('-').join('+'))

// const f = () => {
//     return 'Hello'
// }
// console.log(f())

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // console.log(array.reverse())
// console.log(array.some((n) => n > 9))
// let arraySecond = [12, 13, 14, 15]
// let innerArray = [1, 2, [3, 4, [5]]]

// let find = array.find((item, index) => item > 3)
// console.log(find)
// let findi = array.findIndex((index) => index > 3)
// console.log(findi)

// // console.log(array[0], array[1])


// array.push(11)
// console.log(array)
// array.push(12)
// console.log(array)
// array.pop()
// console.log(array)
// array.shift()
// console.log(array)
// array.unshift(1)
// console.log(array)
// console.log(array.at(1))
// console.log(array.indexOf(1))
// console.log(array.includes(20))
// let newArray = array.concat(arraySecond)
// console.log(newArray)
// console.log(innerArray[2][0])
// let arr = innerArray.flat()
// console.log(arr.flat())


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

//

// 1. Beş addan ibarət massiv yaradın. 
//Promptdan ad daxil edin, ad massivdə varsa ture qaytarsın əks halda false qaytarın

//2. Beş addan ibarət massiv yaradın. 
//Promptdan ad daxil edin, ad massivdə varsa ad massivin axırına əlavə olunmur
//əks halda olunur

//3. Beş addan ibarət massiv yaradın. 
// Massivin axırıncı və birinci elementlərinin yerlərini dəyişin

//4.** Bubble Sort deyilən ədəd sıralama alqoritmi ilə bu massivi sıralayın [3,5,1,4,2]

//5. Beş addan ibarət massiv yaradın. Bütün adların birinci hərifi eyni olmalıdır
//Əgər bütün adların birinci hərifi eynidir isə true qaytarsın

//6. Əgər massivdə təkrarlanan elementlər var isə false qaytarın

//7. Əgər massivdə təkrarlanan elementlər var isə o elementləri silin



// let arr = [1,2,3]
// let newarr = arr.map((item) => item * 2)
// console.log(arr)
// console.log(newarr)


// let nameArr = ['Ramin', 'Ramal']

// // console.log(nameArr.every((item) => item[0] === 'R'))
// for (let i = 0; i < nameArr.length - 1; i++) {

//     if(nameArr[i][0] === nameArr[i + 1][0]){
//         console.log(true)
//     }

// }

// let arr = [1,2,3,3]
// let newarr = []

// for (let i = 0; i < arr.length; i++) {

//     if(arr[i] === arr[i + 1]){
//         continue
//     }
//     newarr.push(arr[i])

// }

// console.log(newarr)
// let input = prompt()
// let deletedElement

// let arr = ['Ramin', 'Nahid','Samir']

// if(arr.includes(input)){
//     arr = arr.filter((e) => e !== input)
// }


// deletedElement = arr.findIndex((item) => item === input)

// arr.splice(deletedElement,1)
// console.log(arr)

// let numarr = input.split(' ')
// console.log(numarr)
// let newnum = []
// for (let index = 0; index < numarr.length; index++) {
//     const element = Number(numarr[index])
//     newnum.push(element)
// }

// numarr = numarr.map((item) => Number(item))
// numarr = numarr.filter((e) => e < 3)
// console.log(numarr)
let even = []
let odd = []

let myArr = [1, 2, 3, 4, 5, 6]

// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];
// let newSalary = salary.flat()
// console.log(newSalary)

// let sum = newSalary.reduce((a,b) => a + b)
// console.log(sum)

// myArr.forEach((item,i) => {
//     if(item % 2 === 0){
//         even.push(item)
//     }else{
//         odd.push(item) 
//     }
//     console.log(i)
// })

// function myForEach(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[index] % 2 === 0){
//             even.push(arr[index])
//         }else{
//             odd.push(arr[index]) 
//         }
// }
// }
// myForEach(myArr)
// console.log(myArr)
// console.log(even)
// console.log(odd)


// console.log(newArr)
// console.log(arr)
// let newArr = arr.slice(1,3)
// console.log(newArr)
// console.log(arr)

// console.log(arr.some((item) => item > 6))

// 1. Boş massiv yaradırsız. Sonsuz dövr yaradırsız.
//  Dövrün içində prompt olacaq
// Ad daxil edirsiz və ad əlavə olunur
// "AD delete" daxil edirsiz və ad daxil olunan ad silinir
// Diger bir shey daxil etseniz "Wrong" versin
// "SHOW" daxil etsez adlar bir-bir gorsensin
// "END" daxil etsez dovr dayansin


// let arr = []

// let inputValues

// while (true) {
//     let input = prompt()
//     if(isNaN(input)){
//         inputValues = input.split(' ')
//         console.log(inputValues[0])
//         console.log(arr)
//     }
//     if (inputValues[1] !== 'delete' && inputValues[0] !== 'SHOW' && inputValues[0] === 'END') {
//         arr.push(input[0])
//     } else if (inputValues[1] === 'delete') {
//         let deleted = arr.findIndex(item => item === inputValues[0])
//         arr.splice(deleted, 1)
//     } else if (inputValues[0] === 'SHOW') {
//         arr.forEach((item) => {
//             console.log(item)
//         })
//     } else if (inputValues[0] === 'END') {
//         break
//     }
// }




// let arr = []


// while (true) {
//     let input = prompt()

//     if (input === 'delete') {
//         let name = prompt()
//         let deleted = arr.findIndex(item => item === name)
//         arr.splice(deleted, 1)
//     } else if (input === 'SHOW') {
//         arr.forEach((item) => {
//             console.log(arr)
//             console.log(item)
//         })
//     } else if (input === 'END') {
//         break
//     } else {
//         arr.push(input)
//     }
// }


// function s(){

// }


// const f = () => 1
// console.log(f())

// let menu = [
//     ["Pizza", 10.99],
//     ["Burger", 8.49],
//     ["Salat", 5.99],
//     ["Çörək", 2.49],
//     ["Su", 1.99],
//     ["Kola", 1.49]
// ];

// function showList(arr) {
//     arr.forEach(element => {
//         console.log(element[0], element[1])
//     });
// }

// showList(menu)

// function doOrder(arr, food, count) {
//     arr.forEach(element => {
//         if (element[0] === food) {
//             console.log(element[1] * count)
//         }
//     });
// }

// doOrder(menu, 'Kola', 5)

// let employees = [
//     ['Jaylee Macy', 'marketing'],
//     ['John Smith', 'management'],
//     ['Blossom Hartley', 'design'],
//     ['Austin Carpenter', 'marketing'],
//     ['Joan Knowles', 'development'],
//     ['Sally Nunez', 'management'],
//     ['Laurel Ward', 'development'],
//     ['Lark Simon', 'marketing'],
//     ['Jane Stone', 'management'],
//     ['Courtney Olson', 'development'],
// ];

// let newarr = []

// employees.forEach(element => {
//     if (element[1] === 'development') {
//         newarr.push(element)
//     }
// });

// newarr.forEach(element => {    
//         console.log(element[0], element[1])  
// });
// let input = Number(prompt())
// let arr = [3,1,1,7,7,2,4,9,8]
// let [one, two, three, ...other] = arr
// console.log(one,two,three)
// console.log(other)

// arr = [input, ...arr]
// console.log(arr)

// let newarr = [...new Set(arr)]
// newarr.sort()
// console.log(newarr)
// let menu = [
//     ["Burger", 8.49],
//     ["Pizza", 10.99],   
//     ["Salat", 5.99],
//     ["Çörək", 2.49],
//     ["Su", 1.99],
//     ["Kola", 1.49]
// ];

// let value = 'Birinci bahali'
// function sortMenu(direction){
//     if(direction === "Birinci bahali"){
//         menu.sort((a,b) => b[1] - a[1])
//     } else if(direction === "Birinci ucuz"){
//         menu.sort((a,b) => a[1] - b[1])
//     }    
// }

// sortMenu(value)

// console.log(menu)

// let arr = [1,2,3,5,4]
// let n = arr.toSpliced(0,1)
// n = n.toSorted()
// console.log(n)

// arr.push(6)

// console.log(arr)

// let newarr = [...arr]
// console.log(newarr)
// newarr.push(7)
// console.log(newarr)
// console.log(arr)

// let a = Array.from('1 2 3')
// console.log(a)
// console.log(Array.isArray(a))

// let array = [1,2,3,[4,4,5]]
// let narr = []

// array.forEach((item) => {
//     if(!Array.isArray(item)){
//          narr.push(item)
//     }else{        
//         item.forEach((itemArr) => {
//             narr.push(itemArr)
//         })
//     }
// })

// console.log(narr)

//1. Prompta 10 eded daxil edirsiniz vergul ile bolunmush
// ededlerin bir necesi tekrarlanmalidir
// ededleri ferqli siralanmada yazin
// neticede tekrarlanmayan elementler almaq lazimdir 
// kicikden boyuye siralanmish

// 2. let menu = [
//     ["Burger", 8.49],
//     ["Pizza", 10.99],   
//     ["Salat", 5.99],
//     ["Çörək", 2.49],
//     ["Su", 1.99],
//     ["Kola", 1.49]
// ];
// let otherMenu = []
//Prompta daxil etdiyini yemeyin ve ya suyun massivini
//yazirsiz otherMenu massivine 

//3. let menu = [
//     ["Burger", 8.49],
//     ["Pizza", 10.99],   
//     ["Salat", 5.99],
//     ["Çörək", 2.49],
//     ["Su", 1.99],
//     ["Kola", 1.49]
// ];
// prompta daxil etdiyiniz ededden ucuz 
//butun yemekler ve qiymetleri cixmalidir

//4. let menu = [
//     ["Burger", 8.49,'yemek'],
//     ["Pizza", 10.99,'yemek'],   
//     ["Salat", 5.99,'yemek'],
//     ["Çörək", 2.49,'yemek'],
//     ["Su", 1.99,'ickiler'],
//     ["Kola", 1.49,'ickiler']
// ];
// prompta daxil etdiyiniz ededden ucuz ve 
//yemek novunden asili
//butun yemekler ve qiymetleri cixmalidir

// 5.prompta daxil etdiyiniz ededden ucuz ve 
//yemek novunden asili
//butun yemeklerin massivlerini silirsiz

// let food = prompt()
// let input = Number(prompt())

// let menu = [
//     ["Burger", 8.49,'yemek'],
//     ["Pizza", 10.99,'yemek'],   
//     ["Salat", 5.99,'yemek'],
//     ["Çörək", 2.49,'yemek'],
//     ["Su", 1.99,'ickiler'],
//     ["Kola", 1.49,'ickiler']
// ];
// let otherMenu = menu.filter((item) => item[1] < input && item[2] === food)
// console.log(otherMenu)
// let i
// menu.forEach((item) => {
//     if(item[1] < input && item[2] == food){
//        i = menu.findIndex((itemFood) => item == itemFood)
//        menu.splice(i,1)
//     }
// })



// console.log(menu)

// let a = 0


// if(true){
//     var b =1
// }

// console.log(b)

// const c = 1
// c = 2
// s()
// var s = function(){
//     console.log('ok')
// }
// let n = null
// console.log(typeof NaN)
// console.log(5 - '5')

// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr[0],arr[1])
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// function name() {
//     console.log('hello')
//     console.log('hello')

//     console.log('hello')

//     console.log('hello')

// }

// name()

// function calc(a,b) {
//     return a + b
// }

// calc(1,2)

// let result = calc(1,2)
// console.log(result)

// let v= [calc(1,2),calc(1,2),calc(1,2),calc(1,2)]

// console.log(v)

// let func = () => {
//     let result = arr.findIndex((item) => item === 11)
//     return result
// }

// console.log(func())

// let array = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//             "geo": {
//                 "lat": "-37.3159",
//                 "lng": "81.1496"
//             }
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//             "geo": {
//                 "lat": "-43.9509",
//                 "lng": "-34.4618"
//             }
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//             "geo": {
//                 "lat": "-68.6102",
//                 "lng": "-47.0653"
//             }
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//             "geo": {
//                 "lat": "29.4572",
//                 "lng": "-164.2990"
//             }
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//             "geo": {
//                 "lat": "-31.8129",
//                 "lng": "62.5342"
//             }
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         }
//     },
//     {
//         "id": 6,
//         "name": "Mrs. Dennis Schulist",
//         "username": "Leopoldo_Corkery",
//         "email": "Karley_Dach@jasper.info",
//         "address": {
//             "street": "Norberto Crossing",
//             "suite": "Apt. 950",
//             "city": "South Christy",
//             "zipcode": "23505-1337",
//             "geo": {
//                 "lat": "-71.4197",
//                 "lng": "71.7478"
//             }
//         },
//         "phone": "1-477-935-8478 x6430",
//         "website": "ola.org",
//         "company": {
//             "name": "Considine-Lockman",
//             "catchPhrase": "Synchronised bottom-line interface",
//             "bs": "e-enable innovative applications"
//         }
//     },
//     {
//         "id": 7,
//         "name": "Kurtis Weissnat",
//         "username": "Elwyn.Skiles",
//         "email": "Telly.Hoeger@billy.biz",
//         "address": {
//             "street": "Rex Trail",
//             "suite": "Suite 280",
//             "city": "Howemouth",
//             "zipcode": "58804-1099",
//             "geo": {
//                 "lat": "24.8918",
//                 "lng": "21.8984"
//             }
//         },
//         "phone": "210.067.6132",
//         "website": "elvis.io",
//         "company": {
//             "name": "Johns Group",
//             "catchPhrase": "Configurable multimedia task-force",
//             "bs": "generate enterprise e-tailers"
//         }
//     },
//     {
//         "id": 8,
//         "name": "Nicholas Runolfsdottir V",
//         "username": "Maxime_Nienow",
//         "email": "Sherwood@rosamond.me",
//         "address": {
//             "street": "Ellsworth Summit",
//             "suite": "Suite 729",
//             "city": "Aliyaview",
//             "zipcode": "45169",
//             "geo": {
//                 "lat": "-14.3990",
//                 "lng": "-120.7677"
//             }
//         },
//         "phone": "586.493.6943 x140",
//         "website": "jacynthe.com",
//         "company": {
//             "name": "Abernathy Group",
//             "catchPhrase": "Implemented secondary concept",
//             "bs": "e-enable extensible e-tailers"
//         }
//     },
//     {
//         "id": 9,
//         "name": "Glenna Reichert",
//         "username": "Delphine",
//         "email": "Chaim_McDermott@dana.io",
//         "address": {
//             "street": "Dayna Park",
//             "suite": "Suite 449",
//             "city": "Bartholomebury",
//             "zipcode": "76495-3109",
//             "geo": {
//                 "lat": "24.6463",
//                 "lng": "-168.8889"
//             }
//         },
//         "phone": "(775)976-6794 x41206",
//         "website": "conrad.com",
//         "company": {
//             "name": "Yost and Sons",
//             "catchPhrase": "Switchable contextually-based project",
//             "bs": "aggregate real-time technologies"
//         }
//     },
//     {
//         "id": 10,
//         "name": "Clementina DuBuque",
//         "username": "Moriah.Stanton",
//         "email": "Rey.Padberg@karina.biz",
//         "address": {
//             "street": "Kattie Turnpike",
//             "suite": "Suite 198",
//             "city": "Lebsackbury",
//             "zipcode": "31428-2261",
//             "geo": {
//                 "lat": "-38.2386",
//                 "lng": "57.2232"
//             }
//         },
//         "phone": "024-648-3804",
//         "website": "ambrose.net",
//         "company": {
//             "name": "Hoeger LLC",
//             "catchPhrase": "Centralized empowering task-force",
//             "bs": "target end-to-end models"
//         }
//     }
// ]
// let obj =  {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//         "street": "Kattie Turnpike",
//         "suite": "Suite 198",
//         "city": "Lebsackbury",
//         "zipcode": "31428-2261",
//         "geo": {
//             "lat": "-38.2386",
//             "lng": "57.2232"
//         }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//         "name": "Hoeger LLC",
//         "catchPhrase": "Centralized empowering task-force",
//         "bs": "target end-to-end models"
//     }
// }
// let b = [1,2,3,4,5,6]
// console.log(b)
// let newarr = [...array]
// let [o, t,...ot] = b
// console.log(o,t,ot)
// console.log(b)
// newarr.push(obj)

// console.log(array)
// console.log(newarr)



// for(let i = 0; i < array.length; i++){
//     let p = document.createElement('p')
//     p.style = 'background-color: blue;font-size: 30px;'
//     p.innerHTML = `<span>${array[i].name}</span> <span>${array[i].email}</span>`
//     container.appendChild(p)
// }

// let arr = ["Saleh: 1997", "Samir : 1995", "Nahid : 1996", "Nahid : 19992", "Ramin : 1999"]


// let arr = ["Saleh", "Samir", "Nahid", "Ramin" ,"Nahid"]
// let newarr = [...arr]


// for (let i = 0; i < arr.length; i++) {  
//         if(arr[i] === arr[i + 1]){
//              console.log(arr.indexOf(arr[i]),arr.indexOf(arr[i + 1]))
//             // arr = arr.filter((item) => item !== arr[i])
//         }
// }
// console.log(arr)

// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ],
//   ];
  
// for (let index = 0; index < employees.length; index++) {
//     const element = employees[index];
//     if(element[1] === 'development'){
//         console.log(element[0],element[1])
//     }  
// }

// let newEmp = employees.filter((item) => item[1] === 'development')

// console.log(newEmp)

// const students = [
//     ["Nigar","Əliyeva",85 ],
//     ["Orxan","Məmmədov",92 ],
//     ["Fərid","Hüseynov",75 ],
//     ["Zahidə","Quliyeva",88 ],
//   ];

// students.sort((a,b) => a[2] - b[2])

// console.log(students)

// let studentsRaiting = []

// students.forEach((item) => {
//     studentsRaiting.push(item[2])
// })

// console.log(studentsRaiting)

// let newStudentsRaiting = [...new Set(studentsRaiting)]

// let total = newStudentsRaiting.reduce((a,b) => a + b)
// let mediane = total / newStudentsRaiting.length

// let medianeStudent = students.filter((item) => item[2] > mediane)
// console.log(medianeStudent)

// let minRaiting = Math.min(...newStudentsRaiting)
// let maxRaiting = Math.max(...newStudentsRaiting)

// console.log(minRaiting, maxRaiting)

// // let minStudent = students.filter((item) => item[2] === minRaiting)
// // let maxStudent = students.filter((item) => item[2] === maxRaiting)

// console.log(students[0][0],students[0][1], students.at(-1)[0],students.at(-1)[1])



// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];

// let salaryArr = []

// salary.forEach((item) => {
//         let total = item.reduce((a,b) => a + b)
//         salaryArr.push(total)
// })
// console.log(salaryArr)

// salaryArr.sort((a,b) => a - b)

// console.log(salaryArr)

// console.log(salaryArr[0], salaryArr.at(-1))

// let arr = [
//     {
//         'student Name': 'Alex',
//         'profession': 'Developer',
//          id:1,
//          arr:[1,2,3,4,5]
//     },
//     {
//         'student Name': 'Alex',
//         'profession': 'Doctor',
//         id:2
//     },
//     {
//         'student Name': 'Sam',
//         'profession': 'Developer',
//          id:3
//     }
// ]

// let inputStudent = 'student Name'
// let inputProfession = 'Alex'
// let newarr = arr.filter((item) => item[inputStudent] === inputProfession)

// console.log(newarr)
// newarr.forEach((item) => {
//     // delete item.id
//     console.log(item['student Name'])
// })


// let inputStudent = prompt()
// let inputProfession = prompt()



// // console.log(obj.studentName, obj.profession)

// let newObj = new Object()
// console.log(newObj)
// newObj.studentName = 'Alex'
// newObj.profession = 'Developer'
// console.log(newObj)
// newObj.profession = 'Doctor'
// console.log(newObj)

// delete newObj.profession
// console.log(newObj)

// console.log(obj[inputStudent], obj[inputProfession])

// console.log(obj.input, newObj)


// let arr = ["Saleh", "Samir", "Nahid", "Sam", "Ramin"]
// let newarr = []
// arr.forEach((item) => {
//     let obj = {}
//     obj.studentName = item
//     newarr.push(obj)
// })

// console.log(newarr)


// let obj ={
//     marks:[1,2,3,4,5]
// }


// console.log(obj.arr)



