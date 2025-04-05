// 1
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log("1", sum);

// 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log("2", menu);

// 3

let calculator = {
    read() {
        this.a = +prompt('Введите первое число:', 0);
        this.b = +prompt('Введите второе число:', 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 4

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log("4", extractCurrencyValue('$120'));

// 5
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

alert(names);

// 6
function getAverageAge(users) {
    let sum = users.reduce((total, user) => total + user.age, 0);
    return sum / users.length;
}

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };
let users1 = [vasya1, petya1, masha1];

console.log(getAverageAge(users1));