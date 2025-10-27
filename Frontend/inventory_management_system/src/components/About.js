import React from 'react'

export default function About() {
  return (
    <div className='container-fluid p-5'>
        <h1>Inventory Management System </h1>
        <section id="about" style={{ padding: '60px 20px', backgroundColor: '#f7f7f7' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>About Inventory Management System</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555' }}>
              The Inventory Management System (IMS) is a modern web application built using the MERN stack (MongoDB, Express.js, React, Node.js). 
              It is designed to help businesses efficiently manage products, track stock levels, and perform CRUD operations with ease. 
              The application provides a user-friendly interface for adding, updating, and deleting products, while ensuring real-time data synchronization with the backend database.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', marginTop: '20px' }}>
              This system is ideal for small to medium-sized businesses looking to streamline their inventory processes and reduce manual errors. 
              With its responsive design, the IMS can be accessed from desktops, tablets, and mobile devices.
            </p>
          </div>
        </section>
    </div>
  )
}
