const Header = () => {
  return (
    <header>
      <div>
        <div>
          <input>EN </input> <input>USD </input>
        </div>
        <div>
          <input>EN </input> <input>USD </input>
        </div>
      </div>
      <h1>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> HOME </Link>
          </li>
          <li>
            <Link to="/about"> BAG </Link>
          </li>
          <li>
            <Link to="/about"> SNEAKERS </Link>
          </li>
          <li>
            <Link to="/about"> BELT </Link>
          </li>
          <li>
            <Link to="/contact"> CONTACT </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
