import React from 'react';
import styled from 'styled-components';


const FormStyles = styled.div`
   align-items: center;
   background-color: ${pr => pr.theme.secondaryColor};
   color: ${pr => pr.theme.primaryColor};
   display: flex;
   flex-direction: column;
   font-size: 3rem;
   justify-content: center;
   margin: 1% 0;
   padding: 1% 0;
   width: 40%;
  
`

export default function Form (props){
  const { formValues, change, submit, disabled, errors } = props;

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const realValue = type === 'checkbox' ? checked : value;
    change(name, realValue)
  }

    return(
      <FormStyles> 
        <h2> Create your pizza </h2>
        <form id='pizza-form' onSubmit={onSubmit}>
        <div className='errors'>{errors.name}</div>
            <label> Who's pizza is this?
             <input 
              id='name-input'
              type='text'
              value={formValues.name}
              name='name'
              onChange={onChange}
              placeholder='Name'
            />
            </label>
            <label> What size are we getting?
              <select name='size' value={formValues.size} onChange={onChange} id='size-dropdown'>
                <option value='personal'>Personal</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
                <option value='party'>Party</option>
                <option value='king'>King</option>
              </select>
            </label>
            <div> 
              <h3>Toppings</h3>
            <label> Mushrooms
                <input
             type='checkbox'
             name='mushrooms'
             checked={formValues.mushrooms}
             onChange={onChange}
             />
             </label>
             <label> Black Olives
                <input
             type='checkbox'
             name='blackOlives'
             checked={formValues.blackOlives}
             onChange={onChange}
             />
             </label>
             <label> Onions
                <input
             type='checkbox'
             name='onions'
             checked={formValues.onions}
             onChange={onChange}
             />
             </label>
             <label> Green peppers
                <input
             type='checkbox'
             name='greenPeppers'
             checked={formValues.greenPeppers}
             onChange={onChange}
             />
             </label>
             <label> Spinach
                <input
             type='checkbox'
             name='spinach'
             checked={formValues.spinach}
             onChange={onChange}
             />
             </label>
             <label> Zucchini 
                <input
             type='checkbox'
             name='zucchini'
             checked={formValues.zucchini}
             onChange={onChange}
             />
             </label>
             <label> Pineapple
                <input
             type='checkbox'
             name='pineapple'
             checked={formValues.pineapple}
             onChange={onChange}
             />
             </label>
             </div>
             <label> Special Requests
             <input 
              id='special-text'
              type='text'
              value={formValues.special}
              name='special'
              onChange={onChange}
              placeholder='Special Requests'
              />
            </label>
             
        <div>
            <button id='order-button' disabled={disabled}>Add to Order </button>
        </div>
       </form>

      </FormStyles>  
    )

}