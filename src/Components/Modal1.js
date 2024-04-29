// import React from "react";

// const Modal1 = ({ show, item, onClose }) => {
//   if (!show) {
//     return null;
//   }

//   let thumbnail = "";
//   if (item.volumeInfo.imageLinks) {
//     thumbnail =
//       item.volumeInfo.imageLinks.smallThumbnail && item.volumeInfo.imageLinks.smallThumbnail;
// //   }

// //   return (
// //     <>
// //       <div className="overlay" onClick={onClose}>
// //         <div className="overlay-inner">
// //           <button className="close" onClick={onClose} aria-label="Close">
// //             close<i class="fas fa-times"></i>
// //           </button>
// //           <div className="inner-box">
// //             {thumbnail && <img src={thumbnail} alt={item.title} className="bookimage" />}
// //             <div className="info">
// //               <h1>{item.volumeInfo.title}</h1>
// //               <h3>{item.volumeInfo.authors}</h3>
// //               <h4>
// //                 {item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span>
// //               </h4><br/>
// //               <a href ={item.volumeInfo.previewLink}><button>More</button></a>

// //             </div>
// //           </div>
        
// //         </div>
// //         </div>
// //         <h4 className={`description ${show ? 'visible' : 'invisible'}`}>
// //           {item.volumeInfo.description}
// //         </h4>
// //     </>
// //   );
// // };

// // export default Modal1;
// import React from "react";

// const Modal1 = ({ show, item, onClose }) => {
//   if (!show) {
//     return null;
//   }

//   let thumbnail = "";
//   if (item.volumeInfo.imageLinks) {
//     thumbnail = item.volumeInfo.imageLinks.smallThumbnail || "";
//   }

//   return (
//     <>
//       <div className="overlay" onClick={onClose}>
//         <div className="overlay-inner">
//           <button className="close" onClick={onClose} aria-label="Close">
//             close<i class="fas fa-times"></i>
//           </button>
//           <div className="inner-box">
//             {thumbnail && <img src={thumbnail} alt={item.title} className="bookimage" />}
//             <div className="info">
//               <h1>{item.volumeInfo.title}</h1>
//               <h3>{item.volumeInfo.authors}</h3>
//               <h4>
//                 {item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span>
//               </h4><br/>
//               <a href ={item.volumeInfo.previewLink}><button>More</button></a>

//             </div>
//           </div>
        
//         </div>
//         </div>
//         <h4 className={`description ${show ? 'visible' : 'invisible'}`}>
//           {item.volumeInfo.description}
//         </h4>
//     </>
//   );
// };

// export default Modal1;





import React from 'react';


const Modal1 = ({ show, item, onClose, bookLink }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <img src={item.imageUrl} alt={item.title} className="modal-image" />
        <h2 className="modal-title">{item.title}</h2>
        <p className="modal-author">{item.author}</p>
        <p className="modal-description">{item.description}</p>
        {/* Add the redirection logic inside the modal */}
        <a
          href={bookLink}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-link"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Modal1;