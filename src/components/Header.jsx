import { Link } from 'react-router-dom';
import CurrencySelector from './CurrencySelector';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/search">Search</Link>
      </nav>
      <CurrencySelector />
    </header>
  );
};

export default Header;
