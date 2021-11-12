import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';

// Importing components
import Form from './Components/Form'
import Home from './Components/home'


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/pizza'>
        <Form />
      </Route>
    </>
  );
};
export default App;
