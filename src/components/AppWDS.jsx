import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.primary ? "lightskyblue" : "white"};
  color: ${props => props.primary ? "white" : "lightskyblue"};

  font-size: 1.2em;
  margin: .5em;
  padding: 0.5em 1em;
  border: 2px solid lightskyblue;
  border-radius: 3px;
`;

const Span = styled.span`
  background: ${props => props.primary ? "lightskyblue" : "white"};
  color: ${props => props.primary ? "white" : "lightskyblue"};

  font-size: 1.2em;
  margin: .5em;
  padding: 0.5em 1em;
  border: 2px solid lightskyblue;
  border-radius: 3px;
`;

function AppWDS() {

   const [estado, setEstado] = useState(() => 10);
   const [resourceType, setResourceType] = useState('posts');
   const [items, setItems] = useState([]);

   const incrementEstado = () => {
      setEstado(previousValue  => previousValue + 1); 
   }

   const decrementEstado = () => {
      setEstado(previousValue  => previousValue - 1); 
   }

   useEffect(() => {

      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
         .then(response => response.json())
         .then(json => setItems(json))

   }, [resourceType])

   return (
      <div>
         <hr/>
         <Button onClick={decrementEstado}> Restar </Button>
         <Span> {estado} </Span>
         <Button onClick={incrementEstado}> Sumar </Button>
         <hr/>

         <hr/>
         <div> 
            <Button onClick={() => setResourceType('posts') }> Post </Button>
            <Button onClick={() => setResourceType('users') }> User </Button>
            <Button onClick={() => setResourceType('comments') }> Comments </Button>
         </div>
         <h1> {resourceType}</h1>
         <hr/>
         {items.map((item, index)  => {
            return <pre key={index}>
               {JSON.stringify(item)}
            </pre>
         })}
         <hr/>
      </div>
   )
}

export default AppWDS
