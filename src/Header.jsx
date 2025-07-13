function Header() {
  return (
    <header className="d-flex justify-content-between px-5 py-3 border border-bottom shadow--bottom-sm z-1 bg-white sticky-header top-0 w-100">
      <div className="d-md-block col-md-6 col-0 d-none"><h3 className="z-1">Thiru.D</h3></div>
      <nav className="col-md-6 col-12 d-flex z-1 gap-md-5 mb-0 justify-content-md-end justify-content-around align-items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
