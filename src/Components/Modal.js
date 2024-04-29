import React from "react";



const Modal=({show,item,onClose})=>{
    if(!show){
        return null;
    }
    let thumbnail=
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
        <div className="overlay" onClick={onClose}>
            <div className="overlay-inner">
            <button className="close" onClick={() => {onClose(); console.log("Close button clicked");}} aria-label="Close"><i class="fas fa-times"></i></button>

                <div className="inner-box">
                    <img src={thumbnail} alt=""/>
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>
                            {item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span>
                        </h4><br/>
                        <a href ={item.volumeInfo.previewLink}><button>More</button></a>

                    </div>
                </div>
          
            </div>
            </div>
            <h4 className={`description ${show ? 'visible' : 'hidden'}`}>
            {item.volumeInfo.description}
            </h4>
        </>
    )
}
export default Modal;