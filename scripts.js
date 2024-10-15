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

function addBookToLibrary() {

}

// TEST 1 START
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
const ofMiceAndMen = new Book('Of Mice and Men', 'John Steinbeck', 144, true);
const animalFarm = new Book('Animal Farm', 'George Orwell', 176, true);
const hamlet = new Book('Hamlet', 'Shakespeare', 192, false)
console.log(theHobbit.info());

myLibrary.push(theHobbit);
myLibrary.push(ofMiceAndMen);
myLibrary.push(animalFarm);
myLibrary.push(hamlet);

// function displayLibrary() {
//     var table = document.querySelector("table");

//     myLibrary.forEach(value => {
//         var row = table.insertRow();
//         row.insertCell(0).innerHTML = value.title;
//         row.insertCell(1).innerHTML = value.author;
//         row.insertCell(2).innerHTML = value.pages;
//         row.insertCell(3).innerHTML = value.read;
//     });
// }

// displayLibrary();
// TEST 1 END

// TEST 2 START

function displayLibrary() {
    const library = document.querySelector(".libraryContainer");    

    myLibrary.forEach(value => {
        const div = document.createElement("div");
        div.classList.toggle("book");
        div.textContent = `${value.title}\n${value.author}\n${value.pages}`;
        library.appendChild(div);
    })
}

displayLibrary();
// TEST 2 END