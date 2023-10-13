import React from "react";
import spoonImg from '../assets/standout_spoon.png';
import '../style/desktop/spoon.css'

const Spoon = () => {

    return (
        <div>
            <img className="spoon_img" src={spoonImg} alt='spoon' />
        </div>

    )
}

export default Spoon;
