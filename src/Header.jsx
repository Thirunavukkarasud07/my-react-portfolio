function Header() {
  return (
    <header className="z-1">
     <div className="header d-flex justify-content-between z-1 py-2 px-4">
       <div className="d-md-block col-md-6 col-0 d-none"><h3 className="z-1">Thiru.D</h3></div>
      <nav className="col-md-6 col-12 d-flex z-1 gap-md-5 mb-0 justify-content-md-end justify-content-around align-items-center">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
     </div>
    </header>
  );
}
export default Header;
