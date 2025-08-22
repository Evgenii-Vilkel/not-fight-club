import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import {useState} from 'react';
import './App.css';
import RegistrationPage from './pages/RegistrationPage';
import HomePage from './pages/HomePage';
import CharacterPage from './pages/CharacterPage';
import SettingsPage from './pages/SettingsPage';
import BattlePage from './pages/BattlePage';


function App() {
const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
      <BrowserRouter>
        {isRegistered && (
          <nav>
              <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/character">Character</NavLink></li>
                  <li><NavLink to="/settings">Settings</NavLink></li>
              </ul>
          </nav>
        )}

        <Routes>
        {/* Если не зарегистрирован — всегда показываем RegistrationPage */}
        {!isRegistered && (
          <Route path='*' element={<RegistrationPage setIsRegistered={setIsRegistered}></RegistrationPage>} />
        )}
        
        {isRegistered && (
          <>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path='/character' element={<CharacterPage></CharacterPage>}></Route>
            <Route path='/settings' element={<SettingsPage></SettingsPage>}></Route>
            <Route path='/battle' element={<BattlePage></BattlePage>}></Route>
          </>
        )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
