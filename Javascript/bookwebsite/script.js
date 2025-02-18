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


// // Sir's Code
// URL = "./books.json";

// async function fetchitems() {
//   const response = await fetch(URL);
//   const data = await response.json();
//   const books = data.books;

//   console.log(books);

//   const container = document.getElementById("items");

//   books.forEach((element) => {
//     console.log(element);
//     let item = document.createElement("div");
//     item.innerHTML = `
//             <div class="row border rounded shadow p-3 my-3"  >
//                 <div class="col-2">
//                   <img
//                     src="${element.image}"
//                     alt="${element.title}"
//                     class="object-fit-contain"
//                     width="100px"
//                   />
//                 </div>
//                 <div class="col-7 d-flex flex-column">
//                   <label for="title" class="fs-2 fw-bold">${element.title}</label>
//                   <label for="author" class="fs-5">${element.author}</label>
//                   <label for="price" class="fs-4 text-danger my-4">${element.price}</label>
//                 </div>
//                 <div class="col-3">
//                   <button type="button" class="btn btn-primary form-control my-3">
//                     Buy Now
//                   </button>
//                   <button type="button" class="btn btn-secondary form-control">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//     `;

//     container.appendChild(item)
//   });
// }

// fetchitems();