

class book {
    constructor(read, author, title, pages, position) {
        this.readStatus = read;
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.position = position;
    }
}

let TheTwoTowers = new book("read", "Tolkien", "The Two Towers", 154, 0);
let AmericanGods = new book("read", "Gaiman", "American Gods", 465, 1);
let DonQuixote = new book("not read", "Cervantes", "Don Quixote", 1077, 2);
let BreakfastofChampions = new book("read", "Vonnegut", "Breakfast of Champions", 320, 3);

function addBookToLibrary(book){
    myLibrary.push(book)
}

//adds book to page when ran
function displayBook(book){
    const newBook = document.createElement('div');
    newBook.setAttribute('id', book.position)
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
    let read = document.createElement("button");
    let readString = "changeRead(" + book.position + ")";
    read.setAttribute('onclick', readString)
    const bookId = book.position;
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

let myLibrary = [TheTwoTowers, AmericanGods, DonQuixote, BreakfastofChampions];
let myLibraryReal = {TheTwoTowers, AmericanGods, DonQuixote, BreakfastofChampions};

function loadBooks(array) {
    for (i = 0; i < array.length; i++){
        displayBook(array[i]);
    }
}


// loads the array of books on website loading
window.onload = loadBooks(myLibrary);



function changeRead(bookPosition){
    const bookId = bookPosition;
    const readBtn = document.getElementById(bookId);
    if (myLibrary[bookPosition].readStatus == "read") {
        myLibrary[bookPosition].readStatus = "not read";
        readBtn.style.backgroundColor = "red";
        readBtn.innerHTML = "Not Read"
    } else {
        myLibrary[bookPosition].readStatus = "read";
        readBtn.style.backgroundColor = "green";
        readBtn.innerHTML = "Read";
    }    
}

//pulls up form to create new book
function addBookButton(){
    const bookForm = document.createElement('form');
    bookForm.setAttribute('class', 'bookForm');
    // creates heading for form
    const addBook = document.createElement('p');
    addBook.innerHTML = "Add Book";
    bookForm.appendChild(addBook);
    //creates title input
    const newTitle = document.createElement('div');    
    const newTitleLabel = document.createElement('label');
    newTitleLabel.setAttribute('for', 'newBookTitle');
    newTitleLabel.innerHTML = 'Book Title:';
    const newTitleInput = document.createElement('input');
    newTitleInput.setAttribute('id', 'newBookTitle');
    newTitleInput.setAttribute('type', 'text')
    newTitle.appendChild(newTitleLabel);
    newTitle.appendChild(newTitleInput);
    bookForm.appendChild(newTitle);
    // creates author input
    const newAuthor = document.createElement('div');
    const newAuthorLabel = document.createElement('label');
    newAuthorLabel.setAttribute('for', 'newBookAuthor');
    newAuthorLabel.innerHTML = 'Author Name:';
    const newAuthorInput = document.createElement('input');
    newAuthorInput.setAttribute('id', 'newBookAuthor');
    newAuthorInput.setAttribute('type','text');
    newAuthor.appendChild(newAuthorLabel);
    newAuthor.appendChild(newAuthorInput);
    bookForm.appendChild(newAuthor);
    // creates pages input
    const newPages = document.createElement('div');
    const newPagesLabel = document.createElement('label');
    newPagesLabel.setAttribute('for', 'newBookPages');
    newPagesLabel.innerHTML = 'Pages:';
    const newPagesInput = document.createElement('input');
    newPagesInput.setAttribute('id', 'newBookPages');
    newPagesInput.setAttribute('type','text')
    newPages.appendChild(newPagesLabel);
    newPages.appendChild(newPagesInput);
    bookForm.appendChild(newPages);
    //creates submit button
    const bookSubmit = document.createElement('input');
    bookSubmit.setAttribute('type', 'button');
    bookSubmit.setAttribute('value', 'Add');
    bookSubmit.setAttribute('id', 'addBook');
    bookForm.appendChild(bookSubmit);
    // submits new book to the array and displays it
    bookSubmit.onclick=function(){
        bookTitle = document.getElementById('newBookTitle').value;
        bookAuthor = document.getElementById('newBookAuthor').value;
        bookPages = document.getElementById('newBookPages').value;
        bookPosition = myLibrary.length;
        bookTitle = new book("read", bookAuthor, bookTitle, bookPages, bookPosition);
        displayBook(bookTitle);
        myLibrary.push(bookTitle);
        console.log(bookTitle);
        bookForm.remove();
    };
    // adds form to page
    const addForm = document.querySelector('.content');
    addForm.appendChild(bookForm);
}


