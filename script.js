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

























































