import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h2>Logo</h2>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/shopping-cart">Cart</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;