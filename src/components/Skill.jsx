import React from 'react';

function Skill() {
  return (
    <div className='container pt-4' id='skills'>
      <h2 className='text-center'>My Tech Stack</h2>
      <p className='text-center mb-4 pt-2 w-75 mx-auto'>A versatile developer with hands-on experience in front-end and back-end technologies, delivering efficient, scalable, and user-friendly web solutions.</p>
      <div className="row gap-5 justify-content-center align-items-center skils">
        <div className="col-2"><i className="fa-brands fa-html5"></i> HTML</div>
        <div className="col-2"><i className="fa-brands fa-css3-alt"></i> CSS</div>
        <div className="col-2"><i className="fa-brands fa-square-js"></i> JavaScript</div>
        <div className="col-2"><i className="fa-brands fa-square-js"></i> jQuery</div>
        <div className="col-2"><i className="fa-brands fa-bootstrap"></i> Bootstrap</div>
        <div className="col-2"><i className="fa-brands fa-tailwindcss"></i> Tailwind CSS</div>
        <div className="col-2"><i className="fa-brands fa-react"></i> React JS</div>
        <div className="col-2"><i className="fa-brands fa-php"></i> Core PHP</div>
        <div className="col-2"><i className="fa-brands fa-laravel"></i> Laravel</div>
        <div className="col-2"><i className="fa-brands fa-livewire"></i> Livewire</div>
        <div className="col-2"><i className="fa-brands fa-wordpress"></i> WordPress</div>
        <div className="col-2"><i className="fa-brands fa-shopify"></i> Shopify</div>
      </div>
    </div>
  );
}

export default Skill;
