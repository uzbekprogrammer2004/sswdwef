import React from "react";
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, InstagramOutlined, FacebookOutlined, SendOutlined } from '@ant-design/icons';
import "./footer.css";
import Logo from '@/public/logo.png';
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer-top"></div>
      <div className="footer-main ">
        <div className="footer-container">
          <div className="footer-header">
            <div className='footer-logo'>
              <Image src={Logo} alt="Sayt logosi" />
              <h2 className="footer-logo-text">Sport Market</h2>
            </div>
            <div className="footer-section">
              <p className="footer-title">Контакты</p>
              <div className="contact-info my-3 ">
                <PhoneOutlined className="icon text-white " />
                <span className="contact-prefix">+998 (94) </span>
                <span className="contact-number">565-85-85</span>
              </div>
              <p className="footer-item">
                <MailOutlined className="icon" /> support@figma.com
              </p>
            </div>
            <div className="footer-section">
              <p className="footer-item">
                <EnvironmentOutlined className="icon" />
                Tashkent Sh. Chilonzor 9 kvartal <br /> 12 uy
              </p>
            </div>
            <div className="footer-subscribe gap-3 ">
              <p className="footer-title">Подписатся</p>
              <form className="footer-form ">
                <input
                  type="text"
                  className="footer-input"
                  placeholder="support@figma.com"
                />
                <button className="footer-button mt-2 ">
                  Отправить <SendOutlined />
                </button>
              </form>
              <div className="footer-social">
                <InstagramOutlined className="icon" />
                <FacebookOutlined className="icon" />
                <InstagramOutlined className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-container">
          <p className="footer-copy">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Sales and Refunds</span>
            <span>Legal</span>
            <span>Site Map</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
