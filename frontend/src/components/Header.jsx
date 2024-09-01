import Login from "./loginButton";

function Header() {
  return (
    <div>
      <header>
        <h1>BrinellCTF</h1>
        <nav>
          <a href="" className="navLink">
            Hem
          </a>
          <a href="" className="navLink">
            Om
          </a>
          <a href="" className="navLink">
            Utmaningar
          </a>
          <a href="" className="navLink">
            Resurser
          </a>
        </nav>
        <Login></Login>
      </header>
    </div>
  );
}

export default Header;
