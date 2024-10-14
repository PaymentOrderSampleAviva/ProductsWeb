import React from 'react';
import ProductList from './Products/ProductList';
import { DataSource } from './Data/DataSource';
import './App.css';

function App() {
  return (
    <div className="App"> 
    <DataSource resourceUrl="/products" resourceName="products">
			<ProductList/>
		</DataSource>  
      
    </div>
  );
}

export default App;
