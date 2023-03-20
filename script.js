/* let massage;
massage = 'hello';
alert(massage);


const COLOR_RED = '#F00'
let color = COLOR_RED;
alert(color);


let admin, name;
name = 'John';
admin = name;
alert(admin);

alert(-1 / 0); */

/* let name = 'John';
alert(`Hello, ${name}`);
alert(`Hello, ${1+3/4}`);

let strOne = 'Make me free';
alert(strOne);

let a = 5, b = 6;
if (a >= b) {
    alert('a is greater then b');
} else {
    alert('b is greater then a');
}; */

/* alert (typeof true);
alert (typeof 10n);
alert (typeof Math);
alert (typeof alert); */

/* let age = 100;
alert(`You are ${age}`); */

/* let isBoss = confirm('are you BOSS???');
alert(isBoss); */

/* age = prompt('how old are you???', 100);
alert(`You are ${age}`); */

/* x = confirm('Are you 19???');
alert(x);
if (x) {
    alert('Are you sure???');
} else {
    alert('You are not 19');
} */

/* userName = prompt('What is your name????');
alert(`Your name is ${userName}`); */

/* let i = 0;
let name = 'Joe';
while (i < 15) {
    document.write('Happy Birthday<br>');
    i++;
};
document.write('Happy Birthday ' + name);

let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string
alert(value); */

/* alert( "6" / "2" );
alert(Number('     '));
document.write((Boolean('0')));
let name = prompt('Who are you???');
alert(name);
 */

/* let year = prompt('Enter year of EcmaScript 5 started:');
while (year != 2015) {
    if (year == 2015) {
        alert('You are right!!!');
    } else {
        alert('You are wrong!!! Try again!!!');
        year = prompt('Enter year of EcmaScript 5 started:'); 
        if (year == 2015) {
            alert('You are right!!!');
        }
    }
};
alert(4 ** (1/2)); */

/* alert('My ' + 'string ' + 1);

let a = 2;
alert(typeof(a));
let b = '12';
alert(typeof(b));
alert(a + b);
alert(typeof(a + b)); */

/* let a =true + false;
alert(typeof(a)); */
/* 
let a = Number(prompt("Первое число?", 1));
let b = Number(prompt("Второе число?", 2));

alert(a + b); */
/* let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message ); */
/* let age = prompt('How old are you?');
let accessAllowed = age >= 18? true : false;

alert(accessAllowed);

if (accessAllowed) {
    alert('Enabled');
} else {
    alert('disabled');
}
 */
/* let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
	alert('Верно!') : alert('Неправильно.'); */



/* let userPassword; */
/* let userLogin = prompt('Who are you???');
if (userLogin == 'admin') {
    alert('It is you)');
    let userPassword = prompt('Password:');
    if (userPassword == 'BOSS') {
        alert('Hello BOSS!');
    } else if (userPassword == null || userLogin =='') {
        alert('Disabled');
    } else {
        alert('Wrong password, go away!');
    }
} else if (userLogin == null || userLogin =='') {
    alert('disabled');
} else {
    alert('I dont know you!!!');
} */

/* let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"];

let key = "likes birds";

// то же самое, что и user["likes birds"] = true;
user[key] = true;

alert(key);
alert(user[key] */

/* let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
alert(bag.appleComputers); */

/* let user = {
    name: 'John',
    age: 30,
    "likes birds": true,
}; */

/* alert(user.name);
alert(user["likes birds"]);

let key = "rich man";
alert(key);
alert(user[key]);
user.key = 0;
alert(key);
alert(user["rich man"]); */

/* let key = prompt("What do you want to know???", "name");

alert(user[key]); */

/* let fruit = prompt("What kind of fruit do you want to buy???", "apple");
let how = prompt("how many???", 5);
fruit = fruit + ' you buy';
let bag = {
    [fruit]: Number([how]) + 5,
}
alert(bag.apple);
alert(bag[fruit]);
alert(fruit); */
/* function makeUser(name, age) {
    return {
        name,
        age,
    }
}

let user = makeUser("John", 30);
alert(user.age); */

