import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import 'style.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '', organization: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message, organization } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section 
      class='d-flex justify-content-center'
      id='contact-container'
      >
      <div 
        id='contact-div'
        className='card'
      >
        <h1 
          data-testid="h1tag" 
          className='text-center'>
          Contact me
        </h1>
        <form 
          id="contact-form"
          className='pt-4'
          onSubmit={handleSubmit}
        >
          <div 
            className="mb-2"
          >
            <label 
              htmlFor="input-name"
              class="form-label"
            >Name
            </label>
            <input
              id="input-name"
              type="text" 
              name="name"
              className='form-control' 
              defaultValue={name} 
              onBlur={handleChange} 
            />
          </div>
          <div  
            className="mb-2">
            <label 
              htmlFor="exampleInputEmail1" 
              class="form-label"
            >Email address
            </label>
            <input 
              id='exampleInputEmail1' 
              class="form-control" 
              type="email" 
              name="email" 
              aria-describedby="emailHelp"
              defaultValue={email} 
              onBlur={handleChange} 
            />
            <div 
              id="emailHelp" 
              class="form-text"
            >Your email address will never be shared with anyone else.
            </div>  
          </div>
          <div 
            className="mb-2"
          >
            <label 
              htmlFor="company-name"
              class="form-label"
            >Company/Organization
            </label>
            <input
              id="company-name"
              type="text" 
              name="name"
              className='form-control' 
              defaultValue={organization}  
              onBlur={handleChange} 
            />
          </div>
          <div  className="mb-2">
            <label htmlFor="message"
            >Message
            </label>
            <textarea 
              name="message" 
              rows="5" 
              className='form-control' 
              defaultValue={message} 
              onBlur={handleChange} 
            />
          </div>
          {errorMessage && (
            <div>
              <p 
                className="error-text"
              >{errorMessage}
              </p>
            </div>
          )}
          <div id="form-btn">
            <button 
              data-testid="button" 
              type="submit"
              className='btn btn-secondary' 
            >Submit
            </button>
          </div>
 
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
