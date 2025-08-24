import {HashRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import SettingsPage from './pages/SettingsPage';
import BattlePage from './pages/BattlePage';


function App() {
const [isRegistered, setIsRegistered] = useState(false);
const characterName = localStorage.getItem("characterName");

// Если была произведена регистрация, то возьмем isRegistered = 'true' из localStorage
// чтобы пользователь после регистрации не попадал снова на страницу регистрации при вводе адреса вручную
useEffect(() => {
  const storedRegistration = localStorage.getItem("isRegistered");
  if (storedRegistration === "true") {
    setIsRegistered(true);
  }
}, []);

  return (
    <>
      <HashRouter>
        {isRegistered && (
          <nav className="header">
            <h3>Hello, {characterName}</h3>
              <ul className="header-menu">
                  <li><NavLink className={"header-link"} to="/">Home</NavLink></li>
                  <li><NavLink className={"header-link"} to="/character">Character</NavLink></li>
                  <li><NavLink className={"header-link"} to="/settings">Settings</NavLink></li>
              </ul>
          </nav>
        )}

        <Routes>

          {isRegistered && (
            <>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path='/character' element={<CharacterPage></CharacterPage>}></Route>
              <Route path='/settings' element={<SettingsPage></SettingsPage>}></Route>
              <Route path='/battle' element={<BattlePage></BattlePage>}></Route>
              <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
            </>
          )}
            
          {/* Если не зарегистрирован - показываем только RegistrationPage */}
          {!isRegistered && (
            <>
              <Route path='/registration' element={<RegistrationPage setIsRegistered={setIsRegistered}></RegistrationPage>} />
              <Route path="*" element={<Navigate to="/registration"></Navigate>}></Route>
            </>
          )}
        
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
