function Header() {
  return (
    <header className="d-flex justify-content-between px-5 py-4 border border-bottom">
      <div><h3>Thiru.dk</h3></div>
      <nav className="d-flex gap-3 mb-0 justify-content-center align-items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
