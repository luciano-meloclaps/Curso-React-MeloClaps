import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="container">
      <ul className="container-items1">
        <li>Home</li>
        <li>Catalogo</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>
      <ul className="container-items2">
        <li>Mi Cuenta</li>
      </ul>
    </nav>
  );
};

export default NavBar;
