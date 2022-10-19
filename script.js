

class book {
    constructor(read, author, title, pages) {
        this.readStatus = read;
        this.author = author;
        this.title = title;
        this.pages = pages;
    }
}

let TheTwoTowers = new book("read", "Tolkien", "The Two Towers", 154);
let AmericanGods = new book(" read", "Gaiman", "American Gods", 465);
let DonQuixote = new book("not read", "Cervantes", "Don Quixote", 1077); 

function addBookToLibrary(book){
    myLibrary.push(book)
}

//adds book to page when ran
function displayBook(book){
    let newBook = document.createElement('div');
    newBook.setAttribute("id", "book");
    newBook.innerHTML = book.title;
    newBook.insertAdjacentHTML("beforeEnd", book.author);
    newBook.insertAdjacentHTML("beforeEnd", book.pages);
    let containerDiv = document.querySelector('.books')
    containerDiv.appendChild(newBook);
}

let readStatus = "Read Status: " + TheTwoTowers.readStatus;
let author = "Author: " + TheTwoTowers.author;
let title = "Title: " + TheTwoTowers.title;
let pages = "Pages: " + TheTwoTowers.pages

let readBox = document.createElement("input");
readBox.setAttribute("type", "checkbox")

document.getElementById("book").innerHTML = readStatus + "<br> <br>" + author + "<br> <br>" + title + "<br> <br>" + pages;
document.getElementById("book").appendChild(readBox);
document.getElementById("book2").innerHTML = readStatus + "<br> <br>" + author + "<br> <br>" + title + "<br> <br>" + pages;

let myLibrary = [TheTwoTowers, AmericanGods, DonQuixote];