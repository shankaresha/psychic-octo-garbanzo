import React from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
      <h1>The Resto</h1>
      </div>

      <div>
        <button>MENU</button> 
        <button>Home</button> 
        <button>Non-Veg Menu</button>
        <button>Contact</button>
      </div>
      <br />
      <br />
      <div>
        <h4>
          About us 
        </h4>
        <p>We serve veg and non veg food </p>
        <ul>
          <li>
            veg food
          </li>
          <li>
            Paneer kadhai
          </li>
          <li>
            Rajma chawal
          </li>
          </ul>

          <br />

          <br />
          <ul>
            <li>
              non veg food
            </li>
            <li>chicken biryani</li>
            <li>Mutton biryani</li>
            <li>Special chicken</li>
          </ul>

      </div>


      <footer>
        <h4>Contact us on </h4>
        <ul>
          <li>Email-TheRESTO@gmail.com</li>
          <li>Phone-123456789</li>
          
        </ul>
      </footer>
    </>
  )
}

export default App
