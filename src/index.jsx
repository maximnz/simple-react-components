import React from 'react';
import ReactDOM from 'react-dom';

const Wrapper = () => (
  <div className="flex-wrapper">
    <FeedbackForm />
  </div>
);

const FormField = ({ type }) => (
  <input type={type} />
);

const FormTextArea = ({ rows, placeholder }) => (
  <textarea rows={rows} placeholder={placeholder} />
);

const FormFieldLabel = ({ labelText }) => (
  <label className="form-label">{ labelText }</label>
);

const FormButton = ({ buttonText }) => (
  <button className="submit-button">{ buttonText }</button>
);

const FeedbackForm = () => (
  <div className="feedback-form">
    <FormFieldLabel labelText="Your Name" />
    <FormField type="text" />
    <FormFieldLabel labelText="Your E-mail" />
    <FormField type="email" />
    <FormFieldLabel labelText="Message to send" />
    <FormTextArea rows={5} placeholder="Text..." />
    <FormButton buttonText="Send" />
  </div>
);

ReactDOM.render(<Wrapper />, document.getElementById('app'));
