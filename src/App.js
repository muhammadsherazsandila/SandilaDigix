import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import MySkills from './components/MySkills';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

// *********** Importing Images*************
import subGraphic_1 from '../src/components/photos/graphics_designer/graphic_6.jpg'
import subGraphic_2 from '../src/components/photos/graphics_designer/graphic_5.jpg'
import subGraphic_3 from '../src/components/photos/graphics_designer/graphic2.jpg'
import subGraphic_4 from '../src/components/photos/graphics_designer/graphic3.jpg'

import subWeb_1 from '../src/components/photos/web_developer/web7.jpg'
import subWeb_2 from '../src/components/photos/web_developer/web7.jpg'
import subWeb_3 from '../src/components/photos/web_developer/web7.jpg'
import subWeb_4 from '../src/components/photos/web_developer/web7.jpg'

import subWordPress_1 from '../src/components/photos/word_press/word1.jpg'
import subWordPress_2 from '../src/components/photos/word_press/word1.jpg'
import subWordPress_3 from '../src/components/photos/word_press/word1.jpg'
import subWordPress_4 from '../src/components/photos/word_press/word1.jpg'

import subDigital_1 from '../src/components/photos/digital_marketing/digital_3.jpg'
import subDigital_2 from '../src/components/photos/digital_marketing/digital_3.jpg'
import subDigital_3 from '../src/components/photos/digital_marketing/digital_3.jpg'
import subDigital_4 from '../src/components/photos/digital_marketing/digital_3.jpg'



import team_member_img_1 from '../src/components/photos/team_member_images/web_developer.jpeg'
import team_member_img_2 from '../src/components/photos/team_member_images/graphics_designer.jpg'
import team_member_img_3 from '../src/components/photos/team_member_images/wordpress_developer.png'
import team_member_img_4 from '../src/components/photos/team_member_images/digital_marketer.png'



import graphicDesinging_1 from '../src/components/photos/graphics_designer/graphic3.jpg'
import web_1 from "../src/components/photos/web_developer/web7.jpg";
import word_press_1 from '../src/components/photos/word_press/word5.jpg'
import digita_1 from '../src/components/photos/digital_marketing/digital_3.jpg'

const team_names = ['Muhammad Sheraz', 'Saqib Iqbal', 'Muhammad Ansar', 'Shoaib Akhtar'];
const team_skills = ['Web Developer', 'Graphics Designer', 'Wordpress Developer', 'Digital Marketer']



