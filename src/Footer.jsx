import React from 'react'

function Footer() {
  return (
    <div>
       <div className="d-flex justify-content-between px-5 py-3 border border-bottom">
      <div><h3>Thiru.D</h3></div>
      <nav className="d-flex gap-3 mb-0 justify-content-center align-items-center">
        <a target='_blank' href="https://www.linkedin.com/in/dkthirunavukkarasu/"><i class="fa-brands fa-linkedin-in"></i></a>
        <a target='_blank' href="https://api.whatsapp.com/send/?phone=9025407738"><i class="fa-brands fa-whatsapp"></i></a>
        <a target='_blank' href="https://github.com/Thirunavukkarasud07"><i class="fa-brands fa-github"></i></a>
        <a href="mailto:dthiruna007@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <a href="tel:09025407738"><i class="fa-solid fa-phone"></i></a>
      </nav>
    </div>
    </div>
  )
}

export default Footer
