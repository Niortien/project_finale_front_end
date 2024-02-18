import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Login from './Components/pages/Login';
import Home from './Components/pages/Home';
import AjoutVehicule from './Components/pages/Ajout_vehicule';
import AjoutAgent from './Components/pages/Agent';
import AjoutClient from './Components/pages/Client';
import Account from './Components/pages/Compte';
import Statistiques from './Components/pages/Statistique';
import Agence from './Components/pages/Agence';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        {isLoggedIn ? (
          <>
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ajout_vehicule" element={<AjoutVehicule />} />
            <Route path="/agent" element={<AjoutAgent />} />
            <Route path="/client" element={<AjoutClient />} />
            <Route path="/agence" element={<Agence />} />
            <Route path="/compte" element={<Account />} />
            <Route path="/statistique" element={<Statistiques />} />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
