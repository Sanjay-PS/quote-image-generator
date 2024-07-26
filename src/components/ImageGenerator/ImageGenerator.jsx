import { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import './imageGenerator.css';

const ImageGenerator = ({  quote, author, width, height, background, color }) => {

    const quoteEle = useRef(null);

    // Convert HTML to Image using library
    const handleSaveClick = () => {
        htmlToImage.toPng(quoteEle.current)
        .then((dataUrl) => {
            // download image
            const link = document.createElement('a');
            link.download = 'html-to-img.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(console.error);
    }
    
    return (
        <div className="image-generator">
            <div className='image-container'>

                {/* Image card */}
                <div className="image-div" ref={quoteEle} style={{ 
                    width: `${width ?? 400}px`,
                    height: `${height ?? 250}px`,
                    background: background ?? "#444",
                    color: color ?? "#FFF",
                }}>
                    <div>{quote}</div>
                    <div className='author-name'>~ {author}</div>
                </div>

            </div>

            {/* Save button */}
            <button className='save-button' onClick={handleSaveClick}>Save Image</button>
        </div>
    );
};

export default ImageGenerator;