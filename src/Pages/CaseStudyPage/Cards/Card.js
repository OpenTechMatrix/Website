import React from 'react';
import "./Card.css";

const Card = ({ img, header, paragraph, pdfUrl  }) => {


    return (
        
        <div className="main_card">
            <div className="sub_div">
                <div className="img_data">
                    <figure><img src={img} alt={header} /></figure>
                </div>

                <div className="text_data">
                    <div className="text_header">
                        <span>{header}</span>
                        <div className="text_btn">
                            <a href={pdfUrl} className='btn_submit' target="_blank"  rel="noreferrer" >View Pdf</a>
                        </div>
                    </div>

                    <div className="para">
                        <p>{paragraph}</p>
                    </div>

                    <div className="view_pdf">
                    <a href={pdfUrl} className='btn_submit' target="_blank"  rel="noreferrer" >View Pdf</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Card;