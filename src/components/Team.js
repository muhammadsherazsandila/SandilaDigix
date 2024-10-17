import React, { useState } from 'react'
import team_member_img_1 from '../components/photos/web_developer/web7.jpg'
import team_member_img_2 from '../components/photos/web_developer/web6.jpg'
import team_member_img_3 from '../components/photos/web_developer/web4.jpg'
import team_member_img_4 from '../components/photos/web_developer/web3.jpg'

export default function Team() {

    const team = [team_member_img_1, team_member_img_2, team_member_img_3, team_member_img_4];
    const team_names = ['Muhammad Sheraz', 'Saqib Iqbal', 'Muhammad Ansar', 'Shoaib Akhtar'];
    const team_skills = ['Web Developer', 'Graphics Designer', 'Wordpress Developer', 'Digital Marketer']
    const team_contact_numbers = ['+923260468787', '+923246435840', '+923098295120', '+923002283667']

    const [currentIndex_1,SetCurrentIndex_1] = useState(0)
    const [currentIndex_2,SetCurrentIndex_2] = useState(1)
    const [currentIndex_3,SetCurrentIndex_3] = useState(2)
    const [currentIndex_4,SetCurrentIndex_4] = useState(3)
    const [visible,setVisible] = useState('fade_out')
    const nextMember = ()=>{
        setVisible('fade_in')
        setTimeout(() => {
            setVisible('fade_out')
            SetCurrentIndex_1((prevIndex)=>(prevIndex + 1) % team.length)
            SetCurrentIndex_2((prevIndex)=>(prevIndex + 1) % team.length)
            SetCurrentIndex_3((prevIndex)=>(prevIndex + 1) % team.length)
            SetCurrentIndex_4((prevIndex)=>(prevIndex + 1) % team.length)
        }, 200);
        }
    const prevMember = ()=>{
        setVisible('fade_in')
        setTimeout(() => {
            setVisible('fade_out')
            SetCurrentIndex_1((prevIndex)=>(prevIndex - 1 + team.length) % team.length)
            SetCurrentIndex_2((prevIndex)=>(prevIndex - 1 + team.length) % team.length)
            SetCurrentIndex_3((prevIndex)=>(prevIndex - 1 + team.length) % team.length)
            SetCurrentIndex_4((prevIndex)=>(prevIndex - 1 + team.length) % team.length)
        }, 200);
    }


    let dimention = 25;
    if(window.innerWidth<=1240){
        dimention = 22;
    }
    if(window.innerWidth <=1170){
        dimention = 18;
    }
    if(window.innerWidth <=1080){
        dimention = 16;
    }

    return (
        <div id='ourTeam' className='team web_item animated_element'>
            <h1 className='item_heading animated_element'>Our Team</h1>
            <p className="about_details animated_element">
                Meet our diverse team of experts, each bringing unique skills to elevate your online presence. Our talented web developer crafts seamless and engaging websites, while our graphic designer creates stunning visuals that captivate audiences. With a dedicated WordPress developer and a savvy digital marketer, we ensure your brand stands out and reaches its target audience effectively.</p>

            <div className="d-flex justify-content-between align-items-center w-100" style={{marginTop : '100px'}}>
                <div className="card animated_element" style={{ width: '9rem', overflow: 'hidden', height: '9rem' }}>
                    <img src={team[currentIndex_1]} className="card-img-top model_team_img_small" alt="..." />
                    <div className="card-body">
                        <p className="card-title">{team_names[currentIndex_1]}</p>
                        <p className="card-title">{team_skills[currentIndex_1]}</p>
                        <a className='btn custom-btn animated_element'  style={{background : '#ed1c24',color : 'white'}} href= {`https://wa.me/${team_contact_numbers[currentIndex_1]}`}>Contact Me</a>
                    </div>
                </div>
                <div className="card animated_element" style={{ width: '9rem', overflow: 'hidden', height: '9rem' }}>
                    <img src={team[currentIndex_2]} className="card-img-top model_team_img_small" alt="..." />
                    <div className="card-body">
                        <p className="card-title">{team_names[currentIndex_2]}</p>
                        <p className="card-title">{team_skills[currentIndex_2]}</p>
                        <a className='btn custom-btn animated_element'  style={{background : '#ed1c24',color : 'white'}} href= {`https://wa.me/${team_contact_numbers[currentIndex_2]}`}>Contact Me</a>
                    </div>
                </div>
                <div className={`card animated_element  ${visible}`} style={{ width: `${dimention}rem` ,height : `${dimention}rem`}}>
                    <img src={team[currentIndex_1]} className="card-img-top model_team_img " alt="..." />
                    <div className="card-body">
                        <h2 className="card-title model_card_title">{team_names[currentIndex_1]}</h2>
                        <p className="card-title">{team_skills[currentIndex_1]}</p>
                        <a className='btn custom-btn animated_element'  style={{background : '#ed1c24',color : 'white'}} href= {`https://wa.me/${team_contact_numbers[currentIndex_1]}`} target='blank'>Contact Me</a>
                    </div>
                </div>
                <div className="card animated_element" style={{ width: '9rem', overflow: 'hidden', height: '9rem' }}>
                    <img src={team[currentIndex_3]} className="card-img-top model_team_img_small" alt="..." />
                    <div className="card-body">
                        <p className="card-title">{team_names[currentIndex_3]}</p>
                        <p className="card-title">{team_skills[currentIndex_3]}</p>
                        <a className='btn custom-btn animated_element'  style={{background : '#ed1c24',color : 'white'}} href= {`https://wa.me/${team_contact_numbers[currentIndex_3]}`}>Contact Me</a>
                    </div>
                </div>
                <div className="card animated_element" style={{ width: '9rem', overflow: 'hidden', height: '9rem' }}>
                    <img src={team[currentIndex_4]} className="card-img-top model_team_img_small" alt="..." />
                    <div className="card-body">
                        <p className="card-title">{team_names[currentIndex_4]}</p>
                        <p className="card-title">{team_skills[currentIndex_4]}</p>
                        <a className='btn custom-btn animated_element'  style={{background : '#ed1c24',color : 'white'}} href={`https://wa.me/${team_contact_numbers[currentIndex_1]}`}>Contact Me</a>
                    </div>
                </div>
                <div className="slider-controls team_slider_controls">
                    <button onClick={prevMember} className="team_slider_button">&lt;</button>
                    <button onClick={nextMember} className="team_slider_button">&gt;</button>
                </div>
            </div>
        </div>
    )
}
