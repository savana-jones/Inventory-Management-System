import React from 'react'

export default function Home() {
  return (
    <div className='container-fluid p-5'>
        <section id="home" style={{ padding: '80px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#333' }}>
              Welcome to Inventory Management System
            </h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
              Efficiently manage your products, track stock levels, and streamline your business operations 
              with our modern, easy-to-use web application built on the MERN stack.
            </p>
            <a 
              href="about" 
              style={{ 
                padding: '12px 30px', 
                fontSize: '1rem', 
                color: '#fff', 
                backgroundColor: '#6c63ff', 
                borderRadius: '5px', 
                textDecoration: 'none' 
              }}
            >
              Learn More
            </a>
          </div>
      </section>

    </div>
  )
}
