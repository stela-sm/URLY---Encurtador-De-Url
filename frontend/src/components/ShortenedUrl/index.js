import { useState } from 'react';
import './style.css';

export default function ShortenedUrl({shortUrl, setIsModalOpen}){
    const [copied, setCopied] = useState(false);


    const handleCopyButtonClick = async () => {
        await navigator.clipboard.writeText(shortUrl);
    
        setCopied(true);
    
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return(
        
        <div
        className="modal-overlay"
    >
        <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="modal-header">
                <h3>Sua URL curta está pronta!</h3>

                <button
                    className="close-btn"
                    onClick= {() => setIsModalOpen(false)}
                >
                    ✕
                </button>
            </div>

            <div className="modal-content">
            <div className='shortUrl-div'>
            <span className={`copy-text ${copied ? "copied" : ""}`}>{
            copied ? "Copiado!" : shortUrl
            }</span>
            <svg onClick={handleCopyButtonClick} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
            </div>
            </div>
        </div>
    </div>
    );
}