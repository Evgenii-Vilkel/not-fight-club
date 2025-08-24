import {useState} from "react";

function CharacterPage() {
    const characterName = localStorage.getItem("characterName");
    const winsCount = localStorage.getItem("winsCount");
    const losesCount = localStorage.getItem("losesCount");
    const [activeIndex, setActiveIndex] = useState(0);

    const characterImages = [
        "/img/character-img-1.png",
        "/img/character-img-2.png",
        "/img/character-img-3.png",
    ];

    return (
        <div className="character-page">
            <div className="character-rating">
            <p>Name: {characterName}</p>
                <p>Wins: {winsCount ? winsCount : 0}</p>
                <p>Loses: {losesCount ? losesCount : 0}</p>
            </div>
            <div className="character-image-wrapper">
                {characterImages.map((src, index) => (
                    <img
                        key={index}
                        className={`character-image ${index === activeIndex ? "active" : ""}`}
                        src={src}
                        alt="character"
                        onClick={() => setActiveIndex(index)}>
                    </img>
        ))}
            </div>
        </div>
    );
}

export default CharacterPage;