/* let obj = {
    0: 'Test',
};

alert(obj[0]);
alert(obj["0"]); */

/* let obj = {};

obj["age"] = 30;
alert('age' in obj);
alert('name' in obj); */

/* let obj = {
    name: "John",
    age: 30,
    isAdmin: true,
}

for (let prop in obj) {
    alert(prop);
    alert(obj[prop]);
}; */

/* let codes  = {
    "49": "Германия",
    age: 30,
    "41": "Швeйцария",
    "44": "Великобритания",
    "1": "США",
}

for (let key in codes) {
    alert(key);
    alert(codes[key]);
} */

/* let user = {};
user.name = "John";
alert(user.name);
user["surname"] = "Smith";
alert(user.surname);
let name = "Pete";
alert(user.name);
delete user.name;
alert(user.name); */

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let salary in salaries) {
    sum += salaries[salary];
}
alert(sum);

let user = {name: "John"};
let permission1 = {canView: true};
let permission2 = {isAdmin: true, surname: "Sidel"};

(Object.assign(user, permission1,permission2));
alert(user.surname);
 */

/* let user = {
    name: "John",
    age: 30
}
let clone = {};
Object.assign(clone, user);
alert(clone.name); */

/* let user = {
    name: "John",
    age: 30
}

user.sayHi = function() {
    alert(this.name + ': ' + "hello, friend!");
} */

/* user.sayHi();
alert(typeof(user.sayHi));
alert(typeof(user.name)); */

/* for (let key in user) {
    alert(key);
    alert(user[key]);
} */
/* 
let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert( this.name ); // приведёт к ошибке
    }
  
  };
  
  
  let admin = user;
  user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.
  
  admin.sayHi(); // TypeError: Cannot read property 'name' of null
 */

/* let user = {name:  'John'};
let admin = {name: 'Bill'};

function sayHi() {
    alert(this.name);
} 

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f(); */

/* let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    div() {
        if (this.a % this.b ==0) {
            return this.a / this.b;
        } else {
            alert('Error');
        }
    },
    read() {
        this.a = +prompt('a???', '0');
        this.b = +prompt('b???', '0');
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
alert(calculator.div()); */

/* //Calculator new
let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep() {
        alert(this.step);
    }
};
console.log(ladder.step);
ladder.up();
console.log(ladder.step);
ladder.up();
console.log(ladder.step);
ladder.down();
console.log(ladder.step);
ladder.showStep(); */

/* function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name);
alert(user.isAdmin);

function User1(isAdmin) {
    this.isAdmin = isAdmin;
}



let user1 = new  User1(true);
alert(user1.name);
alert(user1.isAdmin); */

/* function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("How much to add?", "0");
    }
}

let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
alert(accumulator.value); */

/* let name = Symbol("name");

function Company(name, profit, expenses) {
[name] = name;
this.profit = profit - expenses;
}

function showProfit(Company) {
for (let key in Company) {
console.log(Company[key])
}
}

let apple = new Company("apple", 13000, 7000);
let samsung = new Company("samsung", 16270, 8300);

showProfit(apple);
showProfit(samsung); */

/* let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => alert(this.firstName);
      arrow();
    }
  };
  
  user.sayHi(); // Ilya */

// создаём функцию и сразу же вызываем её с помощью new
/* let user = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...другой код для создания пользователя
    // возможна любая сложная логика и инструкции
    // локальные переменные и так далее
  };
  alert(user.name);
  alert(user.isAdmin);
  alert(user);
  console.log(user); */

/*   function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert("My name is " + this.name);
    }
  };

  let John = new User("John");
  John.sayHi();
  console.log(John.sayHi); */

/*   function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Enter number", "0");
    };

  }

  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value); */

/*   let user = {
    adress: " Kharkov",
    Kharkov: 
  };
  alert(user.adress.adress.street); */
