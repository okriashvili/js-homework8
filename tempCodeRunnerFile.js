function someStringElement(strElement) {
    return strElement.some(function(someString){
        return typeof someString === "typeString";
    });
}
let strElement = [4, 6, 132, "world"]
console.log(someStringElement(strElement));