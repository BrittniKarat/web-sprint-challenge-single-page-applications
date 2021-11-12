import React from 'react';



export default function Form (props){
  const { submit, change, formValues } = props;

    return(
      <div> 
        <h2> Create your pizza </h2>
        <form id='pizza-form' onSubmit={submit}>
            <label> Who's pizza is this?
             <input 
              type='text'
              value={formValues.email}
              name='name'
              onChange={change}
              placeholder='name'
            />
            </label>
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
             <label>
             <input 
              id='name-input'
              type='text'
              value={formValues.special}
              name='special'
              onChange={change}
              placeholder='Special Requests'
              />
            </label>
             
        <div>
            <button disabled={disabled}> Submit </button>
        </div>
       </form>

      </div>  
    )

}