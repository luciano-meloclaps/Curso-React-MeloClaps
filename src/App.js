import React, { Fragment } from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Component } from "react/cjs/react.production.min";

function App() {
  return (
    <Fragment>
      <NavBar />
    </Fragment>
  );


class App extends Component {
  render() {
    return (
      <div className="container-items">
        <ItemListContainer name="Producuto" description="111" />
        <ItemListContainer name="item" description="222"/>
        <ItemListContainer name="Inventario" description="333"/>
        <ItemListContainer name="Etc" description="444"/>
      </div>
    );
  }
}
}

export default App;

