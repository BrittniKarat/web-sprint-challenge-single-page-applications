import React from 'react';



export default function Form (props){
  const { formValues, change, submit, disabled, errors } = props;

    return(
      <div> 
        <h2> Create your pizza </h2>
        <form id='pizza-form' onSubmit={submit}>
        <div className='errors'>{errors.name}</div>
            <label> Who's pizza is this?
             <input 
              type='text'
              value={formValues.email}
              name='name'
              onChange={change}
              placeholder='name'
            />
            </label>
            <label> What size are we getting?
              <select name='size' value={formValues.size} OnChange={change}id='size-dropdown'>
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
             onChange={change}
             />
             </label>
             <label> Black Olives
                <input
             type='checkbox'
             name='blackOlives'
             checked={formValues.blackOlives}
             onChange={change}
             />
             </label>
             <label> Onions
                <input
             type='checkbox'
             name='onions'
             checked={formValues.onions}
             onChange={change}
             />
             </label>
             <label> Green peppers
                <input
             type='checkbox'
             name='greenPeppers'
             checked={formValues.greenPeppers}
             onChange={change}
             />
             </label>
             <label> Spinach
                <input
             type='checkbox'
             name='spinach'
             checked={formValues.spinach}
             onChange={change}
             />
             </label>
             <label> Zucchini 
                <input
             type='checkbox'
             name='zucchini'
             checked={formValues.zucchini}
             onChange={change}
             />
             </label>
             <label> Pineapple
                <input
             type='checkbox'
             name='pineapple'
             checked={formValues.pineapple}
             onChange={change}
             />
             </label>
             </div>
             <label> Special Requests
             <input 
              id='special-text'
              type='text'
              value={formValues.special}
              name='special'
              onChange={change}
              placeholder='Special Requests'
              />
            </label>
             
        <div>
            <button id='order-button' disabled={disabled}>Add to Order </button>
        </div>
       </form>

      </div>  
    )

}