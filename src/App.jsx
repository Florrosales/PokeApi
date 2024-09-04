// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Pokemon from "./Pokemon";
import PokemonById from "./PokemonID";

function Layout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <nav className="w-64 bg-orange-600 text-black p-6">
        <h2 className="text-2xl font-bold mb-4">Pokédex</h2>
        <ul>
          <li className="mb-2">
            <Link to="/pokemonFavorito" className="text-lg hover:underline">
              Mi Pokémon Favorito
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-1  h-screen p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="pokemonFavorito"
            element={<Pokemon name="Eevee" />}
          />
          <Route path="pokemon/:id" element={<PokemonById />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
