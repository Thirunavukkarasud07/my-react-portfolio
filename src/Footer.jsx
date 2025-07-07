import React from 'react'

function Footer() {
  return (
    <div>
       <div className="d-flex justify-content-between px-5 py-3 border border-bottom">
      <div><h3>Thiru.dk</h3></div>
      <nav className="d-flex gap-3 mb-0 justify-content-center align-items-center">
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
        <a href="#"><i class="fa-brands fa-github"></i></a>
        <a href="#"><i class="fa-solid fa-envelope"></i></a>
        <a href="#"><i class="fa-solid fa-phone"></i></a>
      </nav>
    </div>
    </div>
  )
}

export default Footer
