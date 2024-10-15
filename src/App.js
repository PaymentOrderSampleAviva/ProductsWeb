import React from 'react';

import './App.css';
import DataSource from './Data/DataSource';
import ProductList from './Products/ProductList';

function App() {
  return (
    <div className="App"> 
    <DataSource resourceUrl={"/Products"} resourceName={"products"}>
      <ProductList/>
    </DataSource>
    </div>
  );
}

export default App;
