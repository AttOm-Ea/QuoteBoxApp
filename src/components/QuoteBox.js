import './QuoteBox.css';
import Navbar from './Navbar.js';
import Essence from './Essence.js';
import NextQuote from './NextQuote.js';
import {useState} from "react";
import { Quotes } from "../Quotes.js";

function QuoteBox({fIsFloor}) {

    const numRandom = Math.round(Math.random()*100);
    const [isQuote, setQuote] = useState(Quotes[numRandom].quote);
    const [isAuthor, setAuthor] = useState(Quotes[numRandom].author);

    const newQuote = () => {
        let newNum = Math.round(Math.random()*100);
        setQuote(Quotes[newNum].quote);
        setAuthor(Quotes[newNum].author);
        fIsFloor();
    }

    return (
        <div className="contentQuote"  >
            <Navbar Quote={isQuote} Author={isAuthor}/>            
            <Essence Quote={isQuote} Author={isAuthor}/>
            <NextQuote fNewQuote={newQuote}/>          
        </div>
    );
}

export default QuoteBox;