/* let user = {
    adress: {
        street: "Sadovaja",
    }
};
user = null;
console.log(user);
console.log(user?.adress);
console.log(user?.adress?.street); */

/* let key = "firstName";

let user1 = {
    firstName: "John",
};

let user2 = {};

alert(user1?.[key]);
alert(user2?.[key]);

delete user1?.[key];
user2.firstName = "Alex";


alert(user1?.[key]);
alert(user2?.[key]);
 */

/* let id = Symbol("id");
alert(id.toString()); */

/* let user = {
    name: "Вася"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] );
  console.log(user); */

/* let id = Symbol("id");
alert(id.toString());
alert(id.description); */

/* let user = {
    name: "Вася"
  };
  
  let id = Symbol("id");
  
  user[id] = 1;
  
  alert( user[id] );
  console.log(user); */

/* let id = Symbol("id");

let user = {
  name: "Вася",
  [id]: 123 // просто "id: 123" не сработает
};

alert(String(id));
alert(user[id]); */

/* let id = Symbol.for("nmae");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123
};
alert(id.toString());

console.table(user); */

/* function User(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
}

let userJohn = new User("John", 30, 1);
let userAnn = new User("Ann", 25, 2);
let userBob = new User("Bob", 23, 3);

console.table([userJohn, userBob, userAnn]); */

/* let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // демонстрация результатов преобразований:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500 */

/* let obj = {};

alert(obj);
console.log(obj);

let anotherObj = {};
anotherObj[obj] = 123;
console.log(anotherObj);
alert(anotherObj); */

/* let str = "Lida, hello!!!";

alert(str.toUpperCase());
alert(str.toLowerCase());

let num = 1.23456789;
alert(num.toFixed(4)); */

/* alert( -1e500 );
alert( isNaN(NaN) ); // true
alert( isNaN(" ") ); // true */

/* alert(Object.is(5, 5.1)); */

/* let guestList = `Guests:
 * John
 * Pete
 * Mary
 * John
* Pete
* Mary
* John
* Pete
* Mary
`;

alert(guestList);  */

/* let str = 'Name\n';

alert(str.repeat(13)); */


/* function ucFirst(str) {
    if (!str) return str;
    let result = '';
    for (let x = 0; x < str.length; x++) {
        
        if (x%2 == 0) {
            result += (str.at(x).toUpperCase());
        }
        else {
            result += (str.at(x).toLowerCase());
        }
        
    }
    return result;
};

alert(ucFirst('Armagedon is here!!!!')); */



/* let a = '';
alert(a);
let b = 'a';
alert(a+=b);
let c = 'b';
alert(a+=c); */

/* function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") ); */

/* function truncate(str, maxlength) {
    if (str.length > maxlength) return alert(str.slice(0, maxlength - 1) + '...');
    else alert(str);
};

truncate('aaaaaa',2); */

/* function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  };
 */
//

/* function extraCurrentlyValue(str) {
    return +str.slice(1);
}

alert(extraCurrentlyValue('$120'));
alert(typeof(extraCurrentlyValue('$120'))); */

/* let arr = [];
console.log(arr.length);
arr[0] = 1;
arr[1] = 2;
arr[3] = 4;
console.log(arr.length);
console.log(arr[2]);
console.log(arr[arr.length - 1]); */

/* let arr = [1, 2, 3]; */

/* alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
alert(typeof(arr));
alert(typeof(arr[1])); */

/* arr.push(5);
console.log(arr[3]);
console.log(arr[2]);
console.log(arr.pop());
console.log(arr[3]);
console.log(arr[2]);

for (let num of arr) {
    alert(num);
} */

/* console.log(arr);
console.log(arr.length);
arr.length = 2;
console.log(arr);
console.log(arr.length);
arr.length = 0;
console.log(arr);
console.log(arr.length);
alert(arr);
alert(arr.length); */
/* 
let arr = new Array(1,5);
alert(arr);
alert(arr.length); */

