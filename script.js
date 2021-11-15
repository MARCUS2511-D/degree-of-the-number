let num1 = +prompt(" Enter any number")
while (isNaN(num1) || num1 == 0) {
    num1 = +prompt(" DumbAss you chose wrong button, change to the number ")
};
let num2 = +prompt( " Enter the degree of the number")
while (isNaN(num2) || num2 == 0) {
    num2 = +prompt( " Degree isn't equals to any words")
};
let answer = 1

for (let i = 1; i <= num2; i++) {
    answer = answer * num1
}
alert( " Degree of the entered number is " + answer)