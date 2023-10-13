import React from "react";
import blackMan from '../assets/thumb_nasidren.jpg'
import PlayImg from '../assets/ic_play.png';
import DinoImg from '../assets/thumb_dino.jpg';
import PuteriImg from '../assets/thumb_puteri.jpg';

const BookRight = () => {
    return (
        <div className="book_right">

            <div className="book_right_container">
                <div className="book_right_img_text_container">
                    <div className="container_play_center">
                        <img className="black_man_img" src={blackMan} alt="black_man" />
                        <img className="play_icon_center" src={PlayImg} alt='playIcon'></img>
                    </div>
                    <div className="book_text_right_container" style={{ textAlign: 'left', padding: '20px' }}>
                        <h2 className="book_text book_right_title">NASINDREN VS AH DEE</h2>
                        <p className="book_right_text">A fight between two people results in a delicious dish? Sounds like a story worth listening to!</p>
                    </div>
                </div>
            </div>



            <div className="book_right_container_2">
                <div className="container_play_center coming_soon_center" >
                    <img className="black_man_img" src={DinoImg} alt="Dino" />
                    <div className="overlay"></div>
                    <div className="coming_soon">COMING SOON!</div>
                </div>
                <div className="book_text_right_container" style={{ textAlign: 'left', paddingLeft: '20px', paddingRight: '20px' }} >
                    <h2 className="book_text book_right_title">DINO PUTAR DINO</h2>
                    <p className="book_right_text">Kampung vs dinosaur. Atasty showdown that leaves you with a sweet smile.</p>
                </div>
            </div>

            <div className="book_right_container_2 puteri_top" style={{ marginTop: '30px' }}>
                <div className="container_play_center coming_soon_center" >
                    <img className="black_man_img" src={PuteriImg} alt="puteri" />
                    <div className="overlay"></div>
                    <div className="coming_soon" style={{ marginTop: '-20px' }}>COMING SOON!</div>
                </div>
                <div className="book_text_right_container" style={{ textAlign: 'left', paddingLeft: '20px', paddingRight: '20px' }} >
                    <h2 className="book_text book_right_title">PUTERI'S GEMILANG LOVE STORY</h2>
                    <p className="book_right_text">A story of a princess and her hero that saves the day with a tasty delight. Sounds legit.</p>
                </div>
            </div>



        </div>

    )
}

export default BookRight;