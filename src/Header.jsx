function Header() {
  return (
    <header className="d-flex justify-content-between px-5 py-4 border border-bottom shadow--bottom-sm z-1 bg-white position-fixed top-0 w-100">
      <div><h3>Thiru.D</h3></div>
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
