import React from "react";
import IceCreamImg from '../assets/standout_sundae.jpg'
import { Button } from "react-bootstrap";
import '../style/desktop/iceCream.css';

const IceCream = () => {
    return (
        <div>
            <img className="ice_cream_img" src={IceCreamImg} alt='IceCreamImg' />
            <div className="iceCream_btn">
            <Button type="button" className="btn mcd-btn iceCream_btn" size='lg' style={{ fontWeight: 'bolder', margin: '5px', padding: '13px' }}>SEE MORE</Button>
            </div>
        </div>
    )
}

export default IceCream;