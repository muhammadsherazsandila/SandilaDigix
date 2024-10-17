import React, { useEffect } from 'react'

export default function Services({id, skillName, para, img_1, img_2, img_3, img_4, subPara_1, subPara_2, subPara_3, subPara_4, subSkillName_1, subSkillName_2, subSkillName_3, subSkillName_4 , buttonText , button_link_1 , button_link_2, button_link_3,button_link_4 , target}) {

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
        animatedElement.forEach(element => { observer.observe(element) })
    });

    let coloum = 4;
    if(window.innerWidth <= 1100){
        coloum = 3;
    }

    return (
        <div id= {id} className='services web_item animated_element'>
            <h1 className='item_heading animated_element'>{skillName}</h1>
            <p className="about_details animated_element">{para}</p>
            <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-${coloum} g-4 my-5`}>
                <div className="col">
                    <div className="card mx-auto animated_element" style={{ width: '15rem' }}>
                        <img src={img_1} className="card mx-auto-img-top" alt="..." />
                        <div className="card mx-auto-body">
                            <h5 className="card mx-auto-title">{subSkillName_1}</h5>
                            <p className="card mx-auto-text">{subPara_1}</p>
                            <a target = {target} href= {button_link_1} className="btn custom-btn" style={{ background: '#ed1c24', color: 'white' }}>{buttonText}</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mx-auto animated_element" style={{ width: '15rem' }}>
                        <img src={img_2} className="card mx-auto-img-top" alt="..." />
                        <div className="card mx-auto-body">
                            <h5 className="card mx-auto-title">{subSkillName_2}</h5>
                            <p className="card mx-auto-text">{subPara_2}</p>
                            <a target = {target} href= {button_link_2} className="btn custom-btn" style={{ background: '#ed1c24', color: 'white' }} >{buttonText}</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mx-auto animated_element" style={{ width: '15rem' }}>
                        <img src={img_3} className="card mx-auto-img-top" alt="..." />
                        <div className="card mx-auto-body">
                            <h5 className="card mx-auto-title">{subSkillName_3}</h5>
                            <p className="card mx-auto-text">{subPara_3}</p>
                            <a target = {target} href= {button_link_3} className="btn custom-btn" style={{ background: '#ed1c24', color: 'white' }}>{buttonText}</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mx-auto animated_element" style={{ width: '15rem' }}>
                        <img src={img_4} className="card mx-auto-img-top" alt="..." />
                        <div className="card mx-auto-body">
                            <h5 className="card mx-auto-title">{subSkillName_4}</h5>
                            <p className="card mx-auto-text">{subPara_4}</p>
                            <a target = {target} href= {button_link_4} className="btn custom-btn" style={{ background: '#ed1c24', color: 'white' }}>{buttonText}</a>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
