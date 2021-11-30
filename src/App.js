import React, { Fragment } from "react";
import "./App.css";
import PropTypes from 'prop-types';
import { Component } from "react/cjs/react.production.min";

//COMPONENTES
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

class App extends Component {
  
  render() {

    return (
      <div className="container-items">

        <NavBar />
        <ItemListContainer />
        
      </div>  
    );
  }
}


export default App;
