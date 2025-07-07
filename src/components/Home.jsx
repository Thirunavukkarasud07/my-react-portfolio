import { motion } from 'framer-motion';
function Home() {
  return (
    <div className='herobanner d-flex flex-column justify-content-center align-items-center text-white gap-3'>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="fw-bold fs-1"
      >
        Hi, I'm Thirunavukkarasu — Fullstack Web Developer
      </motion.h1>
      {/* <h1 className='fs-1'></h1> */}
      <p className='fs-4 text-center mb-0'>I design and build modern, scalable web applications using React, Laravel, and other powerful technologies. I focus on performance, maintainability, and user experience.</p>
      <p className='fst-italic fs-5'>Passionate about building exceptional digital experiences as a Full-Stack Web Developer.</p>
        <button className='btn btn-light'>Explore My Work</button>
    </div>
  )
}

export default Home
