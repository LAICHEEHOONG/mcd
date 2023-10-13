import React from "react";
import NasiImg from '../assets/standout_nasi_mcd.jpg'
import DinosaurImg from '../assets/title_dinosaur_mcflurry.png'
import McFlurryImg from '../assets/standout_mcflurry.jpg'
import { Button } from "react-bootstrap";
import '../style/desktop/mcFlurry.css'

const McFlurry = () => {
    return (
        <div className="image-container-flurry">
            <div className="ayam-goreng-right" style={{ textAlign: 'left' }}>
            <img className="dinoaur_img" src={DinosaurImg} alt='DinosaurImg' />
                <div className="mcd-text mcd_text_flurry_width">
                    <div>Milo sprinkles and crnchy Milo</div>
                    <div>chocolate malt pieces make the</div>
                    <div><span className="inner-flurry-text" style={{ fontWeight: 'bolder' }}>Dinosaur McFlurry<small>&trade;</small></span> a tasty</div>
                    <div>dessert! Or if you think bigger is better, the</div>
                    <div><span className="inner-flurry-text" style={{ fontWeight: 'bolder' }}>Dinosaur McFlurry<small>&trade;</small> Party</span> with additional</div>
                    <div>of crunchy chocolate chunks is the one for you!</div>
                </div>

                <Button type="button" className="btn mcd-btn" size='lg' style={{ fontWeight: 'bolder', margin: '5px', padding: '13px' }}>SEE MORE</Button>
            </div>
            <img className="mcflurry_img" src={McFlurryImg} alt='McFlurryImg' />
        </div>
    )
}

export default McFlurry;