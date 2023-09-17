import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("chatchai")
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };
  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React WOW</h1>
      <p>{name}</p>
      
      <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
      <div className="card">
        
        <button onClick={() => setCount((count) => count + 2)}>
          Plus
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Minus
        </button>
        <p>{count}</p>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <ul>
          {products.map(products => (
            <li key={products.id}>{products.title}</li>
            
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

    
 
  )
}

export default App
