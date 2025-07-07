import myImage from '../assets/images/about_04.jpg' 
function About() {
  return (
    <section id="about" className="mt-5 py-4">
      <div className="container">
       <div className="row">
          <div className="col-md-6 text-center">
              <img src={myImage} alt="" className='w-100 rounded' />
        </div>
         <div className="col-md-6 ps-4">
          <h5 className="fst-italic fs-5">About Me..</h5>
          <h2>Fullstack Developer with a Passion for Clean Code & Scalable Solutions</h2>
          <p>I am a passionate Fullstack Developer with hands-on experience in building responsive and feature-rich web applications using HTML, CSS, JavaScript, and modern libraries like React. My expertise extends to Laravel, Core PHP, Livewire, and WordPress, enabling me to develop both the frontend and backend of robust digital products. Starting with a strong foundation in web standards, I have grown into a versatile developer who can craft visually engaging interfaces and scalable backends. I’ve worked extensively with tools like Elementor and Shopify (including custom theme work with Electro), creating seamless user experiences that align with business goals. My approach to development is driven by UI/UX best practices, continuous learning, and a deep commitment to product quality.</p>
        </div>
       </div>
      </div>
    </section>
  );
}
export default About;
