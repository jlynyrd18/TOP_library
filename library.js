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
        bookInfo.textContent = `${book.title} by ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `${book.pages} pages.`

        const readStatus = document.createElement("input");
        readStatus.type = "checkbox";
        readStatus.checked = book.read;
        readStatus.classList.add("checkbox-input");
        readStatus.addEventListener("change", () => {
            book.read = readStatus.checked;
            if (readStatus.checked) {
                bookCard.classList.remove("not-read");
                bookCard.classList.add("read");
            }
            else {
                bookCard.classList.remove("read");
                bookCard.classList.add("not-read");
            }
            
        })
        const readStatusLabel = document.createElement("p");
        readStatusLabel.textContent = "click to mark as read";
        readStatusLabel.classList.add("read-label");
        
        const deleteBook = document.createElement("button");
        deleteBook.textContent = "Delete";
        deleteBook.addEventListener("click", () => {
            removeBook(i);
        });


        bookCard.appendChild(bookInfo);
        bookCard.appendChild(pages);
        bookCard.appendChild(readStatus);
        bookCard.appendChild(readStatusLabel);
        bookCard.appendChild(deleteBook);

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

// Reference the button and form elements
const newBookButton = document.getElementById("addBook");
const newBookForm = document.getElementById("new-book-form");

// Show the form when the button is clicked
newBookButton.addEventListener("click", () => {
    newBookForm.style.display = "block";
});

// Handle form submission
newBookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    Book(); // Refresh the book display

    // Reset form fields and hide the form
    newBookForm.reset();
    newBookForm.style.display = "none";

    const lastBookCard = document.querySelector(".book-card:last-child");
    if(read) {
        lastBookCard.classList.add("read");
    }else{
        lastBookCard.classList.add("not-read");
    }
});

// ... (other parts of your code)


addBookToLibrary("Rich Dad Poor Dad", "Robert Kiyosaki", 300, true);
addBookToLibrary("Harry Potter and the Sorcerer's stone", "J.K. Rowling", 400, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 300, false);
Book();

function removeBook(index) {
    myLibrary.splice(index, 1);
    Book(); //Refresh the book display
}