const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        let readMessage;
        if (this.read === 'Read') {
            readMessage = 'read'
        } else {
            readMessage = 'not read yet'
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readMessage}`;
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'Unread');
const ofMiceAndMen = new Book('Of Mice and Men', 'John Steinbeck', 144, 'Read');
const animalFarm = new Book('Animal Farm', 'George Orwell', 176, 'Read');
const hamlet = new Book('Hamlet', 'William Shakespeare', 192, 'Unread');
const hitchhikerGuide = new Book("The Hitchhiker's Guide to the Galaxy", 'Douglas Adams', 208, 'Unread');

myLibrary.push(theHobbit);
myLibrary.push(ofMiceAndMen);
myLibrary.push(animalFarm);
myLibrary.push(hamlet);
myLibrary.push(hitchhikerGuide);

function displayLibrary(array) {
    const library = document.querySelector(".libraryContainer");

    library.replaceChildren();
    array.forEach(book => {
        const bookCover = document.createElement("div");
        const bookTitle = document.createElement("div");
        const bookAuthor = document.createElement("div");
        const bookPages = document.createElement("div");
        const bookRead = document.createElement("button");
        const bookRemove = document.createElement("button");
        const imgBin = document.createElement("img");

        bookCover.classList.toggle("book");
        bookCover.setAttribute('data-index', array.indexOf(book));

        bookTitle.classList.toggle("bookTitle");
        bookTitle.textContent = book.title;
        bookCover.appendChild(bookTitle);

        bookAuthor.classList.toggle("bookAuthor");
        bookAuthor.textContent = book.author;
        bookCover.appendChild(bookAuthor);

        bookPages.classList.toggle("bookPages");
        bookPages.textContent = `Pages: ${book.pages}`;
        bookCover.appendChild(bookPages);

        bookRead.classList.toggle("bookRead");
        bookRead.textContent = book.read;
        bookCover.appendChild(bookRead);

        bookRemove.classList.toggle("bookRemove");
        bookCover.appendChild(bookRemove);

        imgBin.src = 'images/bin.svg';
        bookRemove.appendChild(imgBin);

        library.appendChild(bookCover);

        bookRead.addEventListener('click', () => {
            console.log(`Read button ${array.indexOf(book)} has been clicked!`);
            readBook(array.indexOf(book), book.read);
        })

        bookRemove.addEventListener('click', () => {
            console.log(`Delete button ${array.indexOf(book)} has been clicked!`);
            removeBook(array.indexOf(book));
        })
    })
}

function addBookToLibrary(title, author, pages, read) {
    var newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayLibrary(myLibrary);

    dialog.close();
}

function readBook(index, read) {
    let newReadStatus;
    if (read === 'Unread') {
        newReadStatus = 'Read'
    } else {
        newReadStatus = 'Unread'
    };

    myLibrary[index].read = newReadStatus;

    displayLibrary(myLibrary);
}

function removeBook(index) {
    myLibrary.splice(index, 1);

    displayLibrary(myLibrary);
}

const newBook = document.querySelector('#new');
const closeDialog = document.querySelector('.closeDialog');
const dialog = document.querySelector('dialog');
const submitBook = document.querySelector('#submit');

newBook.addEventListener('click', () => {
    dialog.showModal();
})

submitBook.addEventListener('click', function (event) {
    event.preventDefault();
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var pages = document.querySelector('#pages').value;
    var read;
    if (document.querySelector('#read').checked) {
        read = 'Read'
    } else {
        read = 'Unread'
    };
    addBookToLibrary(title, author, pages, read);
})

closeDialog.addEventListener('click', () => {
    dialog.close();
})

displayLibrary(myLibrary);