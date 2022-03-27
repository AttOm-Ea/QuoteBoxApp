import './Essence.css';

const Essence = ({ Quote, Author })=> {
    return (
        <div className='contentEssence'>
                {/* Quote */}
            <div className='contentQuoteText'> { Quote } </div>
                {/* Author */}
            <div className='contentAuthor'> 
                <div className='lineAuthor'> <div></div> </div>
                <div className='textAuthor'> { Author } </div>
                <div className='lineAuthor'> <div></div> </div>
            </div>
        </div>
    );
}

export default Essence;
