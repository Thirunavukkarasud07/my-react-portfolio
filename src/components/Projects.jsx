function Projects() {
  return (
    <section className="container pt-5 pb-2" id="projects">
      <h2 className="text-center">My Work & Projects</h2>
        <p className="text-center">From frontend interfaces to backend logic, here are some of the projects I've crafted with passion and precision.</p>
        {/* <h4 className="text-center mb-4">🧑‍💼 Company - Client Projects</h4> */}
        <div className="row mt-4">
          <div className="col-4">
            <div className="card card-body">
              <h3><a href="">Billite</a></h3>
              <p>Contributed to a company GST billing web application using HTML, CSS, JavaScript, jQuery, AJAX, Laravel, and Chart.js. Implemented invoice generation, tax logic, interactive dashboards, and user guidance with Drive.js. Ensured responsive UI with Bootstrap.</p>
            </div>
          </div>
          <div className="col-4">
              <div className="card card-body">
              <h3><a href="">Akshayachaitanya</a></h3>
              <p>Built the company NGO website for Akshaya Chaitanya using HTML, CSS, JavaScript, Bootstrap, and JS libraries. Focused on responsive layouts, clean UI design, and interactive elements to showcase donation flows, services, and the organization’s social impact</p>
            </div>
          </div>
          <div className="col-4">
              <div className="card card-body">
              <h3><a href="">AllThings Eommerce</a></h3>
              <p>Developed a company eCommerce directory using HTML, CSS, Tailwind, Laravel, Livewire, and MySQL. Built dynamic product listings, category filters, vendor profiles, and real-time interactions. Ensured responsive UI and smooth user experience with Livewire components and Tailwind utility classes.</p>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
        {/* <h4 className="text-center my-4">🛠️ Personal Projects</h4> */}
      <div>

      </div>
    </section>
  );
}
export default Projects;
