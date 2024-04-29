// import React ,{useState} from "react";
// import books from "./Books"; // assuming the books array is exported from a separate file
// import Modal from "./Modal";


// const BookCard = ({ book, handleBookClick }) => (
//   <div className="book-card" onClick={() => handleBookClick(book.id)}>
//     <img src={book.imageUrl} alt={book.title} />
//     <h2>{book.title}</h2>
//     <p>{book.author}</p>
//     <p>{book.description}</p>
//   </div>
// );

// const BookList = () => {
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleBookClick = (bookId) => {
//     const book = books.find((book) => book.id === bookId);
//     setSelectedBook(book);
//     setShowModal(true);
//   };

//   return (
//     <div className="book-list">
//       {books.map((book) => (
//         <BookCard 
//         key={book.id} 
//         book={book} 
//         handleBookClick={() => handleBookClick(book.id)} />
//       ))}
//       <Modal show={showModal} item={selectedBook} onClose={() => setShowModal(false)} />
//     </div>
//   );
// };

// export default BookList;
import { useState, useEffect } from 'react';

function BookCard({ book }) {
  const [imageLinks, setImageLinks] = useState(null);

  useEffect(() => {
    setImageLinks(book.imageLinks);
  }, [book]);

  return (
    <div>
      {imageLinks ? (
        <img src={imageLinks.thumbnail} alt={book.title} />
      ) : (
        <div>Loading...</div>
      )}
      <h2>{book.title}</h2>
      {/* render other book properties here */}
    </div>
  );
}

export default BookCard;