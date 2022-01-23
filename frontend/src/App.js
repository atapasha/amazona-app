import React from 'react';
import data from './data';


function App() {
  return (
    <div classNameName="App">
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="index.html" className="brand">
              aamzona
            </a>
          </div>
          <div>
            <a href="/cart" className="cart.html">
              Cart
            </a>
            <a href="/signin" className="signin.html">
              Sign in 
            </a>
          </div>
        </header>
        <main>
          <div className="row center">
            { 
              data.products.map((product)=> (

               <Product key={product._id} product={product}></Product>
              ))}
          </div>
        </main>
        <footer classNameName="row center"></footer>
      </div>
    </div>
  );
}

export default App;
