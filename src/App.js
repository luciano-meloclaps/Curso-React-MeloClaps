import React from "react";
import "./App.css";
// import PropTypes from 'prop-types';
import { Component } from "react/cjs/react.production.min";

//CSS
import "./componentes/NavBar/NavBar.css"

//COMPONENTES
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//VIEWS
import Category from "./views/Category";
import Home from "./views/Home"

class App extends Component {
  
  render() {

    return (

      <div className="container-items">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/Category/:id' element={<Category />} ></Route>
            <Route path='/Item/:id' element={<ItemDetailContainer />} ></Route>
          </Routes>
        </Router>
        
        <ItemDetailContainer />
      </div>  
    );
  }
}


export default App;
