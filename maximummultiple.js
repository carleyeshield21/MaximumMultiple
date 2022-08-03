// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript
function maxMultiple(divisor, bound){
    for(i=bound; i>=divisor; i--){
        if(i % divisor == 0 && i>0){
            console.log(i)
            break
        }
    }
}
maxMultiple(2,7)
console.log('========')
maxMultiple(3,10)
console.log('========')
maxMultiple(7,17)
console.log('========')
maxMultiple(10,50)
console.log('========')
maxMultiple(37,200)
console.log('========')
maxMultiple(7,100)