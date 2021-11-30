import React from "react";
import "./App.css";
// import PropTypes from 'prop-types';
import { Component } from "react/cjs/react.production.min";

//COMPONENTES
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

class App extends Component {
  
  render() {

    return (

      <div className="container-items">
      
        <NavBar />
        <ItemListContainer categoryId="MLA1276" />
        <ItemDetailContainer />
      </div>  
    );
  }
}


export default App;
