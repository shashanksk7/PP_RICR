// Function to load books
function loadBooks() {
    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const booksContainer = document.getElementById('books-container');
            const bookTemplate = document.getElementById('book-template');
            
            // Clear existing placeholder
            booksContainer.innerHTML = '';
            
            data.books.forEach(book => {
                const bookCard = bookTemplate.content.cloneNode(true);
                bookCard.querySelector('.card-img-top').src = book.image;
                bookCard.querySelector('.card-title').textContent = book.title;
                bookCard.querySelector('.author').textContent = `By ${book.author}`;
                bookCard.querySelector('.description').textContent = book.description;
                bookCard.querySelector('.price').textContent = book.price;
                bookCard.querySelector('.pages').textContent = `${book.pages} Pages`;
                booksContainer.appendChild(bookCard);
            });
            
            // Show books section
            document.getElementById('featured-books').classList.remove('d-none');
        })
        .catch(error => console.error('Error loading books:', error));
}

// Add event listener to browse button
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('browse-btn').addEventListener('click', loadBooks);
});