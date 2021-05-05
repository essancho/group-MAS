import React from 'react';
import {Col,Container,Row,Image,Form} from 'react-bootstrap'
import { FiInstagram,FiFacebook,FiTwitter,FiYoutube,FiUser} from 'react-icons/fi';
import {HiOutlineInformationCircle} from 'react-icons/hi';
import {IoChatbubblesOutline} from 'react-icons/io5';
import {AiOutlineStar} from 'react-icons/ai'
import {FaRegEnvelope} from 'react-icons/fa'
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="font-mont">
            <Container fluid className="pt-3 mt-5"> 
                
                <Row style={{background:"#2c241d"}}>
                    <Col lg={6} className="ml-auto mr-auto pt-5 pl-5 pb-5" 
                        style={{background:"#2c241d",color:"#beb9b4"}}
                    >
                <h3 className="font-moret pt-5">Info</h3>
                <Link to="/signup">
                    <a style={{color:"#beb9b4",display:"flex"}}><h5><FiUser className="mr-3"/></h5>Sign In</a>
                </Link>
                <a href="https://pandco.zendesk.com/hc/en-us" style={{color:"#beb9b4",display:"flex"}}><h5><HiOutlineInformationCircle className="mr-3"/></h5>Help Centre</a>
                <a href="https://pandco.zendesk.com/hc/en-us" style={{color:"#beb9b4",display:"flex"}}><h5><IoChatbubblesOutline className="mr-3"/></h5>Live Chat</a>
                <a href="https://pandco.zendesk.com/hc/en-us" style={{color:"#beb9b4",display:"flex"}}><h5><AiOutlineStar className="mr-3"/></h5>Careers</a>
                <a href="https://pandco.zendesk.com/hc/en-us" style={{color:"#beb9b4",display:"flex"}}><h5><FaRegEnvelope className="mr-3"/></h5>Contact</a>

                <h2 className="pt-4" style={{display:"flex"}}> 
                    
                    <a href="https://www.instagram.com/" style={{color:"#beb9b4"}}><FiInstagram className="mr-3"/></a> 
                    <a href="https://www.twitter.com/" style={{color:"#beb9b4"}} className="mr-3"><FiTwitter /></a>
                     <a href="https://www.youtube.com/" style={{color:"#beb9b4"}}><FiYoutube className="mr-3"/></a>
                     <a href="https://www.facebook.com/" style={{color:"#beb9b4"}}><FiFacebook className="mr-3"/></a>

                 </h2>

                 <a href="https://us.pand.co/pages/terms-conditions" style={{color:"#beb9b4",display:"flex"}} className="mt-4">Copyright ©2021</a>
                 <a href="https://us.pand.co/pages/terms-conditions" style={{color:"#beb9b4",display:"flex"}}>Terms & Conditions</a>
                 <a href="https://us.pand.co/pages/privacy-policy" style={{color:"#beb9b4",display:"flex"}}>Privacy & Cookies</a>
                
                
                <p className="pt-3">Clark & Timms Ltd.</p>
                <p>Company no.08442586</p>
                    </Col>
                    
                    <Col lg={6} className="ml-auto mr-auto pt-5 pl-5 pb-5"
                        style={{background:"#594e45",color:"white"}}
                    >
                        <h3 className="font-moret pt-5">Keep in touch</h3>
                        
                        <Form.Control 
                            style={{background:"transparent",textColor:"white"}}
                            type="email" placeholder="Enter your email here..." />
                       

                    </Col>  
                    
                </Row>
                
            </Container>
        </div>
    );
};

export default Footer;
