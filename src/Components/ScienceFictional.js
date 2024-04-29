import React, { useState , useEffect} from "react";
import './ScienceFictional.css';
import Modal1 from "./Modal1";
import Sciencebooks from "./Science_books";

const ScienceFictional = () => {
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

    <div className="ScienceFictional">
      {Sciencebooks.map((book) => (
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
}
export default ScienceFictional;