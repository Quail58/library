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