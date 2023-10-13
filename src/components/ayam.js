import React from "react";
import AyamImg from '../assets/standout_ayam_goreng.jpg'
import Sedapnya from '../assets/title_sedapnya.png'
import { Button } from "react-bootstrap";

const Ayam = () => {
    return (
        <div className="image-container">
            <img className="ayamImg" src={AyamImg} alt='Ayam' />
            <div className="ayam-goreng-right" style={{ textAlign: 'left' }}>
                <img className="Sedapnya_Title" src={Sedapnya} alt='Sedapnya_Title' />
                <h1 className="mcd-text-title">AYAM GORENG McD<span className="mcd-title-trade-mark">&trade;</span></h1>
                <div className="mcd-text">
                    <div>There's never been a tastier</div>
                    <div>time to be a Malaysian!</div>
                    <div>Everyone's favourite hot &</div>
                    <div>crispy <span className="inner-ayam-text" style={{fontWeight: 'bolder'}}>Ayam Goreng McD<small>&trade;</small></span></div>
                    <div>now comes with the perfect</div>
                    <div>side dish - <span className="inner-ayam-text" style={{fontWeight: 'bolder'}}>Coleslaw! </span>Enjoy</div>
                    <div>it now at McDonald's&reg;.</div>
                </div>

                <Button type="button" className="btn mcd-btn" size='lg' style={{fontWeight: 'bolder', margin: '5px', padding: '13px'}}>ORDER NOW</Button>
            </div>
        </div>
    )
}

export default Ayam;