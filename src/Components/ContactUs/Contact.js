import React from 'react';
import { FaArrowRightLong  } from "react-icons/fa6";
import "./Contact.css";

const Contact = () => {
  return (
    <div className='contact-us'>
        <div className="heading-section">
            <div className="wrapper">
                <div className="three-column case-studies-columns">
                <span></span>
                <span></span>
                <span></span>
                </div>
                <h3>contact us</h3>
            </div>
        </div>
        <div className='wrapper'>
            <div className='location'>
                <iframe title='Office Addess' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1613008116624!2d72.96117187593805!3d19.18815594844064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91c2aac887f%3A0xf2f100f4a232a457!2sTech%20matrix!5e0!3m2!1sen!2sin!4v1704208395644!5m2!1sen!2sin" style={{border:0}} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='contact-form'>
                <h3>get in touch</h3>
                <h4>Have an inquiry or feedback for us?</h4>
                <form className='form'>
                    <div className='form-inputs'>
                        <div className='form-input-name'>
                            <input type='text' name='name' id='name' placeholder='Name' required/>
                        </div>
                        <div className='form-input-contact'>
                            <input type="number" name='Conatact Number' id='Conatact Number' placeholder='Conatact Number' required/>
                        </div>
                    </div>
                    <div className='form-inputs'>
                        <div className='form-input-email'>
                            <input type="email" name='email' id='email' placeholder='Email Address' required />
                        </div>
                    </div>
                    <div className='form-inputs'>
                        <div className='form-input-companyName'>
                            <input type="text" name='company' id='company' placeholder='Company Name' required />
                        </div>
                    </div>
                    <div className='form-inputs'>
                        <div className='form-input-message'>
                            <textarea name="message" id="message" rows="1" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className='form-button'>
                        <div className='form-input-button'>
                            <button type="submit" class="submit-btn" title="Send"><span>send</span> <span><FaArrowRightLong  /></span></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;