/* let arr = [1,2,3];

console.log(typeof(arr)); */
/* 
let arr2 =arr;
alert(arr==arr2);
alert(arr===arr2); */

/* let styles = ['Jaz', 'Bluz'];

styles.push('Pock-n-Roll');
 */

/* function sumInput() {
    let num = [];
    while(true) {
        let value = prompt('Enter integer', 0);
        if (value === "" || value === null || !isFinite(value)) break;
        num.push(+value);
    } 


    let sum = 0;
    for (let n of num) {
        sum +=n;
    }
    return sum;
}

sumInput(); */

/* let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 3);
  alert(users.find(item => item.id == 3));
  alert(user.name); // Вася */

/*   let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  // возвращает массив, состоящий из двух первых пользователей
  let someUsers = users.filter(item => item.id <= 3);
  
  alert(someUsers.length); // 2

  alert(someUsers[0]);
  alert(someUsers[1].name);
  alert(someUsers[2].id);
  someUsers.reverse();
  alert(someUsers.length); // 2
  alert(someUsers[0]);
  alert(someUsers[1].name);
  alert(someUsers[2].id); */

/* function camelize(str) {
    return str
                .split('-')
                .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
                .join('');
}

alert(camelize('we-want-to-IT'));

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let filtered =filterRange(arr, 1, 4);

alert(filtered);
alert(arr); */
/* 
function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

calc.addMethod('*', (a,b) => a * b);

alert( calc.calculate("3 * 7") ); */
/* function sortByAge(arr) {
    return arr.sort((a,b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя */

/* let arr = [1, 2, 3];

function shufle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

alert(shufle(arr));
alert(arr); */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0)/users.length;
}

alert(getAverageAge(arr)); */

/* let str = 'I want you';
for (let char of str) {
    alert(char);
} */

/* console.log(sum(10, 12));
function sum(a,b) {
    let total = 0,
        count = a;
    while (count<=b) {
        total += count;
        count++
    }
    return total;
} */

/* let symbol =prompt('Enter symbol', '#');
let howMuch = +prompt('Enter how much lines you want', "0");
for (let line = symbol; line.length < 8; line += symbol) {
    console.log(line);
} */

/* function factorial(n) {
    if (n == 0)
        return 1;
    else 
        return factorial(n - 1) * n;
}

alert(factorial(6)); */

/* for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  } */



/*   let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
alert(board); */

/* function firstNonConsecutive(arr) {
    for (let i = 1; i<arr.length; i++) {
      if (arr[i] - arr[i-1] !== 1)
        return arr[i];
    }
    return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
console.log(firstNonConsecutive([1,2,3,4,5,6,7,8])); */

/* let yourName;
do {
    yourName = prompt('Who are you???');

} while (!yourName);
console.log(yourName); */

/* switch (prompt('What weather??')) {
    case "sunny":
        console.log(1);
        
    case "obl":
        console.log(2);
        break;

    default:
        break;
}
 */

/* function min(a, b) {
    return a>b ? b : a;
}

console.log(min(5,6));
console.log(min(6,6));
console.log(min(6,5)); */
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }

  console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

/* function countBs(str, char) {
    let count =0;
    for (let ch of str) {
        if (ch === char) count++;
    }
    return count;
}

console.log(countBs('AAABBBAAA', 'A'));
console.log(countBs('AAABBBAAA', 'B'));
console.log(countBs('AAABBBAAA', 'a')); */

/* function highAndLow(numbers){
    let arr = numbers.split(' ');
    let max = +arr[0];
    let min = +arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i]) > max) {
        max = arr[i]
      }
      if (Number(arr[i]) < min) {
        min = arr[i]
      }
    }
    return max + ' ' + min;
}

/* console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5')); 
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')); */

