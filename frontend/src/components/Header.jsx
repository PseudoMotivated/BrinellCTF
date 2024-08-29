import Login from "./loginButton";

function Header() {
  return (
    <div>
    <header>
      <h1>BrinellCTF</h1>
      <nav>
        <a href="">Hem</a>
        <a href="">Om</a>
        <a href="">Utmaningar</a>
        <a href="">Resurser</a>
      </nav>
      <Login></Login>
    </header>
    </div>
  );
}

export default Header;
