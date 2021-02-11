import React, { useState } from 'react';

async function getFromBackend() {
  const port = window.location.port ? `:${parseInt(window.location.port)+1}` : '';
  const url = `${window.location.protocol}//${window.location.hostname}${port}/api/v1/users/${Math.floor(Math.random()*100)}`;
  const options = {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

function Component() {
  const [items, setItems] = useState([]);

  const addItem = async () => {
    const item = await getFromBackend();
    setItems([...items, item]);
  }

  return (
    <div>
      <p>There is {items.length} items</p>
      <button onClick={() => addItem()}>
        Click me
      </button>
      <ul>
        {
          items.map((item, i) => <li key={i}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default Component;