import React from "react";
import AyamImg from '../assets/standout_ayam_goreng.jpg'
import Sedapnya from '../assets/title_sedapnya.png'
import PieImg from '../assets/standout_pie.jpg';
import CornImg from '../assets/title_corn_pie.png'
import { Button } from "react-bootstrap";
import '../style/desktop/cornPie.css';

const CornPie = () => {
    return (
        <div className="corn_pie_container">
        
            <img className="PieImg" src={PieImg} alt='PieImg' />
            <div className="ayam-goreng-right" style={{ textAlign: 'left' }}>
                <img className="corn_pie_img" src={CornImg} alt='CornImg' />
                <div className="mcd-text pie_text">
                    <div>Craving a local treat? Try the</div>
                    <div>satisfyingly crispy <span className="inner-ayam-text" style={{fontWeight: 'bolder'}}>Corn Pie!</span></div>
                    <div>A delicious combination of a</div>
                    <div>crunchy pie shell, with a</div>
                    <div>familiar local taste.</div>
                </div>

                <Button type="button" className="btn mcd-btn pie_btn" size='lg' style={{fontWeight: 'bolder', margin: '5px', padding: '13px'}}>SEE MORE</Button>
            </div>
        </div>
    )
}

export default CornPie;