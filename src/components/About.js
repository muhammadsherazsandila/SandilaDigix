import React, { useEffect } from 'react'
export default function About() {

  useEffect(() => {
    let animatedElement = document.querySelectorAll('.animated_element');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      });
    });
    animatedElement.forEach(element => {observer.observe(element) })
  });


  return (
    <>
   
    <div id='aboutUs' className='about web_item animated_element'>
      <h1 className='item_heading animated_element'>About Us</h1>
      <p className="about_details animated_element">Welcome to sandila digix! We are a dynamic team of three passionate professionals specializing in web development and graphic design. With expertise in WordPress development, we collaborate to create visually stunning and functional digital solutions. Our mission is to blend creativity and technology, delivering exceptional results for our clients. Let's work together to elevate your online presence!</p>
      <p className="about_details animated_element">At our studio, we're a team of three dedicated creators focused on transforming ideas into engaging digital experiences. With a strong foundation in web development and graphic design, we craft solutions that are both visually appealing and user-friendly. Our expertise in WordPress development allows us to build powerful websites tailored to your unique needs. We believe in collaboration and innovation, ensuring every project reflects your vision. Partner with us to bring your online goals to life!</p>
      <a href="#ourTeam" className="btn custom-btn" style={{background : '#ed1c24',color : 'white'}}>Readmore</a>
    </div>
    </>
  )
}

