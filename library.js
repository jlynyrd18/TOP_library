const myLibrary = [];

function Book() {
    //loops through the array and displays each book on the page perhaps card like in the admin dashboard
    const bookContainer = document.getElementById("book-container");
    bookContainer.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i];
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const bookInfo = document.createElement("p");
        bookInfo.textContent = `${book.title} by ${book.author}, ${book.pages} pages.`;

        const readStatus = document.createElement("p");
        readStatus.textContent = book.read ? "Read" : "Not Read";

        bookCard.appendChild(bookInfo);
        bookCard.appendChild(readStatus);
        bookContainer.appendChild(bookCard);
    }   
}

function addBookToLibrary(title, author, pages, read) {
    //take user's input and store the new book object into an array
    const book = {
        title: title,
        author: author,
        pages: pages,
        read: read
    };
    
    myLibrary.push(book);
}

addBookToLibrary("Rich Dad Poor Dad", "Robert Kiyosaki", 300, true);
Book();