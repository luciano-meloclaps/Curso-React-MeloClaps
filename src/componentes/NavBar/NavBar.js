import { Icon } from "semantic-ui-react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container">
      <ul className="container-items1">
        <NavLink to="/" activeClassName="active" >Home</NavLink>
        <NavLink to="/Category/Ropa" activeClassName="active" >Catalogo</NavLink>
        <NavLink to="" activeClassName="active" >Nosotros</NavLink>
        <NavLink to="" activeClassName="active" >Contacto</NavLink>
      </ul>
      <ul className="container-items2">
        <Icon name="user" /> 
        <Icon name="shopping cart" />
      </ul>
    </nav>
  );
};

export default NavBar;
