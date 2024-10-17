import React, { useState , useEffect} from 'react'

export default function Navigation() {
    const [line1,setLine1] = useState({transform : 'rotate(0deg)'});
    const [line2,setLine2] = useState({opacity : '1'});
    const [line3,setLine3] = useState({transform : 'rotate(0deg)'});
    const [showItems,setShowItems] = useState({right: '-100%'});
    const [key , setKey] = useState(true)
    const showNavItems = ()=>{
        if(key === true){
            setShowItems({right: '0%'});
            setKey(false)
            setLine2({opacity : '0'})
            setLine1({transform : 'rotate(-45deg)'})
            setLine3({transform : 'rotate(45deg)'})
        }
        else{
            setShowItems({right : '-100%'})
            setKey(true)
            setLine2({opacity : '1'})
            setLine1({transform : 'rotate(0deg)'})
            setLine3({transform : 'rotate(0deg)'})
        }
    }
    
    const [showNav , setShowNav] = useState({position : 'absolute', top : '0%'})
    useEffect(()=>{
        let lastScroll = window.scrollY
        window.addEventListener('scroll',()=>{
            if(window.scrollY > lastScroll){
                setShowNav({ position : 'fixed', top : '-30%'})
            }
            else{
                setShowNav({ position : 'fixed', top : '0%'})
            }
            lastScroll = window.scrollY
        })
    })

    return (
        <>
            <div className="navigation" style={showNav}>
                <div className="navbar">
                    <a className='logoLink' href="#home"><div className="logo"><span className='colored_logo'>S</span>ANDILA <span className='colored_logo'>D</span>IGIX</div></a>
                    <ul className="nav_items_container large_nav_items_container">
                        <li className="nav_item"><a href="#home" className="nav_item_link">Home</a></li>
                        <li className="nav_item"><a href="#ourServices" className="nav_item_link">Our Services</a></li>
                        <li className="nav_item"><a href="#aboutUs" className="nav_item_link">About Us</a></li>
                    </ul>
                    <div onClick={showNavItems} className= "burger">
                        <div className="line" style={line1}></div>
                        <div className="line" style={line2}></div>
                        <div className="line" style={line3}></div>
                    </div>
                </div>
            </div>
            <ul className= "small_nav_items_container" style={showItems}>
                <li className="nav_item"><a href="#home" className="nav_item_link">Home</a></li>
                <li className="nav_item"><a href="#ourServices" className="nav_item_link">Our Services</a></li>
                <li className="nav_item"><a href="#aboutUs" className="nav_item_link">About Us</a></li>
            </ul>
        </>
    )
}
