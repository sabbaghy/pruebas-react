import React, { Component } from 'react';
import styled from 'styled-components';

// https://styled-components.com/docs/basics#getting-started

// Create a Title component that'll render an <h1> tag with some styles

  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    color: green;
  `;
  
  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: yellowgreen;
  `;
  
// The Button from the last section without the interpolations
const Button = styled.button`
  background: ${props => props.primary ? "lightskyblue" : "white"};
  color: ${props => props.primary ? "white" : "lightskyblue"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid lightskyblue;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: purple;
  border-color: purple;
`;

export default class Estilos extends Component {

   render() {
      return (
         <Wrapper>
            <Title>Estilos!</Title>
            <Button>Normal</Button>
            <Button primary>Principal</Button>
            <TomatoButton> Normal Tomato</TomatoButton>
            <TomatoButton primary>Tomato</TomatoButton>
         </Wrapper>
      )
   }
}
