import React from 'react'
import facebook from '../components/photos/icons/facebook.png'
import instagram from '../components/photos/icons/instagram.png'
import youtube from '../components/photos/icons/youtube.png'
export default function Footer() {
  return (
    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 black_footer'>
      <div className="col nav_items_flex_container" style={{marginRight : '-1rem'}}>
        <a href="#home" className="nav_item_link">Home</a>
        <a href="#ourServices" className="nav_item_link">Our Services</a>
        <a href="#aboutUs" className="nav_item_link">About Us</a>
      </div>
      <div className="col nav_items_flex_container">
        <a href="#home" className="nav_item_link">Sandila Digix</a>
        <a href='https://wa.me/+923246435840' target='' className='nav_item_link' style={{ fontStyle: 'italic' }}>+923246435840</a>
        <a href='https://maps.app.goo.gl/G1ggTZXjVK1EMJqC7' target='' className='nav_item_link'>Lahore , Pakistan</a>
      </div>
      <div className="col nav_items_flex_container" style={{marginLeft : '-1rem'}}>
        <a href="https://www.instagram.com/saqib.official9/" className="social_link" target='blank'><img src={instagram} alt="icon" /> @instagram</a>
        <a href="https://www.facebook.com/Saqib.official9/" className="social_link" target='blank'><img src={facebook} alt="icon" /> @facebook</a>
        <a href="https://youtube.com/@saqibiqbal2987?si=zUWDmeyNqR4_wEYF" className="social_link" target='blank'><img src={youtube} alt="icon" /> @youtube</a>
      </div>
    </div>
  )
}
