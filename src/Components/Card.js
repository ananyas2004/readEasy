import React from "react";
import { useState } from "react";
import Modal from "./Modal";
const Card=({book})=>{
    const[show,setShow]=useState(false);
    const[bookItem,setItem]= useState();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (item) => {
        setShow(true);
        setItem(item);
        setIsOpen(true);
      };
    return(
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount != undefined){
                        return(
                            <>
                            <div className="card" key={item.id} onClick={() => handleClick(item)}>
                                <img src={thumbnail} alt=""/>
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                            </>
                        );
                    }return null;
                })}
                <Modal show={isOpen} item={bookItem} onClose={() => setIsOpen(false)} />

  
                     
        </>
    );
};
export default Card;