function App() {



  return (
    <>
    <Navigation/>
    <Hero/>
    <About/>
    <Services id = "ourServices" skillName= "Our Services" para= "We offer expert web development and graphic design services tailored to your unique needs, ensuring a captivating online presence. Our team specializes in WordPress development, delivering custom solutions that enhance user experience and engagement." img_1={web_1} img_2={graphicDesinging_1} img_3={word_press_1} img_4={digita_1} subSkillName_1= "Web Devlopement" subSkillName_2="Graphic Designing" subSkillName_3= "Wordpress Websites" subSkillName_4= "Digital Marketing" subPara_1= "Web development builds and maintains websites, ensuring functionality and a great user experience online." subPara_2= "Graphic design creates visuals that communicate messages effectively and engaging audiences." subPara_3="WordPress development customizes websites using themes and plugins to manage content efficiently." subPara_4= "Digital marketing promotes products online through strategies like SEO, social media to drive engagement." buttonText = "Readmore" button_link_1= "#webDevelopment" button_link_2= "#graphicDesigning" button_link_3= "#wordpress" button_link_4="#digitalMarketing" target= "_self"/>
    <MySkills id = 'graphicDesigning' skillName = 'Graphics Designing'  para = 'Graphic designing is the creative process of visually communicating ideas through imagery, typography, and layout. It plays a crucial role in branding, helping businesses establish a unique identity and connect with their audience. By blending art and technology, graphic design enhances user experiences across various media and platforms.' img_1={subGraphic_1} img_2={subGraphic_2} img_3={subGraphic_3} img_4={subGraphic_4} subPara_1= 'Branding is the process of creating a unique identity and perception for a business to promote product.' subPara_2= 'Logo design involves creating a unique visual symbol that represents a brand’s identity and values effectively.' subPara_3= 'Poster design combines imagery and text to create visually appealing communications and convey messages.' subPara_4= 'Flyer design involves materials products, effectively communicating essential information.' subSkillName_1= 'Branding'  subSkillName_2= 'Logo Designing' subSkillName_3= 'Posters Desinging' subSkillName_4= 'Flayer Designing'/>
    <MySkills id = 'webDevelopment' skillName = 'Web Development'  para = 'Web development encompasses the creation and maintenance of websites, combining coding and design skills. It focuses on ensuring functionality, usability, and responsive layouts to enhance user experiences. Developers use various technologies and frameworks to build dynamic and interactive web applications that meet client needs.' img_1={subWeb_1} img_2={subWeb_2} img_3={subWeb_3} img_4={subWeb_4} subPara_1='Front-end development focuses on building the visual aspects of websites, ensuring user-friendly and interactive interfaces.'subPara_2= 'Back-end development involves server-side programming, managing databases, and handling application logic to support user requests.' subPara_3= 'Databases store and organize data, enabling efficient retrieval and management for applications and websites.' subPara_4= 'Frameworks provide pre-built components and tools that streamline development processes, enhancing productivity and code organization.' subSkillName_1= 'Front-End'  subSkillName_2= 'Back-End' subSkillName_3= 'Databases' subSkillName_4= 'Frameworks'/>
    <MySkills id = 'wordpress' skillName = 'WordPress Development'  para = 'WordPress websites are built on a versatile content management system that allows easy customization and management. They offer a wide range of themes and plugins, enabling users to create anything from blogs to e-commerce sites. With a user-friendly interface, WordPress empowers individuals and businesses to maintain their online presence effortlessly.' img_1={subWordPress_1} img_2={subWordPress_2} img_3={subWordPress_3} img_4={subWordPress_4} subPara_1='Users can create and publish posts, pages, and multimedia content easily through the intuitive editor.'subPara_2= 'Admins can manage user roles and permissions, controlling who can access and edit content.' subPara_3= 'This is the primary service that stores website files on servers, allowing users to access your site via a domain name.' subPara_4= 'Regular updates and security checks are essential activities to keep the website running smoothly.' subSkillName_1= 'Content Creation'  subSkillName_2= 'User Management' subSkillName_3= 'Web Hosting' subSkillName_4= 'Site Maintenance'/>
    <MySkills id = 'digitalMarketing' skillName = 'Digital Marketing'  para = 'Digital marketing involves promoting products and services online through various channels, including social media, email, and search engines. It leverages data analytics to target specific audiences and measure campaign effectiveness. By using diverse strategies, businesses can enhance brand visibility and engage with customers effectively in the digital space.' img_1={subDigital_1} img_2={subDigital_2} img_3={subDigital_3} img_4={subDigital_4} subPara_1='Optimizing website content to improve visibility and rankings on search engine results pages.'subPara_2= 'Promoting products and services on platforms like Facebook, Instagram,TickTok and Twitter.' subPara_3= ' Sending targeted emails to nurture leads, promote products, and maintain customer relationships makes marketin easier.' subPara_4= 'Collaborating with partners to promote products or services, earning commissions for referrals.' subSkillName_1= 'SEO'  subSkillName_2= 'Social Media' subSkillName_3= 'Email Marketing' subSkillName_4= 'Affiliate Marketing'/>
    <Services id= "ourTeam" skillName= "Our Team" para= "Meet our diverse team of experts, each bringing unique skills to elevate your online presence. Our talented web developer crafts seamless and engaging websites, while our graphic designer creates stunning visuals that captivate audiences. With a dedicated WordPress developer and a savvy digital marketer, we ensure your brand stands out and reaches its target audience effectively." img_1={team_member_img_1} img_2={team_member_img_2} img_3={team_member_img_3} img_4={team_member_img_4} subPara_1= {team_skills[0]} subPara_2= {team_skills[1]} subPara_3={team_skills[2]} subPara_4= {team_skills[3]} subSkillName_1= {team_names[0]} subSkillName_2= {team_names[1]} subSkillName_3= {team_names[2]} subSkillName_4= {team_names[3]} buttonText= "Contact Me" button_link_1 = "https://wa.me/+923260468787" button_link_2 = "https://wa.me/+923246435840"button_link_3 = "https://wa.me/+923098295120" button_link_4 = "https://wa.me/+923002283667" target= "_blank"/>
    <Footer/>
    <Copyright/>
    </>

  );
}

export default App;
