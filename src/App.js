import React, { Fragment } from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  constructor() {
    super();
    this.state = {
        counter: 0
    };

  //   this.handlerCounterUp= this.handlerCounterUp.bind(this);
  // }

  // handlerCounterUp(){
  //   this.setState({ counter: this.state.counter + 1 });

  
  }
  
  render() {
    return (
      <div className="container-items">

        <NavBar />
        {/* <div className="ItemCount">
          <p>Counter: {this.state.counter}</p>
          <div className="btn-section">
            <button onClick={this.handlerCounterUp}
            >+</button>
          </div>
        </div> */}
        <div className="items">
        <ItemListContainer mod=" Disponible"name="JORDAN AIR JORDAN XXXV"
        description="$26.999" img="https://essential.vteximg.com.br/arquivos/ids/424797-1000-1000/306-9773_1.jpg?v=637550409765200000" />
        </div>

        <div className="items">
        <ItemListContainer mod=" Disponible"name="NIKE AIR MAX 200 SE" 
        description="$23.999" img="https://essential.vteximg.com.br/arquivos/ids/364565-1000-1000/306-7567_1.jpg?v=637389914812700000" />
        </div>

        <div className="items">
        <ItemListContainer mod=" Disponible"name="JORDAN AIR MAX 200 XX" 
        description="$20.679" img="https://essential.vteximg.com.br/arquivos/ids/358414-1000-1000/306-7122_1.jpg?v=637377625246530000" />
        <ItemListContainer mod=" Exclusivo con ticket" name="ZAPATILLAS JORDAN MAX 200"
        description="" img="https://essential.vteximg.com.br/arquivos/ids/357189-1000-1000/306-6925_1.jpg?v=637372440582600000" />
        </div>
      </div>
    );
  }
}


