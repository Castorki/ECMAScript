class Book {
    // title = 'Ken';
    // author = 'Nikola Tesla';
    // pages = 30;

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.displayInfo = this.displayInfo.bind(this);
    }

    displayInfo() {
        console.log('Название: ', this.title, 'Автор: ', this.author, 'Количество страниц: ', this.pages);
    }
}

// let book1 = new Book();

let book1 = new Book('Tut', 'Fel', 123);
console.log(book1.title);
console.log(book1.author);
console.log(book1.pages);

book1.displayInfo();

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.studentInfo = this.studentInfo.bind(this);
    }

    studentInfo() {
        console.log(`Name: ${this.name}, age: ${this.age}, grade: ${this.grade}`);
    }
}

let student1 = new Student('John', 15, 12);

console.log(student1.name);

console.log(student1.age);

console.log(student1.grade);
student1.studentInfo();