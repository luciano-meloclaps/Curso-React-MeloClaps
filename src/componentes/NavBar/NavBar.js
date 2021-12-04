import { Icon } from "semantic-ui-react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container">
      <ul className="container-items1">
        <NavLink to="/" ClassName="link" >Home</NavLink>
        <NavLink to="/Category/Sneakers" ClassName="link" >Catalogo</ NavLink>
        <NavLink to="" ClassName="link" >Nosotros</NavLink>
        <NavLink to="" ClassName="link" >Contacto</NavLink>
      </ul>
      <ul className="container-items2">
        <Icon name="user" /> 
        <Icon name="shopping cart" />
      </ul>
    </nav>
  );
};

export default NavBar;
