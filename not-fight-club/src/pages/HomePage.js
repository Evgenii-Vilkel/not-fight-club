import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const fightClick = () => {
        navigate('/battle')
    }

    return (
        <div className="home-page">
            <button className="fight-btn" onClick={fightClick}>Fight!</button>
        </div>
    );
}

export default HomePage;