/* function DNAtoRNA(dna) {
    let arr = dna.split('');
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'T') {
        arr[i] = 'U';
      }
    }
    return arr.join('');
  }

  console.log(DNAtoRNA('TTTT'));
  console.log(DNAtoRNA('GCAT'));
  console.log(DNAtoRNA('GAAACCCCAAA'));

  function DNAtoRNA1(dna) {
    return dna.split('').map(a => a === 'T' ? 'U' : a).join(''); 
  }

  console.log(DNAtoRNA1('TTTT'));
  console.log(DNAtoRNA1('GCAT'));
  console.log(DNAtoRNA1('GAAACCCCAAA'));
   */

/*   function SeriesSum(n)
{
  let res = 0;
  for (let i = 1, j = 1; i <= n; i++, j+=3) {
    res += 1/j;
  }
  return res.toFixed(2).toString();
}

console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(5)); */


/* console.log(Math.PI.toString());
console.log(typeof(true.toString()));

console.log(typeof(1)); */
/* function toStr(n) {
    if (Array.isArray(n)) {
      return `[${n}]`;
    }
    return n.toString();
  }

  console.log(toStr(2));
  console.log(toStr(3.14));
  console.log(toStr([]));
  console.log(toStr([1,2,3,Math.PI])); */

/* function filterList(arr) {
    return arr.filter(v => Number.isInteger(v));
}

console.log(filterList([['a'],1,2,3,4,[5],'b','f']));
 */

/* let arr = ['Sasha', 'Sidelnikov'];

console.log(arr[0]);
console.log(arr[0][0]);

for (let i = 0; i< arr.length; i++) {
    
    for (let j = 0; j< arr[i].length; j++) {
        let ohNo = arr[i][j];
    }
} */

/* let todolist = [];

function remember(task) {
    todolist.push(task);
}

function getTask() {
    return todolist.shift();
}

function rememberUrgently(task) {
    todolist.unshift(task);
}

remember('go to work');
console.log(todolist);

remember('do sport');
console.log(todolist);

rememberUrgently('wake up');
console.log(todolist);

console.log(getTask());
console.log(todolist); */

/* console.log('5'.padStart(3,'0').padEnd(6,'x')); */


/* function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  }
  
  console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
  */ 

/* function sortArray(array) {
    let arr = array.filter((a) => a % 2 !== 0).sort((a,b) => a - b);
    for (let i = 0, k = 0; i<array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i] = arr[k];
            k++;
        }
    }
    return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
console.log(sortArray([5, 3, 1, 8, 0]));
console.log(sortArray([])); */

/* function arrayDiff(a, b) {
    if (a.length === 0) return b;
    let res =[];
    for (let i = 0; i<b.length; i++) {
        
        for (let k = 0; k < a.length; k++) {

            if (a[k] === b[i]) a[k] = 'x';
        }
    }
    console.log(a);
    for (let j = 0; j<a.length; j++){
        if (Number(a[j]) || a[j] == 0) res.push(a[j]);
    }
    return res;
}

console.log(arrayDiff([-13,-14,0,18,-12,-17,12], [-13,-14])); */
/* console.log(arrayDiff([1,2,2], [1]));
console.log(arrayDiff([1,2,2], [2]));
console.log(arrayDiff([1,2,2], []));
console.log(arrayDiff([1,2,3], [2,3]));
console.log(arrayDiff([], [2,3])); */

/* console.log([+0]);
console.log(Math.sqrt(0) === 0);
 */

/* let n = 4;
console.log(Math.sqrt(n));
console.log(n.isInteger); */

/* function findShort(s){
    let min = 10000;
    let res = s.split(' ').filter(a => a.length < min ? min = a.length : a);
     return min;
  }

console.log(findShort('go to school i')); */

/* function isIsogram(str){
   let strLow = str.toLowerCase();
   let count = 0;
   for (let i = 0; i< strLow.length; i++) {
        for (let k = 0; k< strLow.length; k++){
            if (strLow.includes(strLow[k])) count++;
            if (count > 1) return false;
            count = 0;
        }
        
   }
   return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('Isogram'));
console.log(isIsogram('Abaaaa')); */
/* 
function solution(string) {
    let check = 'ABCDEFGHIJKLMNOPQRSTUWVXYZ';
    let arr = string.split('');
    res = [];
    for (let i = 0; i < arr.length; i++) {
        if (!check.includes(arr[i])) res.push(arr[i]);
        else { 
        res.push(' '); 
        res.push(arr[i]);
        }
    }
    return res.join('');
}

console.log(solution('camelCaseTest')); */


