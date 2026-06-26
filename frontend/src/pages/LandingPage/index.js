import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import UrlInput from "../../components/UrlInput"
import ShortenedUrl from "../../components/ShortenedUrl"
import './style.css'
import History from "../../components/History";
import { useEffect, useState } from "react";

export default function LandingPage() {
    const [shortUrl, setShortUrl] = useState("teste")
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [urls, setUrls] = useState(
        JSON.parse(localStorage.getItem("urls-history")) || []
    );

    useEffect(()=>{
        localStorage.setItem(
            "urls-history",
            JSON.stringify(urls)
        );
    }, [urls])

    return (
        <>
        <Navbar />
        <main className="landing-page">
            <Header />
            <UrlInput setShortUrl={setShortUrl} setIsModalOpen={setIsModalOpen} setUrls={setUrls} urls={urls}/>
            {isModalOpen && (
            <ShortenedUrl
                 shortUrl={shortUrl}
                 setIsModalOpen={setIsModalOpen}
            />
        )}
        <div className="container history-div">
        <History urls={urls}/>
        </div>
        </main>
    </>
    );
}