import React from 'react'
import './Contact.css'
import mess from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'

import location from '../../assets/location-icon.png'
import white from '../../assets/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f3febbc0-05ee-46af-bdce-7d3f46d9b783");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3> Send us a message <img src={mess} alt="" /></h3>
             <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        
           <ul>
            <li> <img src={mail} alt="" />Rahulselvan10@gmail.com </li>
            <li><img src={phone} alt="" />8056788047</li>
            <li><img src={location} alt="" />Bharathi nagar,lic colony,Coimbatore</li>
           </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit} >
                
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name ' required/>

                <label htmlFor="">Phone number</label>
                <input type="tel " name='phone' placeholder='Enter your mobile number ' required/>
                <label htmlFor="">Write your message here</label>
                 <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                 <button type='submit' className='btn dark-btn'>Submit now <img src={white} alt="" /></button>
              
              </form>
              <span>{result}</span>
        </div>
    


    </div>
  )
}

export default Contact