/* let final = [];
for (let i = a; i < b; i++) {
let res = a.toString().split('').map(Number).reduce((ac,a,i) => ac += Math.pow(a,i + 1), 0);


if (a === res) final.push(res);
}
return final;
 */

/* function high(x){
    let arr = x.split(' ').map(a => a.split('').reduce((ac,a) => ac + a.charCodeAt()- 96, 0));
    let max = 0;
    let res;
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            res = i;
        }
    }
    console.log(max);
    return x.split(' ')[res];
}

console.log(high('man i need a taxi up to ubud'));
 */

/* function nbDig(n, d) {
    return new Array(n+1).fill(1).map((a,i) =>a = i*i).filter(a => String(a).includes(String(d))).map(a => String(a).split('').reduce((ac,a) => ac + a.includes(String(d)),0)).reduce((ac,a) => ac+a,0);
}

console.log(nbDig(25,1));
console.log(nbDig(5750,0));
 */

/* console.log('a'.charCodeAt());
console.log('z'.charCodeAt()); */

/* function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };

  console.log(sortByLength(["Beg", "Life", "I", "To"])); */

///////// вывод ромба////////////////////////////////////////////
/*   function diamond (n) {
    if (n <= 0 || n % 2 === 0) return null
    str = ''
    for (let i = 0; i < n; i++) { 
      let len = Math.abs((n-2*i-1)/2)
      str += ' '.repeat(len)
      str += '*'.repeat(n-2*len)
      str += '\n'
    }
    return str
  }

  console.log(diamond(33)); */
  ///////////////////////////////////////////////////////////////

 /*  var summation = function (num) {
    return new Array(num).fill(0).map((a, i) => ++i).reduce((ac,a) => a + ac, 0);
  }

  console.log(summation(8)); */

/*   function titleCase(title, minorWords) {
   let res = title.split(' ').map((a) => a[0].toUpperCase()+a.slice(1).toLowerCase());
    let check = minorWords.split(' ').map((a) => a[0].toUpperCase()+a.slice(1).toLowerCase());
    for (let i = 1; i < res.length; i++) {
        for (let k = 0; k < check.length; k++) {
            if (res[i] == check[k]) res[i] = res[i].split('').map((a) => a.toLowerCase()).join('');
        }
    }
    return res.join(' ');
  }

  console.log(titleCase('a clash of KINGS', 'a an the of')); */


/* console.log('A'.charCodeAt());
console.log('Z'.charCodeAt());
console.log('a'.charCodeAt('G'));
console.log('z'.charCodeAt('G')); */

/* function rot13(message){
    return message.split('').map(function(a){
        if ((a.charCodeAt()>= 97 && a.charCodeAt()<= 109) || (a.charCodeAt()>=65 && a.charCodeAt()<=77)) return String.fromCodePoint(a.charCodeAt() +13);
        if ((a.charCodeAt()>= 110 && a.charCodeAt()<= 122) || (a.charCodeAt()>=78 && a.charCodeAt()<=90)) return String.fromCodePoint(a.charCodeAt() -13);
        else return a;
    })
    .join('');
  }

console.log(rot13('test'));
console.log(rot13('TeSt'));
console.log(rot13('1234'));
console.log(rot13('1234test>>>'));


console.log(Boolean('n')); */

/* var capitals = function (word) {
    let arr = [];
	let res = word.split('');
    for (let i = 0; i < res.length; i++) {
        if (res[i].charCodeAt() >= 65 && res[i].charCodeAt() <= 90) arr.push(i);
    }
    return arr;

};
console.log(capitals('CodEWaRs')); */

