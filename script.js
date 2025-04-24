// დავალება-1: შეამოწმე, არის თუ არა ყველა რიცხვი მასივში ლუწი.
function areAllEven(numbers) {
    return numbers.every(function(num) {
        return num % 2 === 0;
    });
}
let numbers = [2, 4, 6, 8];
console.log(areAllEven(numbers));



// დავალება-2:გადაამოწმე, არის თუ არა ყველა ელემენტი სტრინგის ტიპის.
function areAllString(string) {
    return string.every(function(str) {
        return typeof str === "string";
    });
}
let string = ["hey", "gamarjoba", "hello world"];
console.log(areAllString(string));



// დავალება-3:  გადაამოწმე, არის თუ არა ყველა რიცხვი 50-ზე მეტი.
function areaMoreThan50(numb) {
    return numb.every(function(num1) {
        return num1 > 50;
    });
}
let numb = [132, 100, 234, 265];
console.log(areaMoreThan50(numb));



// დავალება-4: გადაამოწმე, შეიცავს თუ არა ყველა ელ.ფოსტა “@” სიმბოლოს.
function areaIncludeEmail(mails) {
    return mails.every(function(mail) {
        return mail.includes ('@');
    });
}
let mails = ["okriashvili@gmail.com", "makho.gmail.com"];
console.log(areaIncludeEmail(mails));



//დავალება-5:შეამოწმე, არის თუ არა მასივში მინიმუმ ერთი ლუწი რიცხვი.
function areaAtLeatOneEven(someEvenNumber) {
    return someEvenNumber.some(function(evenNum){
        return evenNum % 2 === 0;
    });
}
let someEnevNumber = [1, 4, 5, 65, 341];
console.log(areaAtLeatOneEven(someEnevNumber));



// დავალება-6: გადაამოწმე, არის თუ არა მასივში მინიმუმ ერთი ცარიელი სტრინგი.
function someEmptyString(emptyStr) {
    return emptyStr.every(function(string){
        return string === "";
    });
}
let emptyStr = ["hello", "world", 5, ""];
console.log(someEmptyString(emptyStr));
 


// დავალება-7: გადაამოწმე, არის თუ არა მინიმუმ ერთი რიცხვი უარყოფითი.
function isNegativeNumber(negativeNumber) {
    return  negativeNumber.some(function(negativeNum){
        return negativeNum < 0
    });
}
let negativeNumber = [-2, 56, 13, 142, 0]
console.log(isNegativeNumber(negativeNumber));



// დავალება-8: გაფილტრე რიცხვების მასივი ისე, რომ დარჩეს მხოლოდ ლუწები.
function onlyEvenNumber(onlyEven) {
    return onlyEven.filter(function(evenNum) {
        return evenNum % 2 == 0;
    });
}
let onlyEven = [23, 54, 13, 67, 28];
let x = onlyEvenNumber(onlyEven);
console.log(x);




// დავალება-9:
function filterString(onlyString) {
    return onlyString.filter(function(elements) {
        return typeof elements === "string";
    });
}
let onlyString = ["hello", 9, "world", 100, NaN];
let result = filterString(onlyString);
console.log(result);
