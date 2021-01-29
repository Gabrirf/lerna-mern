import React, { useState } from 'react';

async function getFromBackend() {
  const response = await fetch(`http://127.0.0.1:3001/api/v1/users/${Math.floor(Math.random()*100)}`);
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