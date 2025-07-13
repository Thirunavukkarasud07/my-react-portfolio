import React from 'react';
import { motion } from 'framer-motion';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import js from '../assets/images/js.png';
import jquery from '../assets/images/jquery.webp';
import bootstrap from '../assets/images/bootstrap.webp';
import tailwind  from '../assets/images/tailwind.png';
import react from '../assets/images/react.png';
import php from '../assets/images/php.webp';
import laravel from '../assets/images/laravel.webp';
import livewire from '../assets/images/livewire.webp';
import wordpress from '../assets/images/wordpress.webp';
import shopify from '../assets/images/shopify.webp';

function Skill() {
  const techStack = [
    { image: html, name: 'HTML' },
    { image: css, name: 'CSS' },
    { image: js, name: 'Javascript' },
    { image: jquery, name: 'jQuery' },
    { image: bootstrap, name: 'Bootstrap' },
    { image: tailwind, name: 'Tailwind CSS' },
    { image: react, name: 'React JS' },
    { image: php, name: 'Core PHP' },
    { image: laravel, name: 'Laravel' },
    { image: livewire, name: 'Livewire' },
    { image: wordpress, name: 'WordPress' },
    { image: shopify, name: 'Shopify' },

  ];

  return (
    <section className="pt-5" id="skills">
      <div className="container">
        <motion.h2 className="text-center fw-bold mb-3" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} >
          My Tech Stack
        </motion.h2>
        <motion.p className="text-center mb-5 w-md-75 mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} >
          As a <strong>Fullstack Developer</strong>, I work across the full web development lifecycle
          using a modern set of tools and technologies. From building sleek interfaces to developing
          powerful backend systems, my stack is tailored for crafting{' '}
          <strong>efficient, scalable, and high-performing web applications</strong>.
        </motion.p>

        <div className="row justify-content-center text-center g-4">
          {techStack.map((tech, index) => (
            <motion.div className="col-4 col-sm-4 col-md-2" key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.05, duration: 0.4 }} viewport={{ once: true }} >
              <div className="p-3 border rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                {tech.image ? (
                  <img src={tech.image} alt={tech.name} width="32" className="mb-2" />
                ) : (
                  <p>No image</p>
                )}
                <span className="fw-medium">{tech.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
