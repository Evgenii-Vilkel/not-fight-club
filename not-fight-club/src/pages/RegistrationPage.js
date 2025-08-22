
// получить данные из input



const characterName = {};

function RegistrationPage({setIsRegistered}) {
    const registerBtn = () => {

        setIsRegistered(true);
    }
    return (
        <form action=''>
            <h2>Create Your Character</h2>
            <input type="text" id='name' value={characterName} />
            <label htmlFor="name">Character Name</label>
            <button onclick='registerBtn'>Create Character</button>
        </form>
    );
}

export default RegistrationPage;