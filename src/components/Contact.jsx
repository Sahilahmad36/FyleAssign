import React from "react"
import "./Contact.css";
function Contact() {
  return (
    <div className="container">
    <form action="https://getform.io/f/qblokgka" method="POST">
      <div className="form">
      <h1>Talk to Us</h1>
       <input type="text" placeholder="Work-Email*" id="email" className="work" />
       <div className="sec-para">
        <input type="text" placeholder="First-Name*" id="name" className="work-1"/>
    
        <input type="text" placeholder="Last-Name*" id="last-name" className="work-2" />
       </div>
       <div class="checkbox-group">
                <input type="checkbox" id="terms" name="terms" />
                <label for="terms">I agree to Fyle's terms and conditions, and provide consent to send me communication.</label>
            </div>
            <div class="form-group">
                <button type="submit" className="btn">Submit</button>
            </div>
            <br />
            <br />
      </div>
      </form>
    </div>
  )
}

export default Contact
