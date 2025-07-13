import React from 'react';
import { motion } from 'framer-motion';
import myImage from '../assets/images/about_04.jpg';

function About() {
  return (
    <section id="about" className="mt-5 py-4">
      <div className="container">
        <div className="row gap-md-0 gap-4 justify-content-center align-items-center">
          <motion.div
            className="col-md-5 text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={myImage} alt="About" className="w-100 rounded" />
          </motion.div>

          <motion.div
            className="col-md-7 ps-md-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="fst-italic badge bg-primary mb-1">About Me..</span>
            <h2 className="mb-3">
              Fullstack Developer Focused on Scalable Solutions & Clean Code
            </h2>
            <p className="fs-6">
              I am a passionate Fullstack Developer with hands-on experience in building
              responsive and feature-rich web applications using HTML, CSS, JavaScript, and
              modern libraries like React. My expertise extends to Laravel, Core PHP, Livewire,
              and WordPress, enabling me to handle both frontend and backend development for
              robust digital products.
              <br /><br />
              With a strong foundation in web standards, I’ve grown into a versatile developer
              capable of crafting visually engaging interfaces and scalable backend systems. I’ve
              also worked extensively with tools like Elementor, Oxygen, and Shopify (including
              custom theme development with Electro), delivering seamless user experiences that
              align with business needs.
              <br /><br />
              My development approach is guided by UI/UX best practices, a commitment to
              continuous learning, and a focus on high-quality product delivery.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
