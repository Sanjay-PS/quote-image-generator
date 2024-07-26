import { useState } from 'react'
import Form from './components/Form/Form';
import ImageGenerator from './components/ImageGenerator/ImageGenerator';
import './App.css';

function App() {
    const [quote, setQuote] = useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam consectetur sapiente iste quisquam, culpa distinctio officia voluptatibus, tempore sunt provident odit libero illum ex aliquid molestias nisi vitae impedit itaque.");
    const [author, setAuthor] = useState("John Doe");
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(200);
    const [background, setBackground] = useState("#333333");
    const [color, setColor] = useState("#ffffff");

    return (
        <div className="container">

            {/* Form component */}
            <Form 
                quote={quote} 
                author={author} 
                width={width} 
                height={height} 
                background={background} 
                color={color}
                onQuoteChange={setQuote}
                onAuthorChange={setAuthor}
                onWidthChange={setWidth}
                onHeightChange={setHeight}
                onBackgroundChange={setBackground}
                onColorChange={setColor}
            />

            {/* Image Generator Component */}
            <ImageGenerator 
                quote={quote} 
                author={author}
                width={width} 
                height={height} 
                background={background} 
                color={color}
            />
            
        </div>
    )
}

export default App
