import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';

// Importing components
import Form from './Components/Form'
import Home from './Components/home'

// importing Schema, axios, and yup
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';

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
      .then(res =>{ setPizzas([...pizzas, res.data]) ;console.log(res.data)})
      .catch(err => console.error(err))
      .finally(() => setFormValues(pizzaOptions))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() =>  setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

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
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <>
  
      <nav>
        <h1>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza Plant</Link>
        </div>
      </nav>

      <Route exact path='/'>
        <Home />
        <Link to="/pizza" id='order-pizza'>Pizza Plant</Link>
      </Route>
      <Route path='/pizza'>
        <Form 
          formValues={formValues} 
          change={inputChange}
          submit={inputSubmit}
          disabled={disabled}
          errors={formErrors} 
        />
      </Route>
    </>
  );
};
export default App;