/* function hexToDec(hexString){
    return parseInt(hexString, 16);
  }

  console.log(hexToDec('1'));
  console.log(hexToDec('a'));
  console.log(hexToDec('10'));
  console.log(hexToDec('FF')); */

 /*  function reverseLetter(str) {
    return str.split('').filter(a => a.charCodeAt()>=97 && a.charCodeAt() <=122).reverse().join('');
    
    
  }

  console.log(reverseLetter('ultr53o?n')); */

/*   function gimme (triplet) {
    let arr1 = [];
    for (let ar of triplet) {
        arr1.push(ar);
    }

    let arr = arr1.sort((a,b) => a-b);
    console.log(arr,triplet);
    for (let i = 0; i < arr.length; i++) {
        console.log(triplet[i]);
      if (arr[1] === triplet[i]) {
       
        return i;
      }
    }
  }
  console.log(gimme([1,2,3]));
  console.log(gimme([1.4,2.1,3.2]));
  console.log(gimme([6,32,-31])); */

/*   function removeSmallest(numbers) {
    if (numbers.length === 0) return [];
    let min = 10000;
    for (let i = 0; i< numbers.length; i++) {
      if (numbers[i] < min) min = numbers[i];
    }
    let a = numbers.slice(0,numbers.indexOf(min));
    let b = numbers.slice(numbers.indexOf(min)+1);
    
    return a.concat(b);
  }

  console.log(removeSmallest([1,2,3,4,5]));
  console.log(removeSmallest([2,2,1,2,1]));
  console.log(removeSmallest([129,133,156,280])); */

/*   function multiTable(number) {
    let res = ``;
    for (let i = 1; i <= 10; i++) {
      res += `${i} * ${number} = ${i*number}\n`;
    }
    return res.slice(0,-1);
  }

  console.log(multiTable(5));
  console.log(multiTable(1)); */

////////////////////////////////////////////////////////////////////////////////

/* let months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    Jule: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
}
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let number = +enteredCode === +correctCode;
    let month = months[currentDate.split(',')[0].split(' ')[0]] <= months[expirationDate.split(',')[0].split(' ')[0]];
    let day = +currentDate.split(',')[0].split(' ')[1] <= +expirationDate.split(',')[0].split(' ')[1];
    let year = +currentDate.split(',')[1] <= +expirationDate.split(',')[1];

    if (!number) return false;
        if (!year) return false;
            if (!month) return false;
                if (months[currentDate.split(',')[0].split(' ')[0]] == months[expirationDate.split(',')[0].split(' ')[0]]) {
                    if (!day) return false;
                }
    return true;
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); */

///////////////////////////////////////////////////////////////////////////////////

/* function disemvowel(str) {
    return str.split('').filter((a) => !('euioaEUIOA'.includes(a))).join('');
}

  console.log(disemvowel("This website is for losers LOL!")); */

///////////////////////////////////////////////////////////////////////////////////

/* function incrementString (strng) {
    let numberLength = length(strng);
    console.log(numberLength);
    if (numberLength == 0) return strng + 1;
    let numberNew = String(Number(strng.slice(-numberLength)) + 1).padStart(numberLength, '0');
    return strng.slice(0, -numberLength) + numberNew;   
}

function length(str) {
    let numberLength = str.split('').reverse();
    let count = 0, i = 0;
    while (!(isNaN(numberLength[i]))) {
        count++;
        i++;
    }
    return count;
}

console.log(incrementString('foobar000'));
console.log(incrementString("foo"));
console.log(incrementString("fo99obar99")); */

///////////////////////////////////////////////////////////////////////////////////

/* function distinct(a) {
    return a.filter((item,ind) => a.indexOf(item) == ind);
}

console.log(distinct([1,1,2])); */

///////////////////////////////////////////////////////////////////////////////////

/* function twoSort(s) {
    return s.sort()[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); */

///////////////////////////////////////////////////////////////////////////////////


