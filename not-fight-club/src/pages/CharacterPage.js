import {useState} from "react";
import character1 from '../img/character-image-1.png';
import character2 from '../img/character-image-2.png';
import character3 from '../img/character-image-3.png';

function CharacterPage() {
    const characterName = localStorage.getItem("characterName");
    const winsCount = localStorage.getItem("winsCount");
    const losesCount = localStorage.getItem("losesCount");
    const [activeIndex, setActiveIndex] = useState(0);

    const characterImages = [character1, character2, character3];

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