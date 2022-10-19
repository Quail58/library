let myLibrary = [];

class book {
    constructor(read, author, title, pages) {
        this.readStatus = read;
        this.author = author;
        this.title = title;
        this.pages = pages;
    }
}

let TheTwoTowers = new book("read", "Tolkien", "The Two Towers", 154);
let AmericanGods = new book("read", "Gaiman", "American Gods", 465);
let DonQuixote = new book("not read", "Cervantes", "Don Quixote", 1077);

function addBookToLibrary(book){
    myLibrary.push(book)
}

// function displayBook(){
//     let display = ""
//     for (let x in book) {
//         display += book[x]
//     }
// }

let readStatus = "Read Status: " + TheTwoTowers.readStatus;
let author = "Author: " + TheTwoTowers.author;
let title = "Title: " + TheTwoTowers.title;
let pages = "Pages: " + TheTwoTowers.pages



document.getElementById("book").innerHTML = readStatus + "<br> <br>" + author + "<br> <br>" + title + "<br> <br>" + pages;
