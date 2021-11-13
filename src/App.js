import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import "./App.css";

// Importing components
import Form from './Components/Form';
import FormDetails from './Components/FormDetails';

// importing Schema, axios, and yup
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';

// importing styles
import styled from 'styled-components';

const AppDiv = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  text-decoration: none;
  text-align: left;

  h1{
    background-color: ${(pr) => pr.theme.tertiaryColor};
    color: ${(pr) => pr.theme.secondaryColor};
    font-size: 5rem;
    font-weight: bold;
    margin-top: 2%;
    padding: 1% 0;
    text-shadow: 2px 2px 4px ${(pr) => pr.theme.primaryColor};
  }

  .nav-links{
    font-size: 3rem;
    
    color:red
  }
`


const pizzaOptions = {
  name: '',
  size: '',
  mushrooms: false,
  blackOlives: false,
  onions: false,
  greenPeppers: false,
  spinach: false,
  zucchini: false,
  pineapple: false,
  special: ''
};
const initialFormErrors={
  name: '',
  special: ''
};

const App = () => {
  const [pizzas, setPizzas] = useState([])
  const [formValues, setFormValues] = useState(pizzaOptions);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const postPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
      .then(res =>{ setPizzas([...pizzas, res.data])})
      .catch(err => console.error(err))
      .finally(() => setFormValues(pizzaOptions))
  };

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() =>  setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  };

  const inputSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['mushrooms', 'blackOlives', 'onions', 'greenPeppers', 'spinach', 'zucchini', 'pineapple'].filter(ea => !!formValues[ea]),
      special: formValues.special.trim(),
    }
    postPizza(newPizza);
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <AppDiv>
  
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <p>Try the featured restaurant of the week!</p>
          <Link to='/pizza'>  <b>Pizza Plant</b></Link>
        </div>
      </nav>

      <Route exact path='/'>
      </Route>
      <Route path='/pizza'>
        <Form 
          formValues={formValues} 
          change={inputChange}
          submit={inputSubmit}
          disabled={disabled}
          errors={formErrors} 
        />
       { pizzas.map( ea => <FormDetails key={ea.id} details={ea} toppings={ea.toppings}/>)
      }
      {console.log(pizzas)}
      </Route>
    
    </AppDiv>
  );
};
export default App;
