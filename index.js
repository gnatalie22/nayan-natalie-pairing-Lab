//Code your solutions in this file
//1
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i++){
        console.log(i);
    }
}
function multipleOfThree(){
    for (let i=3;i < 100;i++){
        if(i%3===0){
            console.log(i)
        }
    }
} 
//multipleOfThree()

// 3
function multiplesOfThreeOrFive() {
    for (let i = 1; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

//4
 
 function untilNum(num){
     for(let i=1;i<=num;i++){
         console.log(i)
     }
 }
untilNum(5)
