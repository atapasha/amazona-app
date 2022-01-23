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

                <div key={product._id} className="card">
                <a href={`/product/${product.id}`}>
                  <img className="medium" src={product.image} alt={product.name} />
                </a>
  
                <div className="card-body">
                  <a href="product.html">
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                    <div>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div> 
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                    <div>
                      <span>
                        <i className="fa fa-star"></i>
                      </span>
                    </div>
                  </div>
  
                  <div className="price">${product.price}</div>
                </div>
              </div>

              ))
              
            }
        
          </div>
        </main>
        <footer classNameName="row center"></footer>
      </div>
    </div>
  );
}

export default App;
