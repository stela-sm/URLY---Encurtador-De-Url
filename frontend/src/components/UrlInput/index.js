import icon from "../../assets/icon_128.png"
import { shortUrl } from "../../services/api";
import "./style.css"


export default function UrlInput({setShortUrl, setIsModalOpen, setUrls, urls}){

    const handleButtonClick = async () => {
        const originalUrl = document.getElementById("url").value
        const shortenedUrl = await shortUrl(originalUrl)
        
        const newUrl = {
            originalUrl: originalUrl,
            shortUrl: shortenedUrl
        };
    
    
        const updatedUrls = [...urls, newUrl].slice(-4);
    
        setUrls(updatedUrls)
        setIsModalOpen(true);
        setShortUrl(shortenedUrl)
        navigator.clipboard.writeText(shortenedUrl)
    }

    return (
       
        <div className="input-div">
            <img src={icon} alt="Ícone de link"/>
            <input type="text" placeholder="Cole sua url aqui..." id="url"/>
            <button className="primary-button"
            
            onClick={handleButtonClick}

            >Encurtar URL</button>
        </div>
       
        
    );
}