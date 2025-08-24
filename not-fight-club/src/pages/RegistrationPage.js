import {useState} from "react";
import {useNavigate} from "react-router-dom";

function RegistrationPage({setIsRegistered}) {
    const [characterName, setCharacterName] = useState("");
    const navigate = useNavigate();

    const registerData = (e) => {
        e.preventDefault();

        if (characterName.trim() === "") {
            alert("Create Character Name");
            return;
        }

        localStorage.setItem("characterName", characterName);
        localStorage.setItem("isRegistered", "true")

        setIsRegistered(true);
        navigate("/")
    };

    return (
        <form className="registration-page" onSubmit={registerData}>
            <h2>Create Your Character</h2>
            <input 
                type="text" 
                value={characterName} 
                onChange={(e) => setCharacterName(e.target.value)} 
                placeholder="Character Name"
            />
            <button type="submit">Create Character</button>
        </form>
    );
}

export default RegistrationPage;