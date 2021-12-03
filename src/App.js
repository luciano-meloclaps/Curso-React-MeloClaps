import React from "react";
import "./App.css";
import "./componentes/Items/Item.css"

//PROPTYPES 
import { Component } from "react/cjs/react.production.min";

//COMPONENTES
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";

//REACT ROUTER DOM
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
        
      </div>  
    );
  }
}


export default App;
