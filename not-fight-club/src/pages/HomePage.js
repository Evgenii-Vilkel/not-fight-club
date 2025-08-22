import {useNavigate} from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    const fightClick = () => {
        navigate('/battle')
    }

    return (
        <>
            <button className="fight-btn" onClick={fightClick}>Fight!</button>
        </>
    );
}

export default HomePage;