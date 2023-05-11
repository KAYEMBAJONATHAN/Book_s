import React from 'react';

const Form = () => (
  <div>
    <input type="text" name="title" placeholder="Book" />
    <input type="select" name="select" placeholder="Categories" />
    <button type="submit">ADD</button>
  </div>
);
export default Form;
