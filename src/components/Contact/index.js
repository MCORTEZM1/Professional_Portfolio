import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

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
      >
      <div 
        id='contact-div'
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
              htmlFor="name">
              Name:
            </label>
            <input 
              type="text" 
              name="name" 
              defaultValue={name} 
              onBlur={handleChange} 
            />
          </div>
          <div  
            className="mb-2">
            <label 
              for="exampleInputEmail1" 
              class="form-label">
              Email address
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
              class="form-text">
            Your email address will never be shared with anyone else.
            </div>

          </div>
          <div  className="mb-2">
            <label htmlFor="message">Message:</label>
            <textarea name="message" 
              rows="5" 
              defaultValue={message} 
              onBlur={handleChange} 
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button data-testid="button" type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
