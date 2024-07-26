import './form.css';

const Form = ({ 
    quote, author, width, height, background, color, 
    onQuoteChange, onAuthorChange, onWidthChange, onHeightChange, onBackgroundChange, onColorChange 
}) => {

    // Generate Quote
    const generateQuote = () => {
        fetch("https://api.quotable.io/quotes/random")
        .then(response => response.json())
        .then(response => {
            onQuoteChange(response[0].content);
            onAuthorChange(response[0].author);
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="form">
            <h1>Generate Quote</h1>
            <textarea value={quote} onChange={(e) => onQuoteChange(e.target.value)}/>
            <h4>Author</h4>
            <input type="text" value={author} placeholder='Your name' onChange={(e) => onAuthorChange(e.target.value)}/>
            <button onClick={generateQuote}>Generate Quote</button>
            
            <h2>Properties</h2>
            <h4>Width</h4>
            <input type="range" value={width} min={100} max={800} onChange={(e) => onWidthChange(e.target.value)}/>
            
            <h4>Height</h4>
            <input type="range" value={height} min={100} max={500} onChange={(e) => onHeightChange(e.target.value)}/>
            
            <h4>Background</h4>
            <input type="color" value={background} onChange={(e) => onBackgroundChange(e.target.value)}/>
            
            <h4>Text Color</h4>
            <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)}/>
        </div>
    );
};

export default Form;