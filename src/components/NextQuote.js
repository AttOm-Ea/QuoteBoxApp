import './NextQuote.css';
import { FaQuoteRight } from "react-icons/fa";

function NextQuote({fNewQuote}) {
    return (
        <div className='contentNext'>
            <button className='buttonN' onClick={fNewQuote}> <FaQuoteRight/> </button>
        </div>
    );
}

export default NextQuote;
