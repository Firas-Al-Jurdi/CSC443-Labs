let name = prompt("Please enter your name!");
document.getElementById("name").innerHTML = name;

let array = [];
function add() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    let result = a + b;
    array.push(result);
    document.getElementById("result").innerHTML = result;

}

function sub() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    let result = a - b;
    array.push(result);
    document.getElementById("result").innerHTML = result;
}

function mult() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    let result = a * b;
    array.push(result);
    document.getElementById("result").innerHTML = result;
}
function div() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    let result = a / b;
    array.push(result);
    document.getElementById("result").innerHTML = result;
}

function calculate(ele) {
    switch (ele.id) {
        case "add":
            add();
            break;

        case "sub":
            sub();
            break;

        case "mult":
            mult();
            break;

        case "div":
            div();
            break;

        default:
            break;
    }
    
}

function printArray() {
   document.getElementById("arr").innerHTML = array.toString();
}

//part 2

let firstArray = ["john","jason","kevin"];
firstArray.unshift("jad");
let secondArray = ["manel","nahla","sabine","mirna"];
let thirdArray = firstArray.concat(secondArray);

console.log(firstArray);
console.log(secondArray);
console.log(thirdArray);
console.log(thirdArray.indexOf("john"));
console.log(thirdArray.length);
console.log(thirdArray.pop());
console.log(thirdArray.shift());
thirdArray.push("firas");
console.log(thirdArray);
console.log(thirdArray.reverse());
let fourthArray = thirdArray.slice(0,3);
console.log(fourthArray);
console.log(fourthArray.includes("sabine"));
thirdArray.forEach(function (ele){
    console.log(ele);
});