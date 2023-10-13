import React from "react";
import NasiImg from '../assets/standout_nasi_mcd.jpg'
import { Button } from "react-bootstrap";

const NasiMcd = () => {
    return (
        <div className="image-container-nasi">
            <div className="ayam-goreng-right" style={{ textAlign: 'left' }}>
                {/* <img className="Sedapnya_Title" src={Sedapnya} alt='Sedapnya_Title' /> */}
                <h1 className="nasi_mcd_title">Nasi McD<span className="nasi_mcd_title_trade">&trade;</span></h1>
                <div className="mcd-text">
                    <div>Malaysians love their rice and we</div>
                    <div>know you'll love <span className="inner-ayam-text" style={{ fontWeight: 'bolder' }}>Nasi McD<small>&trade;</small>!</span></div>
                    <div>Served with a fried egg, lettuce</div>
                    <div>and the all-time favourite, Ayam</div>
                    <div>Goreng McD<small>&trade;</small> It's simply</div>
                    <div>irresistible so head on over to</div>
                    <div>McDonald's&reg; to try one today!</div>
               
                </div>

                <Button type="button" className="btn mcd-btn" size='lg' style={{ fontWeight: 'bolder', margin: '5px', padding: '13px' }}>ORDER NOW</Button>
            </div>
            <img className="ayamImg" src={NasiImg} alt='nasi-img' />
        </div>
    )
}

export default NasiMcd;