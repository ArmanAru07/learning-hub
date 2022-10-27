import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="bg-dark text-center text-white p-5">
                    <h2>Learning Hub</h2>
                    <p><small>Office 41, Chowmuhani, Noakhali.</small></p>
                    <p><small>Vhuiyan Tower</small></p>
                    <p><small>Privacy Ploicy  |   Terms of use</small></p>
                    <p className="m-4">
                        <a href="www.facebook.com" className="p-4"><FaFacebook></FaFacebook></a>
                        <a href="www.instagram.com" className="p-4"><FaInstagram></FaInstagram></a>
                        <a href="www.twitter.com" className="p-4"><FaTwitter></FaTwitter></a>
                        <a href="www.tiktok.com" className="p-4"><FaTiktok></FaTiktok></a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;