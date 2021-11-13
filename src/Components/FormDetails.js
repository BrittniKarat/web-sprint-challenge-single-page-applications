import React from 'react';
// importing styles
import styled from 'styled-components';


const FormStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
max-width: 100%;
text-decoration: none;
text-align: left;

h3{
  background-color: ${(pr) => pr.theme.tertiaryColor};
  color: ${(pr) => pr.theme.secondaryColor};
  font-size: 5rem;
  font-weight: bold;
  margin-top: 2%;
  padding: 1% 0;
  text-shadow: 2px 2px 4px ${(pr) => pr.theme.primaryColor};
}
`


const FormDetails = (props) => {
    const { details } = props;

    if(!details){
        return <h3>Confirming order ... </h3>
    }
    
    const { toppings } = props.details

    const allToppings = toppings.map(ea => ea + ", ")
    return(
        
        <FormStyle>
            <h1> Order Confirmed! </h1>
            <h2>{details.name}</h2>
            <p> {details.size}</p>
            <p> {allToppings}</p>
            <p> {details.special}</p>

        </FormStyle>

    )

}

export default FormDetails;