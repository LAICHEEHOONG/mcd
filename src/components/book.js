import React from "react";
import BookMcD from '../assets/book.jpg'
import BookLeft from "./bookLeft";
import BookRight from "./bookRight";


const Book = () => {
    return (
        <>
            <img className="book" src={BookMcD} alt='book-mcd' />
            <div>
                <div className="book-container">
                    <div >
                        <BookLeft />
                    </div>
                    <div>
                        <BookRight />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Book;