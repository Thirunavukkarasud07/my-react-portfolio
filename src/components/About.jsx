import myImage from '../assets/images/about_04.jpg' 
function About() {
  return (
    <section id="about" className="mt-5 py-4">
      <div className="container">
       <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center">
              <img src={myImage} alt="" className='w-100 rounded' />
        </div>
         <div className="col-md-6 ps-4">
          <h5 className="fst-italic fs-5">About Me..</h5>
          <h2>Fullstack Developer Focused on Scalable Solutions & Clean Code</h2>
          <p>I am a passionate Fullstack Developer with hands-on experience in building responsive and feature-rich web applications using HTML, CSS, JavaScript, and modern libraries like React. My expertise extends to Laravel, Core PHP, Livewire, and WordPress, enabling me to handle both frontend and backend development for robust digital products. With a strong foundation in web standards, I’ve grown into a versatile developer capable of crafting visually engaging interfaces and scalable backend systems. I’ve also worked extensively with tools like Elementor, Oxygen, and Shopify (including custom theme development with Electro), delivering seamless user experiences that align with business needs. My development approach is guided by UI/UX best practices, a commitment to continuous learning, and a focus on high-quality product delivery</p>
        </div>
       </div>
      </div>
    </section>
  );
}
export default About;
