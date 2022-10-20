

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
let dummyBook = new book("not read", "No Author", "No Title", 0);

function addBookToLibrary(book){
    myLibrary.push(book)
}

//adds book to page when ran
function displayBook(book){
    const newBook = document.createElement('div');
    newBook.setAttribute("class", "book");
    const title = document.createElement("div");
    title.innerHTML = '"' + book.title + '"';
    newBook.appendChild(title);
    const author = document.createElement("div");
    author.innerHTML =  book.author;
    newBook.appendChild(author);
    const pages = document.createElement('div');
    pages.innerHTML = "Pages: " + book.pages;
    newBook.appendChild(pages);
    const read = document.createElement("button");
    const readString = "changeRead(" + book.title.replace(/\s/g, "") + ")";
    read.setAttribute('onclick', readString)
    const bookId = "'" + book.title.replace(/\s/g, "") + "'";
    read.setAttribute("id", bookId)
    if (book.readStatus == "read"){
        read.setAttribute('class', "read")
        read.innerHTML = "Read";
        newBook.appendChild(read);
    } else {
        read.setAttribute('class', "notRead")
        read.innerHTML = "Not Read";
        newBook.appendChild(read);
    }
    let containerDiv = document.querySelector('.books')
    containerDiv.appendChild(newBook);
}

let myLibrary = [TheTwoTowers, AmericanGods, DonQuixote];

function loadBooks(array) {
    for (i = 0; i < array.length; i++){
        displayBook(array[i]);
    }
}

window.onload = loadBooks(myLibrary);



function changeRead(book){
    const bookId = "'" + book.title.replace(/\s/g, "") + "'";
    const readBtn = document.getElementById(bookId);
    if (book.readStatus == "read") {
        book.readStatus = "not read";
        readBtn.style.backgroundColor = "red";
        readBtn.innerHTML = "Not Read"
    } else {
        book.readStatus = "read";
        readBtn.style.backgroundColor = "green";
        readBtn.innerHTML = "Read";
    }
}

