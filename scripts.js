const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let readMessage;
        if (this.read) {
            readMessage = 'read'
        } else {
            readMessage = 'not read yet'
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`;
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
const ofMiceAndMen = new Book('Of Mice and Men', 'John Steinbeck', 144, true);
const animalFarm = new Book('Animal Farm', 'George Orwell', 176, true);
const hamlet = new Book('Hamlet', 'Shakespeare', 192, false);

myLibrary.push(theHobbit);
myLibrary.push(ofMiceAndMen);
myLibrary.push(animalFarm);
myLibrary.push(hamlet);

function displayLibrary(array) {
    const library = document.querySelector(".libraryContainer");

    library.replaceChildren();
    array.forEach(book => {
        const bookCover = document.createElement("div");
        const bookTitle = document.createElement("div");
        const bookAuthor = document.createElement("div");
        const bookPages = document.createElement("div");

        bookCover.classList.toggle("book");
        bookCover.setAttribute('data-index', array.indexOf(book));
        bookCover.textContent = `${array.indexOf(book)}`;

        bookTitle.classList.toggle("bookTitle");
        bookTitle.textContent = book.title;
        bookCover.appendChild(bookTitle);

        bookAuthor.classList.toggle("bookAuthor");
        bookAuthor.textContent = book.author;
        bookCover.appendChild(bookAuthor);

        bookPages.classList.toggle("bookPages");
        bookPages.textContent = book.pages;
        bookCover.appendChild(bookPages);

        library.appendChild(bookCover);
    })
}

function addBookToLibrary(title, author, pages, read) {
    var newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayLibrary(myLibrary);

    dialog.close();
}

displayLibrary(myLibrary);

const newBook = document.querySelector('#new');
const closeDialog = document.querySelector('.closeDialog');
const dialog = document.querySelector('dialog');
const submitBook = document.querySelector('#submit');

newBook.addEventListener('click', () => {
    dialog.showModal();
})

submitBook.addEventListener('click', function(event) {
    event.preventDefault();
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var pages = document.querySelector('#pages').value;
    var read = document.querySelector('#read').value;
    addBookToLibrary(title, author, pages, read);
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})