import React from 'react';

const handleBookClick = (book) => {
  // Navigate to a new page with the book details
  console.log(`Book details: ${book.title} by ${book.author}`);
};

export default handleBookClick;