import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      <Link className='header__link header__link_type_main' to='/random'>
        <p>Random Pokemon Generator</p>
      </Link>
      <Link className='header__link header__link_type_main' to='/main'>
        <p>Pokemon Search</p>
      </Link>
    </div>
  );
}

export default Header;
