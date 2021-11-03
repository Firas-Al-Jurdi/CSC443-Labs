class Employee{
    static numberOfEmployees=0;
    static increaseNumOfEmployees(){
        this.numberOfEmployees++;
    }
    name;
    email;
    age;
    address;
    yearsOfExperience;
    salary;

    constructor(name, email, age, address, yearsOfExperience){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.yearsOfExperience = yearsOfExperience;
        this.salary = 1000;
        Employee.increaseNumOfEmployees();
    }

    printEmployee(){
        console.log("Name: "+this.name+"\nEmail: "+this.email+"\nAge: "+this.age+"\nAddress: "+this.address+"\nYears of Experience: "+this.yearsOfExperience+"\nSalary: "+this.salary);
    }

    raiseSalary(){
        this.salary *=1.5;
    }



}

class Manager extends Employee{
    static numberOfManagers;
    static increaseNumOfManagers(){
        this.numberOfManagers++;
    }
    department;
    constructor(name, email, age, address, yearsOfExperience,department){
        super(name,email,age,address,yearsOfExperience);
        this.department = department;
        this.salary = 1500;
        Manager.increaseNumOfManagers();
    }
    printEmployee(){
        console.log("Name: "+this.name+"\nEmail: "+this.email+"\nAge: "+this.age+"\nAddress: "+this.address+"\nYears of Experience: "+this.yearsOfExperience +"\nSalary: "+this.salary+ "\nDepartment: "+this.department);
    }
    raiseSalary(){
        this.salary *= 2; 
    }


}
let manager1 = new Manager("Firas","firas@gmail.com",41, "Compton", 20, "Communications");
let manager2 = new Manager("Moussa","moussa@gmail.com",31, "Huston", 10, "Sales");
let emp1 = new Employee("karim","karim@gmail.com",22, "Hazmieh", 1);
let emp2 = new Employee("patric","patric@gmail.com",24, "Hadat", 2);
let emp3 = new Employee("hassan","hassan@gmail.com",28, "Rouche", 5);

let company = [manager1, manager2, emp1, emp2, emp3];

company.forEach(ele => {
    if(ele instanceof Manager){
        ele.raiseSalary(); 
    }
    ele.printEmployee();
});


const user = {
    name: "",
    email: "",
    password: "",
    get name(){
        return this.name;
    },
    set name(name){
        this.name = name;
    } ,
    print(){
        console.log("Name: "+ this.name + "\nEmail: "+ this.email +"\nNationality: "+ this.nationality);
    }
}

Object.defineProperty(user, "password",{
    enumerable : false,
    writable : false,
    configurable : false
})

user.nationality = "Lebanese";
Object.keys(user);
delete user.nationality;

// let proto = Object.prototype(user);
// console.log(proto);

let ul = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", function () {
    let val = input.value;
    input.value = "";
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newButton = document.createElement("button");
    newLi.appendChild(newSpan);
    newLi.appendChild(newButton);
    newSpan.textContent = val;
    newButton.textContent = "Delete";
    ul.appendChild(newLi);
    newButton.addEventListener("click", function () {
        ul.removeChild(newLi);
    })
});