// import React ,{useState} from 'react';
// import './EducationalBooks.css';
// import Modal1 from './Modal1';
// import books from './Books';

// // { books, onBookClick }
// const EducationalBooks = () => {

//   const [selectedBook, setSelectedBook] = useState(null);
  
//   const handleBookClick = (book) => {
//     setSelectedBook({book}); // Update selectedBook after the book details are fetched (if applicable)
//   };
  
//   const handleCloseModal= () => setSelectedBook(null);
  
//   return(
//   <div className="educational-books">
//     {books.map((book) => (
//       <div key={book.id} className="book" onClick={() => handleBookClick(book)}>
//         <img src={book.imageUrl} alt={book.title} className="book-image" />
//         <h3>{book.title}</h3>
//         <p>{book.author}</p>
//       </div>
//     ))}
// {selectedBook && (
//         <Modal1 show={true} item={selectedBook} onClose={handleCloseModal} />
//       )}
//   </div>
// );
// };

// export default EducationalBooks;







// import React, { useState } from 'react';
// import './EducationalBooks.css';
// import Modal1 from './Modal1';
// import books from './Books';

// const EducationalBooks = () => {
//   const [selectedBook, setSelectedBook] = useState(null);

//   const handleBookClick = (book) => {
//     setSelectedBook(book);
    
//   };

//   const handleCloseModal = () => setSelectedBook(null);

//   return (
//     <div className="educational-books">
//       {books.map((book) => (
//         <div
//           key={book.id}
//           className="book"
//           onClick={() => handleBookClick(book)}
//         >
//           <a href={book.link} target="_blank" rel="noopener noreferrer"></a>
//           <img src={book.imageUrl} alt={book.title} className="book-image" />
//           <h3>{book.title}</h3>
//           <p>{book.author}</p>
//         </div>
//       ))}

//       {selectedBook && (
//         <Modal1
//           show={true}
//           item={selectedBook}
//           onClose={handleCloseModal}
//           // Pass the book link to the modal
//           // bookLink={selectedBook.link}
//         />
//       )}
//     </div>
//   );
// };

// export default EducationalBooks;















import React, { useState, useEffect } from 'react';
import './EducationalBooks.css';
import Modal1 from './Modal1';
import books from './Books';

const EducationalBooks = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    window.location.href = book.link;
  };

  const handleCloseModal= () => setSelectedBook(null);

  useEffect(() => {
    if (selectedBook === null) {
      // window.location.href = '/';
    }
  }, [selectedBook]);

  return(
    <div className="educational-books">
      {books.map((book) => (
        <div key={book.id} className="book" onClick={() => handleBookClick(book)}>
          <img src={book.imageUrl} alt={book.title} className="book-image" />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
      ))}
      {selectedBook && (
        <Modal1 show={true} item={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default EducationalBooks;