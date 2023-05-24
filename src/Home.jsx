import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className='bg-container'>
        <Navbar/>
        {/* test */}
        <section id="intro-slide">
        <div className="container mt-2">
            <h1 className="display-4 section-heading slide-heading mb-2 text-center">Blood bank Management System</h1>
            
            <p className="slide-description text-center">A blood bank management system is a software application designed to help blood banks efficiently manage the process of collecting, testing, processing, storing, and distributing blood and blood products. The system can help blood banks keep track of inventory, monitor blood donations, and ensure that blood is distributed to those in need in a timely and safe manner. It can also help with the management of donor and patient records, and provide data for analysis and reporting. A well-designed blood bank management system can improve the efficiency, accuracy, and safety of blood bank operations, ultimately leading to better patient outcomes.</p>
            
        </div>
    </section>

    
    </div>
  )
}

export default Home