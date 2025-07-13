function Projects() {
  return (
    <section className="container pt-5 pb-2" id="projects">
      <h2 className="text-center">My Work & Projects</h2>
        <p className="text-center">From frontend interfaces to backend logic, here are some of the projects I've crafted with passion and precision.</p>
        {/* <h4 className="text-center mb-4">🧑‍💼 Company - Client Projects</h4> */}
        <div className="row mt-4 project_cards gap-md-0 gap-3 ">
          <div className="col-md-4">
            <div className="card card-body">
              <h3><a href="https://billite.co/" target="_blank">Billite</a></h3>
              <p className="fs-6">Developed a responsive GST billing system using HTML, CSS, JavaScript, CodeIgniter, and MySQL. Implemented invoice generation, GST tax logic, interactive dashboards (Chart.js), and user onboarding with Drive.js. Used additional JavaScript libraries to enhance user experience.</p>
            </div>
          </div>
          <div className="col-md-4">
              <div className="card card-body">
              <h3><a href="https://akshayachaitanya.org/" target="_blank">Akshayachaitanya</a></h3>
              <p className="fs-6">Built the company NGO website for Akshaya Chaitanya using HTML, CSS, JavaScript, Bootstrap, and JS libraries. Focused on responsive layouts, clean UI design, and interactive elements to showcase donation flows, services, and the organization’s social impact</p>
            </div>
          </div>
          <div className="col-md-4">
              <div className="card card-body">
              <h3><a href="https://allthingsecommerce.co/" target="_blank">AllThings Eommerce</a></h3>
              <p className="fs-6">Developed a company eCommerce directory using HTML, CSS, Tailwind, Laravel, Livewire, and MySQL. Built dynamic product listings, category filters, vendor profiles, and real-time interactions. Ensured responsive UI and smooth user experience with Livewire components and Tailwind utility classes.</p>
            </div>
          </div>
           <div className="col-md-4 mt-md-4">
              <div className="card card-body">
              <h3><a href="https://reynlab.com/" target="_blank">Reynlab</a></h3>
              <p className="fs-6">Developed a responsive mechanical learning platform for Reynlab using WordPress, Elementor, and LearnDash LMS. Set up structured course pages with video lessons and payment integration. Enabled students to easily purchase and access courses with a user-friendly and engaging interface.</p>
            </div>
          </div>
          <div className="col-md-4 mt-md-4">
              <div className="card card-body">
              <h3><a href="https://theprismacademy.in/" target="_blank">Prism Academy</a></h3>
              <p className="fs-6">Built a responsive medical learning site for Prism Academy using WordPress, Elementor, and Tutor LMS. Managed training video content and customized course pages and subscriber dashboards for branding consistency and smooth mobile-friendly user experience.</p>
            </div>
          </div>
          <div className="col-md-4 mt-md-4">
              <div className="card card-body">
              <h3><a href="https://staccato.in/" target="_blank">Staccato</a></h3>
              <p className="fs-6">Designed and developed a dynamic website for Staccato, a musical band, using WordPress. Showcased the band’s profile, events, media gallery, and contact section. Created a responsive layout with a modern design to highlight their music, performances, and updates across all devices.</p>
            </div>
          </div>
          <div className="col-12 mt-4">
            <p className="text-center">and more...</p>
          </div>
        </div>
        {/* <h4 className="text-center my-4">🛠️ Personal Projects</h4> */}
      <div>

      </div>
    </section>
  );
}
export default Projects;
