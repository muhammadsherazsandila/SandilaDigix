import React, { useState , useEffect} from 'react';
import hero_img_1 from './photos/slider/slider_3.jpg'
import hero_img_2 from './photos/slider/slider_4.jpg'
import whatsAppIcon from '../components/photos/icons/whatsapp.png'
export default function Hero() {
    const images = [hero_img_1, hero_img_2];

    const [currentIndex, setCurrentIndex] = useState(0)
    const [visible, setVisible] = useState('scale_out')
    const nextSlide = () => {
        setVisible('scale_in')
        setTimeout(() => {
            setVisible('scale_out')
        }, 800);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setVisible('scale_in')
        setTimeout(() => {
            setVisible('scale_out')
        }, 800);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    

    
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
        <div id='home' className="slider">
            <img className={`slider-image ${visible}`} src={images[currentIndex]} alt="hero_images" />
            <div className="hero_link">
                <h1 className='hero_text animated_element'>WELCOME TO SANDILA DIGIX</h1>
                <a className='whatsAppLink animated_element' href="https://wa.me/+923246435840" target='blank'>Contact Us</a>
            </div>
            <div className="slider-controls">
                <button onClick={prevSlide} className="slider-button">&lt;</button>
                <button onClick={nextSlide} className="slider-button">&gt;</button>
            </div>
            <a className='whatsAppLinkButton' target='_blank'  rel="noreferrer" href="https://wa.me/+923246435840" ><img className='whatsAppIcon' src={whatsAppIcon} alt="Icon" /></a>
        </div>
    );
}
