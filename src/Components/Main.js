import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import {scroller} from 'react-scroll';
import Navbar from "./Navbar";


const Main=()=> {
   const [search,setSearch]=useState("");
   const[bookData,setData]=useState([]);
   const searchBook = (evt)=>{
    if(evt.key==="Enter"){
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCcCNPMOaOUOnkiklsdxANBcpdFeP5kxv4'+'&maxResults=10')
        .then(res=>{setData(res.data.items);
        
        scroller.scrollTo('container',{duration: 500,
        delay: 0,
    smooth: 'easeInOutQuart'});
    })
        .catch(err=>console.log(err))
    }
   }
    return(
        <>
        <div className="header">
            <div className="row1">
                </div>
                <div className="row2">
                    <h2> Curate Your Next Read </h2>
                    <div className="search">
                        <input type="text" placeholder="Pop in the Book's Name "
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}
                        />
                            <button><i className="fas fa-search"></i></button>
                            </div>
                    </div>
                    <div className="column">
                    <img src="https://img.artguru-cdn.com/image/aigc/11baf1d28d388a97242e834630cf4e14_682_512.webp" alt=""/>
                    <img src="https://img.artguru-cdn.com/image/aigc/11baf1d28d388a97242e834630cf4e14_682_512.webp" alt=""/>
                    <img src="https://img.artguru-cdn.com/image/aigc/11baf1d28d388a97242e834630cf4e14_682_512.webp" alt=""/>
                    <img src="https://img.artguru-cdn.com/image/aigc/11baf1d28d388a97242e834630cf4e14_682_512.webp" alt=""/>
                    <img src="https://img.artguru-cdn.com/image/aigc/11baf1d28d388a97242e834630cf4e14_682_512.webp" alt=""/>
                    </div>
                </div>
            
            <div className="container">
            <h6 className="positioned">Results » » »</h6>
                {
                    <>
                    
                     <Card book={bookData}/>
                     </>
                }
               
               
            </div>
            
        </>
        
    )
}
export default Main;