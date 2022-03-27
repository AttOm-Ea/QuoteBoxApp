import './Navbar.css';
import { FaTwitter, FaQuoteLeft } from "react-icons/fa";

function Navbar({Quote, Author}) {

    let link = "https://twitter.com/intent/tweet?text=" + Quote + "...  By '" + Author + "'";
    const logo = require('../img/Logo.png');

    return (
        <div className='contentNavbar'>
            <div> <FaQuoteLeft className='FaQuote'/> </div>
            <img className='lImg' src={logo} alt="EA"/>
            <a className='btnTwitter' href={link} target="_blank"> <FaTwitter className='faTwitter'/> </a>
        </div>
    );
}

export default Navbar;