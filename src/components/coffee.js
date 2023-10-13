import React from "react";
import CoffeeImg from '../assets/standout_latte.jpg'
import { Button } from "react-bootstrap";
import '../style/desktop/coffee.css'

const Coffee = () => {
    return (
        <div>
            <img className="coffee_img" src={CoffeeImg} alt='coffee' />
            <div className="coffee_btn">
            <Button type="button" className="btn mcd-btn" size='lg' style={{ fontWeight: 'bolder', margin: '5px', padding: '13px' }}>SEE MORE</Button>
            </div>
        </div>
    )
}

export default Coffee;