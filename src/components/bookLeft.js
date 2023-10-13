import React from "react";
import ShipImg from '../assets/thumb_ayam.jpg';
import PlayImg from '../assets/ic_play.png';

const BookLeft = () => {
    return (
        <div className="book_left_container" >
            <h1 className="book_text book_left_title">DONGENG MEJA MAKAN</h1>
            <h2 className="book_text book_left_content">EVERY DISH HAS A TALE TO TELL.</h2>
            <h2 className="book_text book_left_content">HERE ARE SOME OF OUR FAVOURITES.</h2>
            <img className="ship_img" src={ShipImg} alt='ship'/>
            <img className="play_icon" src={PlayImg} alt='play' />
            <h2 className="book_text book_left_content" style={{marginBottom: '20px'}}>AYAM GORENG EXPLOSION</h2>
            <p className="book_left_text">How did the Ayam Goreng McD<small>&trade;</small> come to be?</p>
            <p className="book_left_text">Could this be the story behind it?</p>
        </div>
    )
}

export default BookLeft;