import './Contact.modular.css';

const Contact = ()=>{
    return <>
    <div className="container mt-5 contact-page">
    <h1>Contact <span className='custom-color'> Us </span></h1>
    <p>Feel free to reach out to us with any questions or inquiries. We'll get back to you as soon as possible.</p>

    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input type="text" className="form-control" id="name" placeholder="Enter your name" autoFocus/>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>

    </>
}

export default Contact;