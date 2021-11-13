import React from 'react';

const FormDetails = (props) => {
    const { details } = props;

    if(!details){
        return <h3>Confirming order ... </h3>
    }
    
    const { toppings } = props.details

    const allToppings = toppings.map(ea => ea + ", ")
    return(
        
        <div>
            <h2>{details.name}</h2>
            <p> {details.size}</p>
            <p> {allToppings}</p>
            <p> {details.special}</p>

        </div>

    )

}

export default FormDetails;