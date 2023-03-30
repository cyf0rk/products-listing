import React from 'react';
import './App.scss';
import ProductsListing from './components/ProductsListing';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
        <h2>Learn electronics & coding with our best selling DIY STEM kits:</h2>
        <ProductsListing />
        <Button text="Show more"/>
    </div>
  );
}

export default App;
