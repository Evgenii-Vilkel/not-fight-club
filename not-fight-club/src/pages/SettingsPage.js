import {useState} from "react";


function SettingsPage() {
    const [characterName, setCharacterName] = useState("");
    const registerData = () => {
        
        if (characterName.trim() === "") {
            alert("Create Character Name");
            return;
        }
        localStorage.setItem("characterName", characterName);    
    }

    return (
        <form className="settings-page" onSubmit={registerData}>
            <h2>Change Character Name: </h2>
            <input 
                type="text" 
                value={characterName}
                onChange={(e) => setCharacterName(e.target.value)}
                placeholder="New Name"></input>
            <button type="submit">Edit</button>
        </form>
    );
}

export default SettingsPage;