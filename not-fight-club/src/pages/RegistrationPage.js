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

        setIsRegistered(true);
        localStorage.setItem("IsRegistered", "true")

        navigate("/")
    };

    return (
        <form onSubmit={registerData}>
            <h2>Create Your Character</h2>
            <input type="text" id="name" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />
            <label htmlFor="name">Character Name</label>
            <button type="submit">Create Character</button>
        </form>
    );
}

export default RegistrationPage;