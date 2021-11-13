import React from 'react';

const FormDetails = (props) => {
    const { details } = props;

    if(!details){
        return <h3>Confirming order ... </h3>
    }

    return(
        
        <div>
            <h2>{details.name}</h2>
            <p> {details.size}</p>
            <p> {details.mushrooms}</p>
            <p> {details.blackOlives}</p>
            <p> {details.onions}</p>
            <p> {details.greenPeppers}</p>
            <p> {details.spinach}</p>
            <p> {details.zucchini}</p>
            <p> {details.pineapple}</p>
            <p> {details.special}</p>

        </div>

    )

}

export default FormDetails;